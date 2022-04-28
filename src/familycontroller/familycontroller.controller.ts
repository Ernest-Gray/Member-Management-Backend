import { FamilyEntity } from './../entities/family.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { Controller, Get, Post, Query, Put, Body, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('familycontroller')
export class FamilycontrollerController {
  constructor(
    @InjectRepository(FamilyEntity)
    private familyRepository: Repository<FamilyEntity>,
  ) {}

  @Get('GetFamilyMemberByFamilyID')
  async GetFamilyMemberByFamilyID(
    @Query('family_id') family_id: number,
  ): Promise<FamilyEntity[]> {
    return await this.familyRepository.find({ family_id: family_id });
  }

  @Post('AssignMemberNeedFamily')
  async AssignMemberNeedFamily(@Param('member_id') member_id: number) {
    return await this.familyRepository.save({
      member_id: member_id,
      family_id: 0,
      relationship: 'unset relationship',
      family_name: 'unset family name',
    });
  }

  @Put('AddMemberToFamily')
  async AddMemberToFamily(
    @Body() user: User,
    familyID: number,
  ): Promise<FamilyEntity> {
    console.log(user);
    return await this.familyRepository.query(
      'UPDATE family-table SET member_ids = member_ids || ' +
        user.id +
        ' WHERE family_id = ' +
        familyID,
    );
  }
}
