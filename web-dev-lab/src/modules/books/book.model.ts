export type BookAuthorModel = {
  firstName: string;
  lastName: string;
};

export type BookModel = {
  id: string;
  title: string;
  author: BookAuthorModel;
  yearPublished: number;
};

export type CreateBookModel = {
  title: string;
  author: BookAuthorModel;
  yearPublished: number;
};

export type UpdateBookModel = Partial<CreateBookModel>;
