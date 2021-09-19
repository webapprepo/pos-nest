import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PageService } from 'src/etc/service/page/page.service';
import { Repository } from 'typeorm';
import { CreateKonsumanDto } from './dto/create-konsuman.dto';
import { UpdateKonsumanDto } from './dto/update-konsuman.dto';
import { Konsuman } from './entities/konsuman.entity';

@Injectable()
export class KonsumenService extends PageService {
  constructor(
    @InjectRepository(Konsuman) private konsumenRepo : Repository<Konsuman>
  ){
    super()
  }
  create(createKonsumanDto: CreateKonsumanDto) {
    return this.konsumenRepo.save(createKonsumanDto);
  }

  findAll(filter) {
    return this.generatePage(filter, this.konsumenRepo, {relations:['user']})
  }

  findOne(id: number) {
    return this.konsumenRepo.findOne(id);
  }

  update(id: number, updateKonsumanDto: UpdateKonsumanDto) {
    return this.konsumenRepo.save(updateKonsumanDto);
  }

  async remove(id: number) {
    let konsumen = await this.konsumenRepo.findOne(id)
    return this.konsumenRepo.remove(konsumen);
  }
}
