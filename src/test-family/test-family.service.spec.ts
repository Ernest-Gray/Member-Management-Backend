import { Test, TestingModule } from '@nestjs/testing';
import { TestFamilyService } from './test-family.service';

describe('TestFamilyService', () => {
  let service: TestFamilyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestFamilyService],
    }).compile();

    service = module.get<TestFamilyService>(TestFamilyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
