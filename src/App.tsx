import { useState } from 'react'

import Form from './components/Form'
import BooksDisplay from './components/BooksDisplay'

function App() {
  const defaultDates = {start: -700, end: new Date().getFullYear()}
  const [dates, setDates] = useState(defaultDates)
  const [author, setAuthor] = useState('')

  return (
    <>
    <main className='section'>
      <Form dates={dates} setDates={setDates} defaultDates={defaultDates} setAuthor={setAuthor} />
      <BooksDisplay dates={dates} author={author} setAuthor={setAuthor} />
    </main>
    </>
  )
}

export default App
