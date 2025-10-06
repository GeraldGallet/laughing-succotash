import { Injectable } from '@nestjs/common';
import { AuthorModel, CreateAuthorModel } from './author.model';
import { AuthorEntity } from './author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorRepository {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly authorRepository: Repository<AuthorEntity>,
  ) {}

  public async getAllAuthors(): Promise<AuthorModel[]> {
    return this.authorRepository.find();
  }

  public async createAuthor(author: CreateAuthorModel): Promise<AuthorModel> {
    return this.authorRepository.save(this.authorRepository.create(author));
  }
}
