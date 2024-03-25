import { Test, TestingModule } from '@nestjs/testing';
import { CheckinService } from './checkin.service';
import { UsersService } from '@module/users/users.service';
import { PrismaModule } from '@module/prisma/prisma.module';

describe('CheckinService', () => {
  let service: CheckinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckinService, UsersService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<CheckinService>(CheckinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
