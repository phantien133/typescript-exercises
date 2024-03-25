import { Injectable } from '@nestjs/common';
import { PrismaService } from '@module/prisma/prisma.service';
import { isEqualsDate } from '@utils/time';
import { UsersService } from '@module/users/users.service';

@Injectable()
export class CheckinService {
  constructor(
    private prisma: PrismaService,
    private userService: UsersService,
  ) {}

  async update(email: string) {
    try {
      const user = await this.userService.findOne(email);
      let timeSheet = await this.prisma.timeSheet.findFirstOrThrow({
        where: {
          userId: user.id,
        },
        take: -1,
      });

      if (timeSheet) {
        if (
          isEqualsDate(timeSheet.date, new Date()) &&
          !timeSheet.checkInTime
        ) {
          timeSheet = await this.prisma.timeSheet.update({
            where: { id: timeSheet.id },
            data: {
              checkInTime: new Date(),
            },
          });
        } else if (
          isEqualsDate(timeSheet.date, new Date()) &&
          timeSheet.checkInTime
        ) {
          timeSheet = await this.prisma.timeSheet.update({
            where: { id: timeSheet.id },
            data: {
              CheckOutTime: new Date(),
            },
          });
        } else {
          timeSheet = await this.createNewTimeSheet(user.id);
        }
      } else {
        timeSheet = await this.createNewTimeSheet(user.id);
      }
      return timeSheet;
    } catch (error) {
      return console.error('error when upsert check-in:', error);
    }
  }

  private createNewTimeSheet(userId: number) {
    return this.prisma.timeSheet.create({
      data: {
        date: new Date(),
        checkInTime: new Date(),
        CheckOutTime: null,
        userId: userId,
      },
    });
  }
}
