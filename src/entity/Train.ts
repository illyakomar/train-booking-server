import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import Wagon from './Wagon';

@Entity()
export default class Train {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty()
  @Column()
  numberTrain!: number;

  @IsNotEmpty()
  @Column()
  typeTrain!: string;

  @OneToMany(() => Wagon, (wagon) => wagon.trainId)
  wagones: Wagon[];
}