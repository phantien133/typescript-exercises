import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Public } from '@decorators/auth/public.decorator';
import { SignInDto } from './dto/signIn.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  @ApiOkResponse()
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.singIn(signInDto);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
