import { TimeSheet, User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ uniqueItems: true })
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  timeSheets?: TimeSheet[];
}
