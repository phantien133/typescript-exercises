import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  pass: string;
}
