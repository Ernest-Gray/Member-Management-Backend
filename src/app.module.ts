import { FamilyEntity } from './entities/family.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User as UserEntity } from 'src/entities/user.entity';
import { UserControllerController } from './user-controller/user-controller.controller';
import { FamilycontrollerController } from './familycontroller/familycontroller.controller';
import { TestFamilyModule } from './test-family/test-family.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      database: 'se412_ernest',
      username: 'postgres',
      password: 'star11',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity, FamilyEntity]),
    TestFamilyModule,
  ],
  controllers: [
    AppController,
    UserControllerController,
    FamilycontrollerController,
  ],
  providers: [AppService],
})
export class AppModule {}
