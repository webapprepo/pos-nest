import { Module } from '@nestjs/common';
import { KonsumenService } from './konsumen.service';
import { KonsumenController } from './konsumen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Konsuman } from './entities/konsuman.entity';

@Module({
  imports :[
    TypeOrmModule.forFeature([Konsuman])
  ],
  controllers: [KonsumenController],
  providers: [KonsumenService]
})
export class KonsumenModule {}
