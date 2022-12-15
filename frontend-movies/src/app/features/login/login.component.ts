import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { User } from 'src/app/core/models/user';
import { AuthenticationService } from 'src/app/shared/auth/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  $loginSubscription: Subscription | undefined;

  showError: boolean;

  user: User;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.user = {};
    this.showError = false;
   }

  ngOnInit(): void {
  }

  submit(): void {
    this.$loginSubscription = this.authService.login(this.user)
      .subscribe(
        (result) => {
          this.router.navigateByUrl(`/movies`);
        },
        (error) => {
          this.showError = true;
        }
      )
  }

  hideError(): void {
    this.showError = false;
  }

  ngOnDestroy(): void {
    this.$loginSubscription?.unsubscribe();
  }
}
