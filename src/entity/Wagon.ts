import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import Train from './Train';
import Ticket from './Ticket';

@Entity()
export default class Wagon {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty()
  @Column()
  typeWagon!: string;

  @IsNotEmpty()
  @Column()
  placeCount!: number;

  @IsNotEmpty()
  @Column()
  placePrice!: number;

  @IsNotEmpty()
  @Column()
  trainId!: number;

  @ManyToOne(() => Train, (train) => train.wagones)
  train!: Train;

  @OneToMany(() => Ticket, (ticket) => ticket.wagonId)
  tickets!: Ticket[];
}