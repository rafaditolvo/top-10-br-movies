import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { Like } from './like.model';

@Injectable()
export class LikesService {
  constructor(@InjectModel('Like') private likeModel: Model<Like>) {}

  // async createLike(movieId: number, movieName: string, userId: string): Promise<Like> {
    async createLike(movieId: number, movieName: string, userId: string): Promise<any> {
    const newLike = new this.likeModel({ movieId, movieName, userId });
    const savedLike = await newLike.save();
    console.log('Curtida salva:', savedLike);

    // Atualiza o total de curtidas na view "filmesMaisCurtidos"
    return await this.updateMostLikedMoviesView();

    return savedLike;
  }

  async updateMostLikedMoviesView(): Promise<any> {
    const aggregationPipeline = [
      { $group: { _id: {movieId:'$movieId', movieName:'$movieName'}, totalLikes: { $sum: 1 } } },
      { $sort: { totalLikes: -1 } },
    ];
  
    const aggregationResult = await this.likeModel.collection.aggregate(aggregationPipeline).toArray();
    return aggregationResult;
  }
  

  async getMostLikedMovies(): Promise<any> {
    return this.likeModel.collection.aggregate([
      {
        $lookup: {
          from: 'movies',
          localField: '_id',
          foreignField: 'movieId',
          as: 'movieDetails',
        },
      },
      { $unwind: '$movieDetails' },
      {
        $project: {
          _id: 0,
          movieId: '$_id',
          totalLikes: 1,
          movieTitle: '$movieDetails.title',
        },
      },
    ]).toArray();
  }
}
