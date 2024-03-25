import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '@module/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  update(email: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { email },
      data: updateUserDto,
    });
  }

  remove(email: string) {
    return this.prisma.user.delete({ where: { email } });
  }

  findTimeSheets(email: string) {
    this.prisma.user.findUnique({ where: { email } }).timeSheets;
  }
}
