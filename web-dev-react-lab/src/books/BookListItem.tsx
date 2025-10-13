import type { BookModel } from './BookModel'

interface BookListItemProps {
  book: BookModel
}

export function BookListItem({ book }: BookListItemProps) {
  return (
    <li>
      {book.title} ({book.yearPublished}) by {book.author.firstName}{' '}
      {book.author.lastName}
    </li>
  )
}
