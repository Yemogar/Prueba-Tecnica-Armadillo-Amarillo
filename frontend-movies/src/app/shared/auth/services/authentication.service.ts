import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl: string = environment.apiUrl + '/auth';

  constructor(private httpClient: HttpClient) { }

  login(user: User): Observable<boolean> {
    return this.httpClient.post(this.apiUrl + '/login', user) as Observable<boolean>;
  }

  isUserLogged(): Observable<boolean> {
    return this.httpClient.get(this.apiUrl + '/is-user-logged') as Observable<boolean>;
  }
}
