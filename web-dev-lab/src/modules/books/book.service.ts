import { Injectable } from '@nestjs/common';
import { BookModel, CreateBookModel, UpdateBookModel } from './book.model';
import { v4 } from 'uuid';
import { BookRepository } from './book.repository';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  public async getAllBooks(): Promise<BookModel[]> {
    return this.bookRepository.getAllBooks();
  }

  public async getBookById(id: string): Promise<BookModel | undefined> {
    return this.bookRepository.getBookById(id);
  }

  public createBook(book: CreateBookModel): BookModel {
    const newBook: BookModel = {
      ...book,
      id: v4(),
    };

    this.bookRepository.createBook(newBook);
    return newBook;
  }

  public async updateBook(
    id: string,
    book: UpdateBookModel,
  ): Promise<BookModel | undefined> {
    const oldBook = await this.getBookById(id);
    if (!oldBook) {
      return undefined;
    }

    return this.bookRepository.updateBook(id, book);
  }

  public deleteBook(id: string): void {
    this.bookRepository.deleteBook(id);
  }
}
