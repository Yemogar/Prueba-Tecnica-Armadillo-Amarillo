import { Injectable } from '@nestjs/common';
import { User } from '../../../domain/interfaces/user.interface';

import { UserRepository } from '../../../infrastructure/data-sources/database/user-repository.service';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  createUser(user: User) {
    this.userRepository.insert(user);
  }

  getAllUsers() {
    return this.userRepository.find();
  }
}
