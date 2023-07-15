import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Model, Document } from 'mongoose';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('popular')
  async getPopularMovies() {
    return this.moviesService.getPopularMovies();
  }
}
