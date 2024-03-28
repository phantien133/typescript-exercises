import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { UsersModule } from './modules/users/users.module';
import { CheckinModule } from './modules/checkin/checkin.module';

@Module({
  imports: [PrismaModule, AuthModule, UsersModule, CheckinModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
