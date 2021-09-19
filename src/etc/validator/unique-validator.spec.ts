import { Test, TestingModule } from '@nestjs/testing';
import { UniqueValidator } from './unique-validator';

describe('UniqueValidator', () => {
  let provider: UniqueValidator;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniqueValidator],
    }).compile();

    provider = module.get<UniqueValidator>(UniqueValidator);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
