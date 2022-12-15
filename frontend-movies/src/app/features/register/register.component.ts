import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/models/user';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  $registerSubscription: Subscription | undefined;

  registerForm: FormGroup;

  user: User;

  constructor(private userService: UserService, private router: Router) {
    this.user = {};
    this.registerForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl(new Date().toISOString().substring(0,10), Validators.required)
    });
  }

  ngOnInit(): void {}

  register(): void {
    debugger;
    this.$registerSubscription = this.userService.registerUser(this.registerForm.value)
      .subscribe(
        (response) => {
          this.router.navigateByUrl(`/login`);
        }
      )
  }

  ngOnDestroy(): void {
    this.$registerSubscription?.unsubscribe();
  }

}
