import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LikeLogService } from 'src/services/like-log-service';

@Component({
  selector: 'app-most-liked-movies',
  templateUrl: './most-liked-movies.component.html',
  styleUrls: ['./most-liked-movies.component.css']
})
export class MostLikedMoviesComponent implements OnInit {
  filmes: any[] = [];
  totalLikes: { [movieId: number]: number } = {};
  message: string | undefined;

  @Input() mostLikedMovies: any[] = [];

  constructor(
    private http: HttpClient,
  
    private likeLogService: LikeLogService 
  ) { }

  ngOnInit() {
    this.filmes = this.mostLikedMovies;
  }

  ngOnChanges() {
    this.filmes = this.mostLikedMovies;
  }
  
  getImageUrl(posterPath: string): string {
    return 'https://www.themoviedb.org/t/p/original' + posterPath;
  }
}
