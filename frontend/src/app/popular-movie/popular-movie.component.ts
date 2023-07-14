import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.css']
})
export class PopularMovieComponent implements OnInit {
  movies: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Lógica para obter a lista de filmes populares

    // Exemplo de dados estáticos para ilustração
    this.movies = [
      { title: 'Filme 1', liked: false },
      { title: 'Filme 2', liked: false },
      { title: 'Filme 3', liked: false }
    ];
  }

  likeMovie(movie: any): void {
    movie.liked = true;
    // Lógica para enviar curtida para a API
  }
}
