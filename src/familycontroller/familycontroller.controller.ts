import { FamilyEntity } from './../entities/family.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { Controller, Get, Post, Query, Put, Body, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';

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
  async AssignMemberNeedFamily(@Query('member_id') member_id: number) {
    const newEntry: FamilyEntity = new FamilyEntity();
    newEntry.family_id = 1;
    newEntry.member_id = member_id;
    newEntry.relationship = 'unset relationship';
    newEntry.family_name = 'unset family name';

    //this.familyRepository.create(newEntry);
    return await this.familyRepository.save(newEntry);
  }

  @Put('AddMemberToFamily') //There may be a more efficient way to do this function; on todo list
  async AddMemberToFamily(
    @Body() user: User,
    @Query('family_id') familyID: number,
  ): Promise<FamilyEntity> {
    const familyEntry = await this.familyRepository
      .findOne({
        member_id: user.id,
      })
      .then((familyEntry) => {
        if (!familyEntry) {
          throw new NotFoundException('familyEntry with ID not found');
        } else {
          return familyEntry;
        }
      });
    familyEntry.family_id = familyID;
    return this.familyRepository.save(familyEntry);
  }
}
