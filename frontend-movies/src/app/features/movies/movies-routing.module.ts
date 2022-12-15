import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDashboardComponent } from './pages/movie-dashboard/movie-dashboard.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MovieDashboardComponent
  },
  {
    path: ':movieId',
    component: MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
