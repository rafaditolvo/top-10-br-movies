import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MoviesController } from "./movies.controller";
import { MovieSchema } from "./movies.model";
import { MoviesService } from "./movies.service";


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/movies-db'),
    MongooseModule.forFeature([{ name: 'Movie', schema: MovieSchema }])
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
  exports: [MoviesService],
})
export class MoviesModule {}
