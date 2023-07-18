import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LikeLogService } from 'src/services/like-log-service';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.css']
})
export class PopularMovieComponent implements OnInit {
  message: string = '';
  movies: any[] = [];
  carouselOptions: any;
  @Input() moviesCarrosel: any[] = [];
  @Output() refresh = new EventEmitter();

  constructor(private http: HttpClient, private likeLogService: LikeLogService) { }

  ngOnInit(): void {
    this.fetchPopularMovies();
  }

  refreshTop(){
    this.refresh.emit();
  }

  fetchPopularMovies(): void {
    this.http.get<any[]>('http://localhost:4000/movies/popular').subscribe(
      (response) => {
        this.movies = response;
        this.moviesCarrosel = this.movies;
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

    const token = localStorage.getItem('token')

    this.http.post(
      'http://localhost:4000/likes',
      { movieId, movieName, poster_path },
      { headers: { "Authorization": `Bearer ${token}` } } 
    ).subscribe(
      () => {
        this.message = 'Curtida registrada com sucesso!';
        movie.liked = true;
        this.likeLogService.adicionarCurtida(movie);
      
        setTimeout(() => {
          this.message = '';
        }, 1000);
        this.refreshTop()
      },
      (error) => {
        console.error('Falha ao registrar a curtida:', error);
        this.message = 'Falha ao registrar a curtida. Por favor, tente novamente.';
      }
    );
  }

  flipCard(movie: any): void {
   
  }

  getImageUrl(posterPath: string): string {
    return 'https://image.tmdb.org/t/p/original' + posterPath;
  }

  toggleMovieDescription(movie: any): void {
    movie.expanded = !movie.expanded;
  }

  shouldShowExpandToggle(movie: any): boolean {
    return movie.overview.length > 250;
  }

  getExpandToggleText(movie: any): string {
    return movie.expanded ? 'Ver menos' : 'Ver mais';
  }

  
}
