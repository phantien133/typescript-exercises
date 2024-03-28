import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { UsersService } from '@module/users/users.service';
import { AuthService } from './auth.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { UsersModule } from '@module/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '@module/prisma/prisma.module';
import { jwtConst } from '@config/auth/constant';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        UsersService,
        {
          provide: APP_GUARD,
          useClass: AuthGuard,
        },
      ],
      imports: [
        PrismaModule,
        UsersModule,
        JwtModule.register({
          global: true,
          secret: jwtConst.secret,
          signOptions: { expiresIn: '1000s' },
        }),
      ],
      exports: [AuthService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
