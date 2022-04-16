import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';
import Ticket from './Ticket';

@Entity()
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @IsNotEmpty()
  @Column()
  firstName!: string;

  @IsNotEmpty()
  @Column()
  lastName!: string;

  @IsNotEmpty()
  @Column()
  middleName!: string;

  @IsNotEmpty()
  @Column()
  passport!: string;

  @IsNotEmpty()
  @IsEmail()
  @Column()
  email!: string;

  @IsNotEmpty()
  @Column()
  password!: string;

  @IsNotEmpty()
  @IsPhoneNumber('UA', { message: 'Введіть коректний номер телефону' })
  @Column()
  phoneNumber!: string;

  @OneToMany(() => Ticket, (ticket) => ticket.userId)
  tickets!: Ticket[];
}