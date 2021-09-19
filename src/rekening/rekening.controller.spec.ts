import { Test, TestingModule } from '@nestjs/testing';
import { RekeningController } from './rekening.controller';
import { RekeningService } from './rekening.service';

describe('RekeningController', () => {
  let controller: RekeningController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RekeningController],
      providers: [RekeningService],
    }).compile();

    controller = module.get<RekeningController>(RekeningController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
