import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import User from './User';

@Entity()
export default class Dispatcher {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty()
  @Column()
  birthDate!: Date;

  @IsNotEmpty()
  @Column()
  address!: string;

  @IsNotEmpty()
  @Column()
  cityWork!: string;

  @IsNotEmpty()
  @Column()
  userId!: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}