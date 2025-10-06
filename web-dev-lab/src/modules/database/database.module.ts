import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from '../authors/author.entity';
import { BookEntity } from '../books/entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [AuthorEntity, BookEntity],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
