import { PartialType } from '@nestjs/swagger';
import { CreateCheckinDto } from './create-checkin.dto';

export class UpdateCheckinDto extends PartialType(CreateCheckinDto) {}
