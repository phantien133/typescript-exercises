import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { CheckinService } from './checkin.service';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@module/auth/auth.guard';

@Controller('checkin')
@ApiTags('checkin')
@ApiBearerAuth('access-token')
@UseGuards(AuthGuard)
export class CheckinController {
  constructor(private readonly checkinService: CheckinService) {}

  @Get()
  @ApiOkResponse()
  update(@Query('email') email: string) {
    return this.checkinService.update(email);
  }
}
