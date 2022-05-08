import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

//This entity represents what a user is.  each variable will be a column in a table entry
@Entity('Member')
export class User {
  //IDs
  @PrimaryGeneratedColumn()
  member_id: number;

  @Column() //May not be needed;
  id: number;

  @Column()
  mokjang_id: number;

  @Column()
  sarangbang_id: number;

  @Column({ default: true })
  active: boolean;

  @Column({ default: false })
  admin: boolean;

  @Column()
  campusname: string;

  //First name
  @Column({ nullable: false })
  efname: string;

  //Middle name
  @Column({ nullable: false })
  kfname: string;

  //Middle name
  @Column({ nullable: false })
  emname: string;

  //Last Name
  @Column()
  elname: string;

  @Column()
  gender: string;

  @Column()
  householdid: number;

  @Column()
  householdprimarycontact: string;

  //Does the member recieve email notifications?
  @Column()
  email_notification: boolean;

  @Column()
  anniversary: string;

  @Column()
  image_url: string;

  //Email
  @Column()
  homeemail: string;

  //Phone Numbers
  @Column()
  homephonenumber: string;

  @Column()
  mobilephonenumber: string;

  //Address information
  @Column()
  homeaddressstreetname1: string;

  @Column()
  homeaddressstreetname2: string;

  @Column()
  homeaddresscity: string;

  @Column()
  homeaddressstate: string;

  @Column()
  homeaddresszipcode: number;

  @Column({ type: 'date' })
  birthdate: Date;

  //User Profile Image; this is a way im currently experimenting with ; Photos require lots of extra work and complications; put on backburner for now
  // @Column({ type: 'bytea', nullable: false })
  // profileImage: Buffer;

  @Column()
  password: string;

  @Column()
  visitation: boolean;
}
