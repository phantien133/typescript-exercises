import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '@module/users/users.service';
import { UsersModule } from '@module/users/users.module';
import { PrismaModule } from '@module/prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { jwtConst } from '@config/auth/constant';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
