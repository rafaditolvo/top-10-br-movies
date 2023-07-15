import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MoviesService {
  async getPopularMovies(): Promise<any> {
    const apiKey = '4f0b208f6f47c15720981a0ca2adac58';
    const endpoint = 'https://api.themoviedb.org/3/movie/popular';
    const params = {
      api_key: apiKey,
      language: 'pt-BR',
      region: 'BR',
    };

    try {
      const response = await axios.get(endpoint, { params });
      const movies = response.data.results.slice(0, 10); // Retorna apenas os 10 primeiros filmes
      return movies;
    } catch (error) {
      throw new Error('Falha ao buscar os filmes populares do TMDB.');
    }
  }
}
