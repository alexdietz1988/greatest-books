import { useState } from 'react'

import Form from './components/Form'
import BooksDisplay from './components/BooksDisplay'

function App() {
  const defaultDates = {start: -700, end: 3000}
  const [dates, setDates] = useState(defaultDates)

  return (
    <>
    <main className='section'>
      <Form dates={dates} setDates={setDates} defaultDates={defaultDates} />
      <BooksDisplay dates={dates}/>
    </main>
    </>
  )
}

export default App
