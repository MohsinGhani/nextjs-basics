import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { VideoModule } from './videos/video.module'
import { GraphQLModule } from '@nestjs/graphql'

@Module({
  imports: [
    CoursesModule,
    VideoModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql']
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
