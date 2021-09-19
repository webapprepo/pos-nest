import { Test, TestingModule } from '@nestjs/testing';
import { PenjualanController } from './penjualan.controller';
import { PenjualanService } from './penjualan.service';

describe('PenjualanController', () => {
  let controller: PenjualanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PenjualanController],
      providers: [PenjualanService],
    }).compile();

    controller = module.get<PenjualanController>(PenjualanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
