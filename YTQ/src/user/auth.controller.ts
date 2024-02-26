import {
  Controller,
  Post,
  Request,
  UseGuards,
  Get,
  Param,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('logout')
  async logout(@Request() req) {
    await this.authService.logout(req.token);
    return { message: 'Logout successful' };
  }

  @Get(':id')
  getUserbyId(@Param('id') id: number) {
    console.log(id);
    return '{"name":"John", "age":30}';
  }
}
