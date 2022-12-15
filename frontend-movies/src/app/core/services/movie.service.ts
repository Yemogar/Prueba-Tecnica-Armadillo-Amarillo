import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, pluck } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Cast } from '../models/cast';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl: string = environment.apiUrl + '/movie';
  private selectedMovie: Movie | undefined;

  constructor(private httpClient: HttpClient) { }

  getMoviesInTheater(): Observable<Movie[]> {
    return this.httpClient.get(this.apiUrl + '/now-playing')
      .pipe(
        pluck('results')
      ) as Observable<Movie[]>;
  }

  getPopularMovies(): Observable<Movie[]> {
    return this.httpClient.get(this.apiUrl + '/popular-movies')
      .pipe(
        pluck('results')
      ) as Observable<Movie[]>;
  }

  getCastByMovieId(movieId: number): Observable<Cast[]> {
    return this.httpClient.get(this.apiUrl + `/${movieId}/credits`).pipe(pluck('cast')) as Observable<Cast[]>;
  }

  setSelectedMovie(selectedMovie: Movie): void {
    this.selectedMovie = selectedMovie;
  }

  getSelectedMovie(): Movie | undefined {
    return this.selectedMovie;
  }
}
