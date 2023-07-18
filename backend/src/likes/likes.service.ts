import { Inject, Injectable } from "@nestjs/common";
import { InjectModel, InjectConnection } from "@nestjs/mongoose";
import { Model, Document } from "mongoose";
import { Like } from "./like.model";
import { Connection } from "mongoose";
import { MoviesService } from "src/movies/movies.service";

@Injectable()
export class LikesService {
  constructor(
    @InjectModel("Like") private likeModel: Model<Like>,
    @Inject(MoviesService) public movieService: MoviesService,
    @InjectConnection() private connection: Connection
  ) {}


  async createLike(
    movieId: number,
    movieName: string,
    poster_path: string,
    userId: string
  ): Promise<any> {
    const newLike = new this.likeModel({ movieId, movieName, userId });
    const savedLike = await newLike.save();

    await this.movieService.insertMovie({ movieId, movieName, poster_path });

    // Atualiza o total de curtidas na view "filmesMaisCurtidos"
    await this.updateMostLikedMoviesView();

    return savedLike;
  }

  async updateMostLikedMoviesView(): Promise<void> {
    const aggregationPipeline = [
      { $group: { _id: "$movieId", totalLikes: { $sum: 1 } } },
      { $sort: { totalLikes: -1 } },
    ];

    try {
      await this.likeModel.db.createCollection("filmesMaisCurtidos", {
        viewOn: "likes",
        pipeline: aggregationPipeline,
      });
    } catch (e) {}
  }

  async getMostLikedMovies(): Promise<any> {
    return this.connection
      .collection("filmesMaisCurtidos")
      .aggregate([
        {
          $lookup: {
            from: "movies",
            localField: "_id",
            foreignField: "movieId",
            as: "movieDetails",
          },
        },
        { $unwind: "$movieDetails" },
        {
          $project: {
            _id: 0,
            totalLikes: 1,
            movieId: "$movieDetails.movieId",
            movieName: "$movieDetails.movieName",
            poster_path: "$movieDetails.poster_path",
          },
        },
      ])
      .toArray();
  }
}
