import { useState } from 'react'
import type { BookModel, CreateBookModel } from './BookModel'
import axios from 'axios'

export const useBookProvider = () => {
  const [books, setBooks] = useState<BookModel[]>([])

  const loadBooks = () => {
    axios
      .get('http://localhost:3000/books')
      .then(res => {
        setBooks(res.data.data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  const onCreate = (input: CreateBookModel) => {
    axios
      .post('http://localhost:3000/books', {
        ...input,
        authorId: '4540d533-3100-445a-8796-ab5dfd9a3240',
      })
      .then(() => loadBooks())
      .catch(err => {
        console.error(err)
      })
  }

  return {
    books,
    onCreate,
    loadBooks,
  }
}
