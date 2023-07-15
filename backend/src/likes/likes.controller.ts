import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { LikesService } from './likes.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @UseGuards(AuthGuard)
  @Post()
  async createLike(
    @Body() createLikeDto: { movieId: number; movieName: string },
    @Req() req
  ): Promise<any> {
    const userId =  req.user.sub;
    return this.likesService.createLike(
      createLikeDto.movieId,
      createLikeDto.movieName,
      userId,
    );
  }

  @Get('/most-liked-movies')
  async getMostLikedMovies(): Promise<any> {
    const mostLikedMovies = await this.likesService.getMostLikedMovies();
    return mostLikedMovies;
  }

}
