import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '@module/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConst } from '@config/auth/constant';
import { UsersService } from '@module/users/users.service';
import { PrismaModule } from '@module/prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Module({
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
})
export class AuthModule {}
