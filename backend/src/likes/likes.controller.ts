import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';

import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private likesService: LikesService) {}

  @Post()
 
  async createLike(
    @Body() createLikeDto: { movieId: number },
    req,
  ): Promise<any> {
    const userId = req.user.userId;
    return this.likesService.createLike(createLikeDto.movieId, userId);
  }

  @Get('/most-liked')
  async getMostLikedMovies(): Promise<any> {
    const mostLikedMovies = await this.likesService.getMostLikedMovies();
    return mostLikedMovies;
  }
}
