import { Module } from '@nestjs/common';
import { CheckinService } from './checkin.service';
import { CheckinController } from './checkin.controller';
import { PrismaModule } from '@module/prisma/prisma.module';
import { UsersService } from '@module/users/users.service';

@Module({
  controllers: [CheckinController],
  providers: [CheckinService, UsersService],
  imports: [PrismaModule],
})
export class CheckinModule {}
