import { Expose } from 'class-transformer';
import { IsNotEmpty, Length } from 'class-validator';
import { BaseDto } from './base.dto';

export class UserDto extends BaseDto {
  @IsNotEmpty()
  @Expose()
  username: string;

  @IsNotEmpty()
  @Length(5, 10)
  @Expose()
  password: string;
}
