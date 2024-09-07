import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, 
    CommentsModule,
    MongooseModule.forRoot('mongodb+srv://shoaibkcomp:gAUh6Lb6gCmNyUOC@cluster0.itmyf.mongodb.net/threads?retryWrites=true&w=majority&appName=Cluster0'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
