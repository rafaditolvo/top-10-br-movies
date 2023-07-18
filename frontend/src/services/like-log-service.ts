import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LikeLogService {
  logCurtidas: any[] = [];

  constructor(private http: HttpClient) { }

  adicionarCurtida(filme: any): void {
    this.logCurtidas.push({ movieId: filme.id, totalLikes: filme.totalLikes });
    console.log(`Filme ID ${filme.id} - Total de Curtidas: ${filme.totalLikes}`);
    console.log(filme);
  }

  getTotalLikes(movieId: number): Promise<number> {
    
    return this.http.get<number>(`http://localhost:4000/likes/${movieId}/total-likes`).toPromise()
      .then((totalLikes: number | undefined) => totalLikes!);
  }

  getLogCurtidas(): any[] {
    return this.logCurtidas;
  }
}
