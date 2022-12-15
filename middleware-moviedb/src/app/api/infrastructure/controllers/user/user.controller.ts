import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from 'src/app/api/application/services/user/user.service';

import { User } from 'src/app/api/domain/interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  async createUser(@Body() newUser: User) {
    return this.userService.createUser(newUser);
  }
}
