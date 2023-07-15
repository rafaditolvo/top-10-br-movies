import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-most-liked-movies',
  templateUrl: './most-liked-movies.component.html',
  styleUrls: ['./most-liked-movies.component.css']
})
export class MostLikedMoviesComponent implements OnInit {
  filmes: any[] = []; // Definindo valor inicial para a propriedade filmes

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMostLikedMovies();
  }

  getMostLikedMovies() {
    this.http.get<any[]>('http://localhost:4000/likes/most-liked-movies').subscribe(filmes => {
      this.filmes = filmes;
    });
  }
}
