import { useBookContext } from '../BooksContext'

const BookDetails = () => {
  const { books, addBookToRead } = useBookContext()

  return (
    <div className="mt-8">
      {books.length >0 && (
        <div className="m-24 grid grid-cols-1 gap-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book) => (
            <div
              onClick={() => addBookToRead(book)}
              key={book.id}
              className="rounded-lg border border-gray-300 p-4 "
            >
              {book.volumeInfo.imageLinks && (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  className="h-96 w-full  "
                />
              )}
              <h2 className="m-6 text-center text-xl font-semibold">
                {book.volumeInfo.title}
              </h2>
              {book.volumeInfo.authors && (
                <p className="m-2 text-center text-gray-600">
                  {book.volumeInfo.authors.join(', ')}
                </p>
              )}
              <p className="mt-2 h-56  overflow-scroll  text-gray-700 ">
                {book.volumeInfo.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BookDetails
