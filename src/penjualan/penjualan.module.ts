import { Module } from '@nestjs/common';
import { PenjualanService } from './penjualan.service';
import { PenjualanController } from './penjualan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Penjualan } from './entities/penjualan.entity';
import { PenjualanItem } from './entities/penjualan-item.entity';
import { PenjualanBayar } from './entities/penjualan-bayar.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([Penjualan, PenjualanItem, PenjualanBayar])
  ],
  controllers: [PenjualanController],
  providers: [PenjualanService]
})
export class PenjualanModule {}
