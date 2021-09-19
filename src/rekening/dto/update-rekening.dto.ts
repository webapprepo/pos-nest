import { PartialType } from '@nestjs/swagger';
import { RekeningDto } from './create-rekening.dto';

export class UpdateRekeningDto extends PartialType(RekeningDto) {}
