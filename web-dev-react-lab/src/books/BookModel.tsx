export type BookModel = {
  id: string
  title: string
  author: {
    firstName: string
    lastName: string
  }
  yearPublished: number
}

export type CreateBookModel = {
  title: string
  yearPublished: number
}
