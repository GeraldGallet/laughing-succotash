import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { AuthorEntity } from '../authors/author.entity';
import {
  BookModel,
  CreateBookModel,
  FilterBooksModel,
  UpdateBookModel,
} from './book.model';
import { BookEntity, BookId } from './entities/book.entity';

@Injectable()
export class BookRepository {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly authorRepository: Repository<AuthorEntity>,
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
    private readonly dataSource: DataSource,
  ) {}

  public async getAllBooks(
    input?: FilterBooksModel,
  ): Promise<[BookModel[], number]> {
    const [books, totalCount] = await this.bookRepository.findAndCount({
      take: input?.limit,
      skip: input?.offset,
      relations: { author: true },
      order: input?.sort,
    });

    return [books, totalCount];
  }

  public async getBookById(id: string): Promise<BookModel | undefined> {
    const book = await this.bookRepository.findOne({
      where: { id: id as BookId },
    });

    if (!book) {
      return undefined;
    }

    const author = await this.authorRepository.findOne({
      where: { id: book.authorId },
    });

    if (!author) {
      return undefined;
    }

    return {
      ...book,
      author,
    };
  }

  public async createBook(book: CreateBookModel): Promise<BookModel> {
    const author = await this.authorRepository.findOne({
      where: { id: book.authorId },
    });

    if (!author) {
      throw new Error('Author not found');
    }

    return this.bookRepository.save(this.bookRepository.create(book));
  }

  public async updateBook(
    id: string,
    book: UpdateBookModel,
  ): Promise<BookModel | undefined> {
    const oldBook = await this.bookRepository.findOne({
      where: { id: id as BookId },
    });

    if (!oldBook) {
      return undefined;
    }

    await this.bookRepository.update(id, book);
  }

  public async deleteBook(id: string): Promise<void> {
    await this.bookRepository.delete(id);
  }

  public async deleteBooks(ids: string[]): Promise<void> {
    await this.dataSource.transaction(async (transactionalEntityManager) => {
      await Promise.all(
        ids.map((id) => transactionalEntityManager.delete(BookEntity, { id })),
      );
    });
  }
}
