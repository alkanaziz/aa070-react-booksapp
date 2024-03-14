import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BooksProvider } from './BooksContext'
import BookDetails from './components/BookDetails'

function App() {
  return (
    <>
    <BooksProvider>
      <Navbar />
      <Home />
      <BookDetails />
    </BooksProvider>
    </>
  )
}

export default App
