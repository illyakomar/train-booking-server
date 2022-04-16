import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import Route from './Route';
import User from './User';

@Entity()
export default class TrainDriver {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty()
  @Column()
  birthDate!: Date;

  @IsNotEmpty()
  @Column()
  healthStatus!: string;

  @IsNotEmpty()
  @Column()
  certificateNumber!: number;

  @IsNotEmpty()
  @Column()
  userId!: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToMany(() => Route, (route) => route.trainDriverId)
  routes: Route[];
}