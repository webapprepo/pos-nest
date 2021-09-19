import { Test, TestingModule } from '@nestjs/testing';
import { RekeningService } from './rekening.service';

describe('RekeningService', () => {
  let service: RekeningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RekeningService],
    }).compile();

    service = module.get<RekeningService>(RekeningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
