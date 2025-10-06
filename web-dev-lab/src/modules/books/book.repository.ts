import { Injectable } from '@nestjs/common';
import { BookModel, CreateBookModel, UpdateBookModel } from './book.model';
import { v4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity, BookId } from './entities/book.entity';
import { In, Repository } from 'typeorm';
import { AuthorEntity } from './entities/author.entity';

@Injectable()
export class BookRepository {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly authorRepository: Repository<AuthorEntity>,
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {}

  private books: BookModel[] = [];

  public async getAllBooks(): Promise<BookModel[]> {
    const books = await this.bookRepository.find();
    const authors = await this.authorRepository.find({
      where: { id: In(books.map((book) => book.authorId)) },
    });

    return books
      .map((book): BookModel | undefined => {
        const author = authors.find((author) => author.id === book.authorId);

        if (!author) {
          return undefined;
        }

        return { ...book, author };
      })
      .filter((book) => !!book);
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

  public createBook(book: CreateBookModel): BookModel {
    const newBook: BookModel = {
      ...book,
      id: v4(),
    };

    this.books.push(newBook);
    return newBook;
  }

  public updateBook(id: string, book: UpdateBookModel): BookModel | undefined {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
      return undefined;
    }

    this.books[bookIndex] = { ...this.books[bookIndex], ...book };

    return this.books[bookIndex];
  }

  public deleteBook(id: string): void {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
