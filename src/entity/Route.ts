import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import Train from './Train';
import TrainDriver from './TrainDriver';

@Entity()
export default class Route {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty()
  @Column()
  distance!: number;

  @IsNotEmpty()
  @Column()
  destination!: string;

  @IsNotEmpty()
  @Column()
  departurePoint!: string;

  @IsNotEmpty()
  @Column()
  destinationDate!: Date;

  @IsNotEmpty()
  @Column()
  departurePointDate!: Date;

  @Column()
  trainId!: number;

  @Column()
  trainDriverId!: number;

  @OneToOne(() => Train)
  @JoinColumn()
  train: Train;

  @ManyToOne(() => TrainDriver, (trainDriver) => trainDriver.routes)
  trainDriver!: TrainDriver;
}