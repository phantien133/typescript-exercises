import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class AuthService {
  private readonly blacklist: string[] = [];
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUsername(username);
    if (user && user.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async generateToken(payload: any): Promise<string> {
    return this.jwtService.sign(payload);
  }

  async isTokenBlacklisted(token: string): Promise<boolean> {
    return this.blacklist.includes(token);
  }

  async verifyToken(token: string): Promise<any> {
    try {
      const isBlacklisted = await this.isTokenBlacklisted(token);
      if (isBlacklisted) {
        throw new Error('Token is blacklisted');
      }

      const payload = this.jwtService.verify(token);
      return payload;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }

  async login(user: UserDto) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.generateToken(payload),
    };
  }

  async logout(token: string) {
    this.blacklist.push(token);
  }
}
