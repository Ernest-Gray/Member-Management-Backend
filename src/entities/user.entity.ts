import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

//This entity represents what a user is.  each variable will be a column in a table entry
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  visitation: boolean;

  @Column()
  mokjang_id: number;

  @Column()
  sarangbang_id: number;
}
