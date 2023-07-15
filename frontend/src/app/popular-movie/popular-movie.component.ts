import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.css']
})
export class PopularMovieComponent implements OnInit {
  movies: any[] = []; // Inicialize a propriedade movies como uma matriz vazia

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPopularMovies();
  }

  fetchPopularMovies(): void {
    this.http.get<any[]>('http://localhost:4000/movies/popular').subscribe(
      (response) => {
        this.movies = response;
      },
      (error) => {
        console.error('Failed to fetch popular movies:', error);
      }
    );
  }

  likeMovie(movie: any): void {
    movie.liked = true;
  }
}
