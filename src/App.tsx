import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import GenreButtons from './components/GenreButtons'
import DateButtons from './components/DateButtons'
import AuthorButton from './components/AuthorButton'
import BooksDisplay from './components/BooksDisplay'

function App(): JSX.Element {
  return (
    <>
    <Header />

    <main className='section'>
      <GenreButtons />
      <Routes>
        <Route path='/' element={<DateButtons />} />
        <Route path='/:author' element={<AuthorButton />} />
      </Routes>
      
      <BooksDisplay />
      <p className='is-size-6 has-text-grey'>Book icons created by <a className='has-text-info' href="https://www.flaticon.com/free-icons/book" title="book icons">Freepik - Flaticon</a></p>
    </main>
    </>
  )
}

export default App