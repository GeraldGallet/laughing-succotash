import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './modules/books/book.module';
import { DatabaseModule } from './modules/database/database.module';
import { AuthorModule } from './modules/authors/author.module';

@Module({
  imports: [DatabaseModule, AuthorModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
