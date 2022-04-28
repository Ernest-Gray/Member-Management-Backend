import { Module } from '@nestjs/common';
import { TestFamilyService } from './test-family.service';
import { TestFamilyController } from './test-family.controller';

@Module({
  controllers: [TestFamilyController],
  providers: [TestFamilyService]
})
export class TestFamilyModule {}
