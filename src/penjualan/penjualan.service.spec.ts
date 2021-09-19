import { Test, TestingModule } from '@nestjs/testing';
import { PenjualanService } from './penjualan.service';

describe('PenjualanService', () => {
  let service: PenjualanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PenjualanService],
    }).compile();

    service = module.get<PenjualanService>(PenjualanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
