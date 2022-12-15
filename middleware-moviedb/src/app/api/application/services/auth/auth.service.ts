import { Injectable } from '@nestjs/common';

import { User } from 'src/app/api/domain/interfaces/user.interface';
import { UserRepository } from 'src/app/api/infrastructure/data-sources/database/user-repository.service';

@Injectable()
export class AuthService {
  userLogged: boolean;

  constructor(private userRepository: UserRepository) {}

  async login(user: User) {
    this.userLogged = await this.checkIfUserExist(user);

    return this.userLogged;
  }

  private checkIfUserExist(user: User) {
    return this.userRepository.exist({ where: user });
  }

  checkIfUserIsLogged(): boolean {
    return this.userLogged;
  }
}
