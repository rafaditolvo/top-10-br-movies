import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopularMovieComponent } from './popular-movie/popular-movie.component';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MostLikedMoviesComponent } from './most-liked-movies/most-liked-movies.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { MatListModule } from '@angular/material/list';
import { LikeLogService } from 'src/services/like-log-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PopularMovieComponent,
    MostLikedMoviesComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatExpansionModule,
    MatIconModule,
    AppRoutingModule,
    DragScrollModule,
    MatGridListModule,
    MatListModule,
    BrowserAnimationsModule,
    MatCardModule,
    NgbModule,
    ReactiveFormsModule

  ],
  providers: [LikeLogService],
  bootstrap: [AppComponent]

})
export class AppModule { }
