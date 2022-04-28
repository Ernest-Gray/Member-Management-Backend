import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TestFamilyService } from './test-family.service';
import { CreateTestFamilyDto } from './dto/create-test-family.dto';
import { UpdateTestFamilyDto } from './dto/update-test-family.dto';

@Controller('test-family')
export class TestFamilyController {
  constructor(private readonly testFamilyService: TestFamilyService) {}

  @Post()
  create(@Body() createTestFamilyDto: CreateTestFamilyDto) {
    return this.testFamilyService.create(createTestFamilyDto);
  }

  @Get()
  findAll() {
    return this.testFamilyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testFamilyService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestFamilyDto: UpdateTestFamilyDto,
  ) {
    return this.testFamilyService.update(+id, updateTestFamilyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testFamilyService.remove(+id);
  }
}
