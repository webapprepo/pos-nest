import { PartialType } from '@nestjs/swagger';
import { ProdukDto } from './create-produk.dto';

export class UpdateProdukDto extends PartialType(ProdukDto) {}
