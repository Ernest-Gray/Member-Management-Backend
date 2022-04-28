import { Test, TestingModule } from '@nestjs/testing';
import { FamilycontrollerController } from './familycontroller.controller';

describe('FamilycontrollerController', () => {
  let controller: FamilycontrollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FamilycontrollerController],
    }).compile();

    controller = module.get<FamilycontrollerController>(
      FamilycontrollerController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
