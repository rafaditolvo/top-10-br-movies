import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getMostLikedMovies();
  }
  title = 'frontend';
  public movies: any;
  filmes: any[] = [];
  totalLikes: { [movieId: number]: number } = {};

  constructor(private http: HttpClient) {}

  refresh() {
    this.getMostLikedMovies();
  }

  getMostLikedMovies() {
    const randomParam = new Date().getTime();

    this.http
      .get<any[]>('http://localhost:4000/likes/most-liked-movies', {
        params: { random: randomParam.toString() },
      })
      .subscribe((filmes) => {
        filmes.sort((a, b) => this.totalLikes[b.id] - this.totalLikes[a.id]);
        this.filmes = filmes.slice(0, 10);
      });
  }

  // login() {
  //   this.http.post<any[]>('http://localhost:4000/auth/login', {
  //     username: 'admin',
  //     password: 'admin',
  //   });
  // }
}
