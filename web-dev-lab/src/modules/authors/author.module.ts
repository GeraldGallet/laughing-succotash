import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorController } from './author.controller';
import { AuthorEntity } from './author.entity';
import { AuthorRepository } from './author.repository';
import { AuthorService } from './author.service';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity])],
  controllers: [AuthorController],
  providers: [AuthorRepository, AuthorService],
})
export class AuthorModule {}
