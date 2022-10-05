import { useState } from 'react'

import Form from './components/Form'
import BooksDisplay from './components/BooksDisplay'

function App() {
  const [genre, setGenre] = useState('fiction')
  const defaultDates = {start: -700, end: new Date().getFullYear()}
  const [dates, setDates] = useState(defaultDates)
  const [author, setAuthor] = useState('')

  return (
    <>
    <main className='section'>
      <Form genre={genre} setGenre={setGenre} dates={dates} setDates={setDates} defaultDates={defaultDates} author={author} setAuthor={setAuthor} />
      <BooksDisplay genre={genre} dates={dates} setDates={setDates} defaultDates={defaultDates} author={author} setAuthor={setAuthor} />
    </main>
    </>
  )
}

export default App
