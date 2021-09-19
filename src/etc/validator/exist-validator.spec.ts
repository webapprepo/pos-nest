import { Test, TestingModule } from '@nestjs/testing';
import { ExistValidator } from './exist-validator';

describe('ExistValidator', () => {
  let provider: ExistValidator;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExistValidator],
    }).compile();

    provider = module.get<ExistValidator>(ExistValidator);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
