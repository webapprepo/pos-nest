import { Test, TestingModule } from '@nestjs/testing';
import { KonsumenController } from './konsumen.controller';
import { KonsumenService } from './konsumen.service';

describe('KonsumenController', () => {
  let controller: KonsumenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KonsumenController],
      providers: [KonsumenService],
    }).compile();

    controller = module.get<KonsumenController>(KonsumenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
