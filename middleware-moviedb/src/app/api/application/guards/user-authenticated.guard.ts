import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class UserAuthenticatedGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const userLogged: boolean = this.authService.checkIfUserIsLogged();

    if (!userLogged) {
      throw new UnauthorizedException();
    }
    return userLogged;
  }
}
