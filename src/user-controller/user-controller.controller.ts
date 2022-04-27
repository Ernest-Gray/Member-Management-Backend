import { Repository } from 'typeorm';
import { Controller, Get, Post, Query, Put, Body, Param } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
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
  @Get('GetMembersByName')
  async GetMembersByName(@Query('name') name: string): Promise<User[]> {
    return await this.userRepository.find({ name: name });
    // return await this.userRepository.query(
    //   'SELECT * FROM public."user" where name = \'' + name + "'",
    // );
  }

  @Get('GetMemberByID')
  async GetMemberByID(@Query('id') id): Promise<User> {
    return await this.userRepository.findOne({ id: id });
    // return await this.userRepository.query(
    //   'SELECT * FROM public.user where id = ' + id,
    // );
  }
  @Get('GetMokjangMembers')
  async GetMokjangMembers(@Query('mokjang_id') mokjang_id): Promise<User[]> {
    return await this.userRepository.find({ mokjang_id: mokjang_id });
    // return await this.userRepository.query(
    //   'SELECT * FROM public.user where mokjang_id = ' + mokjang_id,
    // );
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
    // return await this.userRepository.query(
    //   'SELECT * FROM public."user" where mokjang_id = \'' +
    //     mokjang_id +
    //     "' and sarangbang_id = '" +
    //     sarangbang_id +
    //     "'",
    // );
  }

  @Get('GetNeedsVisitation')
  async GetNeedsVisitation(): Promise<User[]> {
    return await this.userRepository.find({ visitation: true });
    // return await this.userRepository.query(
    //   'SELECT * FROM public."user" where visitation = true',
    // );
  }
  //Posts

  @Put('SetNeedsVisitation')
  async SetNeedsVisitation(@Query('id') id) {
    return await this.userRepository.update(id, { visitation: true });
  }
  @Post('CreateUser')
  async CreateUser(@Body() user: User) {
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
