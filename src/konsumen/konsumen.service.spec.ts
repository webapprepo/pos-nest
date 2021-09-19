import { Test, TestingModule } from '@nestjs/testing';
import { KonsumenService } from './konsumen.service';

describe('KonsumenService', () => {
  let service: KonsumenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KonsumenService],
    }).compile();

    service = module.get<KonsumenService>(KonsumenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
