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
      host: 'churchofphilippi.cm8d52h57gxl.us-east-2.rds.amazonaws.com',
      database: 'cosc412db',
      username: 'postgres',
      password: 'Race7422!',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, //leave off if working with actual production database
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
