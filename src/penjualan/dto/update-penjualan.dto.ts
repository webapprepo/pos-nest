import { PartialType } from '@nestjs/swagger';
import { PenjualanDto } from './create-penjualan.dto';

export class UpdatePenjualanDto extends PartialType(PenjualanDto) {}
