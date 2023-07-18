import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LikesController } from "./likes.controller";
import { LikeSchema } from "./like.model";
import { LikesService } from "./likes.service";
import { MoviesModule } from "src/movies/movies.module";
import { MoviesService } from "src/movies/movies.service";

@Module({
  imports: [
    MoviesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/movies-db'),
    MongooseModule.forFeature([{name: 'Like', schema: LikeSchema}])
  ],
  controllers: [LikesController],
  providers: [LikesService, MoviesService]
})
export class LikesModule {}
