import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({ secret: 'xxx' })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, UserService],
})
export class AuthModule {}
