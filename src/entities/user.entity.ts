import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

//This entity represents what a user is.  each variable will be a column in a table entry
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  //First name
  @Column({ nullable: false })
  first_name: string;

  //Last Name
  @Column()
  last_name: string;

  @Column()
  isAdmin: boolean;

  @Column()
  gender: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zipcode: number;

  @Column()
  birthdate: Date;

  //User Profile Image; this is a way im currently experimenting with ; Photos require lots of extra work and complications; put on backburner for now
  // @Column({ type: 'bytea', nullable: false })
  // profileImage: Buffer;

  @Column()
  password: string;

  @Column()
  visitation: boolean;

  @Column()
  mokjang_id: number;

  @Column()
  sarangbang_id: number;
}
