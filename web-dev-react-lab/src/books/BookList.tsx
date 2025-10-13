import { useEffect, useState } from 'react'
import { useBookProvider } from './useBookProvider'
import { BookListItem } from './BookListItem'

export function BookList() {
  const [title, setTitle] = useState('')
  const [yearPublished, setYearPublished] = useState(0)
  const { books, onCreate, loadBooks } = useBookProvider()

  useEffect(() => {
    loadBooks()
  }, [])

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Year Published"
          value={yearPublished}
          onChange={e => setYearPublished(Number(e.target.value))}
        />
        <button onClick={() => onCreate({ title, yearPublished })}>
          Create Book
        </button>
      </div>
      <ul>
        {books.map(book => (
          <BookListItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  )
}
