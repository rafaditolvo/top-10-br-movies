import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { LikesController } from './likes/likes.controller';
import { LikesService } from './likes/likes.service';
import { LikeSchema } from './likes/like.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/movies-db'),
    MongooseModule.forFeature([{ name: 'Like', schema: LikeSchema }]),

  ],
  controllers: [LikesController, MoviesController],
  providers: [LikesService, MoviesService],
})
export class AppModule {}
