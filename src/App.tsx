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
    <div className='section pb-0'>
      <p className='title pb-2'>Explore the Greatest Books</p>
      <p className='subtitle'>Created by <a href="http://alexdietz.com">Alex Dietz</a>, based on <a href="https://thegreatestbooks.org/">The Greatest Books</a> by Shane Sherman</p>
    </div>

    <main className='section'>
      <Form genre={genre} setGenre={setGenre} dates={dates} setDates={setDates} defaultDates={defaultDates} author={author} setAuthor={setAuthor} />
      <BooksDisplay genre={genre} dates={dates} setDates={setDates} defaultDates={defaultDates} author={author} setAuthor={setAuthor} />
    
    <p className='is-size-6 has-text-grey'>Book icons created by <a className='has-text-info' href="https://www.flaticon.com/free-icons/book" title="book icons">Freepik - Flaticon</a></p>
    </main>
    </>
  )
}

export default App