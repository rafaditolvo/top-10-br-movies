import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { LikesController } from './likes/likes.controller';
import { LikesService } from './likes/likes.service';
import { LikeSchema } from './likes/like.model';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MovieSchema } from './movies/movies.model';
import { MoviesModule } from './movies/movies.module';
import { LikesModule } from './likes/likes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/movies-db'),
    MongooseModule.forFeature([{ name: 'Like', schema: LikeSchema }]),
    MongooseModule.forFeature([{ name: 'Movie', schema: MovieSchema }]),
    AuthModule,
    UsersModule,
    MoviesModule,
    LikesModule

  ],
  controllers: [LikesController, MoviesController],
  providers: [LikesService, MoviesService]
})
export class AppModule {}
