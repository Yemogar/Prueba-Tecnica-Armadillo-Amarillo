import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselComponent } from 'angular-responsive-carousel';
import { Observable } from 'rxjs';

import { Movie } from 'src/app/core/models/movie';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {
  $moviesInTheater: Observable<Movie[]> | undefined;
  $popularMovies: Observable<Movie[]> | undefined;

  imagePathOfMovies: Object[] = [];

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.$moviesInTheater = this.movieService.getMoviesInTheater();
    this.$popularMovies = this.movieService.getPopularMovies();
  }

  viewMovie(movie: Movie): void {
    this.movieService.setSelectedMovie(movie);

    this.router.navigateByUrl(`/movies/${movie.id}`);
  }

  refreshMoviesInTheater(): void {
    this.$moviesInTheater = this.movieService.getMoviesInTheater();
  }

  refreshPopularMovies(): void {
    this.$popularMovies = this.movieService.getPopularMovies();
  }
}
