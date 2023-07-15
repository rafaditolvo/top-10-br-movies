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
        console.error('Failed to fetch popular movies:', error);
      }
    );
  }

  likeMovie(movie: any): void {
    const movieId = movie.id;
    const movieName = movie.title;

    this.http.post('http://localhost:4000/likes', { movieId, movieName }).subscribe(
      () => {
        this.message = 'Curtida registrada com sucesso!';
        movie.liked = true;

        // Ocultar a mensagem após 1 segundo
        setTimeout(() => {
          this.message = '';
        }, 1000);
      },
      (error) => {
        console.error('Failed to save like:', error);
        this.message = 'Falha ao registrar a curtida. Por favor, tente novamente.';
      }
    );
  }

  getImageUrl(posterPath: string): string {
    // Substitua 'http://localhost:4000' pelo URL base do servidor onde as imagens estão hospedadas
    return 'http://localhost:4000' + posterPath;
  }
}
