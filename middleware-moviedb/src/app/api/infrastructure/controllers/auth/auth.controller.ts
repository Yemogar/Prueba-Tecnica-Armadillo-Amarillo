import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';

import { AuthService } from 'src/app/api/application/services/auth/auth.service';
import { User } from 'src/app/api/domain/interfaces/user.interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() user: User) {
    const userLogged: boolean = await this.authService.login(user);

    if (!userLogged) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    return userLogged;
  }

  @Get('is-user-logged')
  async getIfUserIsLogged(): Promise<boolean> {
    return this.authService.checkIfUserIsLogged();
  }
}
