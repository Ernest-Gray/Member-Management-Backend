import { PartialType } from '@nestjs/mapped-types';
import { CreateTestFamilyDto } from './create-test-family.dto';

export class UpdateTestFamilyDto extends PartialType(CreateTestFamilyDto) {}
