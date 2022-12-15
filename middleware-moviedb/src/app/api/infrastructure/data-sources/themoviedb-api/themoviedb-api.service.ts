import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { ConfigService } from '@nestjs/config';

import { map, Observable } from 'rxjs';

@Injectable()
export class ThemoviedbApiService {
  private baseUrl: string;
  private apiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {
    this.baseUrl = this.config.get('EXTERNAL_API_URL') + '/movie';
    this.apiKey = this.config.get('API_KEY');
  }

  getMoviesInTheatres(): Observable<AxiosResponse<unknown>> {
    const endpointUrl: string =
      this.baseUrl +
      `/now_playing?api_key=${this.apiKey}&language=en-US&page=1`;

    return this.httpService.get(endpointUrl).pipe(map((res) => res.data));
  }

  getPopularMovies(): Observable<AxiosResponse<unknown>> {
    const endpointUrl: string =
      this.baseUrl + `/popular?api_key=${this.apiKey}&language=en-US&page=1`;

    return this.httpService.get(endpointUrl).pipe(map((res) => res.data));
  }

  getCreditsByMovieId(movieId: string): Observable<AxiosResponse<unknown>> {
    const endpointUrl: string =
      this.baseUrl +
      `/${movieId}/credits?api_key=${this.apiKey}&language=en-US`;

    return this.httpService.get(endpointUrl).pipe(map((res) => res.data));
  }
}
