import { Module } from '@nestjs/common';
import envConfig from '../config/environment';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: envConfig.dbHost,
      port: 3306,
      username: envConfig.dbUser,
      password: '',
      database: envConfig.dbName,
      entities: ["dist/entity/**/*.js"],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
