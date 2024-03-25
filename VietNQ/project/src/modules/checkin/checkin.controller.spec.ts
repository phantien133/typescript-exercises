import { Test, TestingModule } from '@nestjs/testing';
import { CheckinController } from './checkin.controller';
import { CheckinService } from './checkin.service';
import { UsersService } from '@module/users/users.service';
import { PrismaModule } from '@module/prisma/prisma.module';
import { AuthGuard } from '../auth/auth.guard';
import { CanActivate } from '@nestjs/common';

describe('CheckinController', () => {
  let controller: CheckinController;
  let service: CheckinService;

  beforeEach(async () => {
    const mock_AuthGuard: CanActivate = {
      canActivate: jest.fn(() => true),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckinController],
      providers: [CheckinService, UsersService],
      imports: [PrismaModule],
    })
      .overrideGuard(AuthGuard)
      .useValue(mock_AuthGuard)
      .compile();

    controller = module.get<CheckinController>(CheckinController);
    service = module.get<CheckinService>(CheckinService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('update', () => {
    const email = 'user1@gmail.com';
    it('should call update method of CheckinService with the provided email', async () => {
      const updateSpy = jest.spyOn(service, 'update').mockResolvedValueOnce();

      await controller.update(email);

      expect(updateSpy).toHaveBeenCalledWith(email);
    });
  });
});
