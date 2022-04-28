import { Injectable } from '@nestjs/common';
import { CreateTestFamilyDto } from './dto/create-test-family.dto';
import { UpdateTestFamilyDto } from './dto/update-test-family.dto';

@Injectable()
export class TestFamilyService {
  create(createTestFamilyDto: CreateTestFamilyDto) {
    return 'This action adds a new testFamily';
  }

  findAll() {
    return `This action returns all testFamily`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testFamily`;
  }

  update(id: number, updateTestFamilyDto: UpdateTestFamilyDto) {
    return `This action updates a #${id} testFamily`;
  }

  remove(id: number) {
    return `This action removes a #${id} testFamily`;
  }
}
