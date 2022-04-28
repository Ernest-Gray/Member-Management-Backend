import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

//This entity represents what a user is.  each variable will be a column in a table entry
@Entity('family-table')
export class FamilyEntity {
  @PrimaryColumn()
  member_id: number;

  @Column()
  family_id: number;

  @Column()
  family_name: string;

  @Column()
  relationship: string;
}
