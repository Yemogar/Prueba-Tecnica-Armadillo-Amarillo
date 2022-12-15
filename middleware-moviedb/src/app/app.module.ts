import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserAuthenticatedGuard } from './api/application/guards/user-authenticated.guard';
import { AuthService } from './api/application/services/auth/auth.service';
import { UserService } from './api/application/services/user/user.service';
import { User } from './api/domain/entities/user.entity';
import { AuthController } from './api/infrastructure/controllers/auth/auth.controller';
import { MovieController } from './api/infrastructure/controllers/movie/movie.controller';
import { UserController } from './api/infrastructure/controllers/user/user.controller';
import { UserRepository } from './api/infrastructure/data-sources/database/user-repository.service';
import { ThemoviedbApiService } from './api/infrastructure/data-sources/themoviedb-api/themoviedb-api.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'test.db',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [MovieController, UserController, AuthController],
  providers: [
    ThemoviedbApiService,
    UserService,
    UserRepository,
    AuthService,
    UserAuthenticatedGuard,
  ],
})
export class AppModule {}
