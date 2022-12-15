import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {IvyCarouselModule} from 'angular-responsive-carousel';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDashboardComponent } from './pages/movie-dashboard/movie-dashboard.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MovieDashboardComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    IvyCarouselModule,
    SharedModule
  ]
})
export class MoviesModule { }
