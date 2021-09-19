import { PartialType } from '@nestjs/swagger';
import { KonsumenDto } from './create-konsuman.dto';

export class UpdateKonsumanDto extends PartialType(KonsumenDto) {}
