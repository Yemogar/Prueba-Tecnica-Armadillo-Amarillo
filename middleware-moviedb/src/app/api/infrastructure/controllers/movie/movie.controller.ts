import { Controller, Get, Param, UseGuards } from '@nestjs/common';

import { UserAuthenticatedGuard } from 'src/app/api/application/guards/user-authenticated.guard';
import { ThemoviedbApiService } from '../../data-sources/themoviedb-api/themoviedb-api.service';

@Controller('movie')
@UseGuards(UserAuthenticatedGuard)
export class MovieController {
  constructor(private theMovieDBApiService: ThemoviedbApiService) {}

  @Get('now-playing')
  async getMoviesInTheater() {
    return this.theMovieDBApiService.getMoviesInTheatres();
  }

  @Get('popular-movies')
  async getPopularMovies() {
    return this.theMovieDBApiService.getPopularMovies();
  }

  @Get(':movieId/credits')
  async getCreditsByMovieId(@Param('movieId') movieId: string) {
    return this.theMovieDBApiService.getCreditsByMovieId(movieId);
  }
}
