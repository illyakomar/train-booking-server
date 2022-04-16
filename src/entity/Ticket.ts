import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import Wagon from './Wagon';
import User from './User';

@Entity()
export default class Ticket {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty()
  @Column()
  seatNumber!: number;

  @IsNotEmpty()
  @Column()
  price!: string;

  @Column({ default: false })
  isAvailability: boolean;

  @Column()
  userId!: string;

  @IsNotEmpty()
  @Column()
  wagonId!: number;

  @ManyToOne(() => Wagon, (wagon) => wagon.tickets)
  wagon!: Wagon;

  @ManyToOne(() => User, (user) => user.tickets)
  user!: User;
}