import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import axios from "axios";
import { Movie } from "./movies.model";
import { Model } from "mongoose";

@Injectable()
export class MoviesService {
  constructor(@InjectModel("Movie") private movieModel: Model<Movie>) {}
  async getPopularMovies(): Promise<any> {
    const apiKey = "4f0b208f6f47c15720981a0ca2adac58";
    const endpoint = "https://api.themoviedb.org/3/movie/popular";
    const params = {
      api_key: apiKey,
      language: "pt-BR",
      region: "BR",
      sort_by: "popularity.desc",    
    };

 
    try {
      const response = await axios.get(endpoint, { params });
      const movies = response.data.results.slice(0, 10); // Retorna apenas os 10 primeiros filmes
      return movies;
    } catch (error) {
      throw new Error("Falha ao buscar os filmes populares do TMDB.");
    }
  }
  async insertMovie({ movieId, movieName, poster_path }): Promise<any> {
    const movieExists = await this.movieModel.findOne({ movieId });
    if (!movieExists) {
      const newMovie = new this.movieModel({
        movieId,
        movieName,
        poster_path
      });
      const saved = await newMovie.save();
    }
  }
}
