import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Like } from './like.model';

@Injectable()
export class LikesService {
  constructor(@InjectModel('Like') private likeModel: Model<Like>) {}

  async createLike(movieId: number, userId: string): Promise<Like> {
    const newLike = new this.likeModel({ movieId, userId });
    const savedLike = await newLike.save();
    console.log('Curtida salva:', savedLike); // Verifica os dados da curtida salva no console
    return savedLike;
  }

  async getMostLikedMovies(): Promise<any> {
    return this.likeModel
      .aggregate([
        { $group: { _id: '$movieId', totalLikes: { $sum: 1 } } },
        { $sort: { totalLikes: -1 } },
        {
          $lookup: {
            from: 'movies', // nome da coleção de filmes no seu banco de dados
            localField: '_id',
            foreignField: 'movieId',
            as: 'movieDetails',
          },
        },
        {
          $unwind: '$movieDetails',
        },
        {
          $project: {
            _id: 0,
            movieId: '$_id',
            totalLikes: 1,
            movieTitle: '$movieDetails.title',
          },
        },
      ])
      .exec();
  }
}
