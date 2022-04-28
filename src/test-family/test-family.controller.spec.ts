import { Test, TestingModule } from '@nestjs/testing';
import { TestFamilyController } from './test-family.controller';
import { TestFamilyService } from './test-family.service';

describe('TestFamilyController', () => {
  let controller: TestFamilyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestFamilyController],
      providers: [TestFamilyService],
    }).compile();

    controller = module.get<TestFamilyController>(TestFamilyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
