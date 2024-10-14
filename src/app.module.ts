import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { MusicController } from './music/music/music.controller';
import { MusicService } from './music/music/music.service';


@Module({
  imports: [],
  controllers: [AppController, UsersController, MusicController],
  providers: [AppService, UsersService, MusicService],
})
export class AppModule {}
