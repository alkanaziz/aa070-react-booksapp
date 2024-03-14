import { useState } from 'react'
import { useBookContext } from '../BooksContext'

function BookSearch() {
  const { fetchBooks, books } = useBookContext()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    fetchBooks(searchTerm)
    e.preventDefault()
  }
  return (
    <div>
      <div className="flex w-full justify-center">
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            placeholder="Search for books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-96 rounded-l-md px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-900"
          />
          <button
            type="submit"
            className="rounded-r-md bg-teal-950 px-4 py-2 font-bold text-white hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50 active:scale-95"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  )
}
export default BookSearch
