import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = environment.apiUrl + '/user';

  constructor(private httpClient: HttpClient) { }

  registerUser(user: unknown): Observable<unknown> {
    return this.httpClient.post(this.apiUrl, user);
  }
}
