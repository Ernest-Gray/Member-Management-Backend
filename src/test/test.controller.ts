import { Repository } from 'typeorm';
import { Controller, Query } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('test')
export class TestController {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  @Get('findAllWithName')
  async read(@Query('name') name: string): Promise<User[]> {
    return await this.userRepository.query(
      'SELECT * FROM public."user" where name = \'' + name + "'",
    );
  }

  @Get('findUserByID')
  async findUserByID(@Query('id') id: string): Promise<User[]> {
    return await this.userRepository.query(
      'SELECT * FROM public."user" where id = ' + id,
    );
  }
}
