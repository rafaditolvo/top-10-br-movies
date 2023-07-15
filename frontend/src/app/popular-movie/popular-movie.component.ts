import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.css']
})
export class PopularMovieComponent implements OnInit {
  message: string = '';
  movies: any[] = [];
  carouselConfig: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPopularMovies();

    this.carouselConfig = {
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };
  }

  fetchPopularMovies(): void {
    this.http.get<any[]>('http://localhost:4000/movies/popular').subscribe(
      (response) => {
        this.movies = response;
      },
      (error) => {
        console.error('Falha ao buscar os filmes populares:', error);
      }
    );
  }

  likeMovie(movie: any): void {
    const movieId = movie.id;
    const movieName = movie.title;
    const poster_path = movie.poster_path;

    this.http.post('http://localhost:4000/likes', { movieId, movieName, poster_path }, { headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiam9obiIsImlhdCI6MTY4OTQzNjY0MywiZXhwIjoxNjg5NDY2NjQzfQ.gkuvGfyusBKCKlbzN9P68S0ZGCc0dSVQqBykLM0klxQ"}}).subscribe(
      () => {
        this.message = 'Curtida registrada com sucesso!';
        movie.liked = true;

        // Ocultar a mensagem após 1 segundo
        setTimeout(() => {
          this.message = '';
        }, 1000);
      },
      (error) => {
        console.error('Falha ao registrar a curtida:', error);
        this.message = 'Falha ao registrar a curtida. Por favor, tente novamente.';
      }
    );
  }

  getImageUrl(posterPath: string): string {
    return 'https://image.tmdb.org/t/p/original' + posterPath;
  }
}
