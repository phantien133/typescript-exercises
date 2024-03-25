import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '@module/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/signIn.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async singIn(signInDto: SignInDto): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(signInDto.email);
    if (user?.password !== signInDto.pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
