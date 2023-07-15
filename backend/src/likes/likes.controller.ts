import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post()
  async createLike(
    @Body() createLikeDto: { movieId: number; movieName: string },
    req,
  ): Promise<any> {
    const userId = 'token';
    return this.likesService.createLike(
      createLikeDto.movieId,
      createLikeDto.movieName,
      userId,
    );
  }

  @Get('/most-liked')
  async getMostLikedMovies(): Promise<any> {
    const mostLikedMovies = await this.likesService.getMostLikedMovies();
    return mostLikedMovies;
  }
}
