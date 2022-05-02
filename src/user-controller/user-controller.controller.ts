import { Repository } from 'typeorm';
import { Controller, Get, Post, Query, Put, Body } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

//This controller is a REST API.  Basically, you can make GET POST PUT requests here and when you type in the right
//http url it will do the code inside.
//For Example if i go in my web browser and enter <http://127.0.0.1:3000/user-controller/GetMembersByName?name=bob>
//It would attempt to go to this classes "GetMebersByName" function and try to get all the users with the name 'bob'

@Controller('user-controller')
export class UserControllerController {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  //Gets

  @Get('GetMembers')
  async GetMembers() {
    return await this.userRepository.find(); //{cache : true}?
  }

  @Get('GetMembersByName')
  async GetMembersByName(@Query('name') name: string): Promise<User[]> {
    return await this.userRepository
      .createQueryBuilder('names')
      .select(`LOWER(first_name) first_name`) //getting lowercase
      .orderBy('LOWER(first_name)', 'ASC')
      .where(`first_name ILIKE '%${name}%'`) //getting first_name thats like name with any possabilities before or after it, thats the '%' symbol.
      .getRawMany();
    // return await this.userRepository.find({ first_name: name });
  }

  @Get('GetMemberByID')
  async GetMemberByID(@Query('id') id): Promise<User> {
    return await this.userRepository.findOne({ id: id });
  }
  @Get('GetMokjangMembers')
  async GetMokjangMembers(@Query('mokjang_id') mokjang_id): Promise<User[]> {
    return await this.userRepository.find({ mokjang_id: mokjang_id });
  }

  @Get('GetSarangbangMembers')
  async GetSarangbangMembers(
    @Query('mokjang_id') mokjang_id,
    @Query('sarangbang_id') sarangbang_id,
  ): Promise<User[]> {
    return await this.userRepository.find({
      mokjang_id: mokjang_id,
      sarangbang_id: sarangbang_id,
    });
  }

  @Get('GetNeedsVisitation')
  async GetNeedsVisitation(): Promise<User[]> {
    return await this.userRepository.find({ visitation: true });
  }

  @Put('SetNeedsVisitation')
  async SetNeedsVisitation(@Query('id') id) {
    return await this.userRepository.update(id, { visitation: true });
  }
  @Post('CreateUser')
  async CreateUser(@Body() user: User) {
    console.log('Trying to create user: ' + user);
    return await this.userRepository.save(user);
  }
  //   example Body
  //   {
  //     "id": "0",
  //     "name": "my name",
  //     "title": "my title",
  //     "email": "my_email@gmail.com",
  //     "phone": "111-111-1111",
  //     "address": "my address",
  //     "city": "my city",
  //     "visitation": false,
  //     "mokjang_id": 0,
  //     "sarangbang_id": 0
  // }
}
