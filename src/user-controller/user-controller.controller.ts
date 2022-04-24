import { Repository } from 'typeorm';
import { Controller, Get, Post, Query, Put, Body, Param } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Controller('user-controller')
export class UserControllerController {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  //Gets
  @Get('GetMembersByName')
  async GetMembersByName(@Query('name') name: string): Promise<User[]> {
    return await this.userRepository.query(
      'SELECT * FROM public."user" where name = \'' + name + "'",
    );
  }

  @Get('GetMemberByID')
  async GetMemberByID(@Query('id') id): Promise<User> {
    return await this.userRepository.query(
      'SELECT * FROM public."user" where id = ' + id,
    );
  }
  @Get('GetMokjangMembers')
  async GetMokjangMembers(@Query('mokid') mokid): Promise<User[]> {
    return await this.userRepository.query(
      'SELECT * FROM public."user" where mokid = ' + mokid,
    );
  }

  @Get('GetSarangbangMembers')
  async GetSarangbangMembers(
    @Query('mokid') mokjangid,
    @Query('sarangbangid') sarangbangid,
  ): Promise<User[]> {
    return await this.userRepository.query(
      'SELECT * FROM public."user" where mokjangid = \'' +
        mokjangid +
        "' and sarangbangid = '" +
        sarangbangid +
        "'",
    );
  }

  @Get('GetNeedsVisitation')
  async GetNeedsVisitation(): Promise<User[]> {
    return await this.userRepository.query(
      'SELECT * FROM public."user" where visitation = true',
    );
  }
  //Posts

  @Put('SetNeedsVisitation')
  async SetNeedsVisitation(@Body() user: User) {
    user.visitation = true;
    return await this.userRepository.update(user.id, user);
  }
  //   example Body
  //{
  //     "id": 5,
  //     "name": "alfred",
  //     "title": "dev",
  //     "email": "bob@gmail",
  //     "phone": "410-124-4123",
  //     "address": "12397",
  //     "city": "bobobobobcity",
  //     "visitation": false
  // }
}
