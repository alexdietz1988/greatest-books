import { useEffect, useState } from 'react'
import data from './data'

function App() {
  const defaultDates = {start: -700, end: 3000}
  const [dates, setDates] = useState(defaultDates)
  const [books, setBooks] = useState(data)

  function filterBooks() {
    let filtered = []
    for (let i = 0; i < data.length && filtered.length < 100; i++) {
      let book = data[i]
      if (book.year > dates.start - 1 && book.year < dates.end + 1) {
        filtered.push(book)
      }
    }
    setBooks(filtered)
  }

  useEffect(filterBooks, [dates])

  const centuryButtons = []
  for (let i = 1700; i < 2100; i += 100) {
    centuryButtons.push(
      <button key={i} className='button' onClick={() => setDates({start: i, end: i + 99})}>
        {i}s
      </button>)
  }

  const decadeButtons = []
  const yearButtons = []

  let firstYearOfCentury = Math.floor(dates.start/100) * 100
  for (let i = firstYearOfCentury; i < firstYearOfCentury + 99 && i < 2030; i += 10) {
    decadeButtons.push(
      <button key={i} className='button' onClick={() => setDates({start: i, end: i + 9})}>
        {i}s
      </button>)
  }

  let firstYearOfDecade = Math.floor(dates.start/10) * 10
  for (let i = firstYearOfDecade; i < firstYearOfDecade + 10 && i < 2023; i++) {
    yearButtons.push(
      <button key={i} className='button' onClick={() => setDates({start: i, end: i})}>
        {i}
      </button>)
  }
  
  const booksDisplay = books.map((book, idx) => {
    return (
      <tr key={idx}>
        <td>{book.rank}</td>
        <td>{book.author}</td>
        <td><em>{book.title}</em></td>
        <td>{book.year}</td>
      </tr>
    )
    }
  )

  return (
    <>
    <main className='section'>
    <div className='buttons has-addons'>
    <button className='button' onClick={() => setDates(defaultDates)}>All</button>
    <button className='button' onClick={() => setDates({start: -700, end: 1699})}>Earlier</button>
    {centuryButtons}
    </div>

    { dates.start > 1699 ?
      <div className='buttons has-addons'>
      {decadeButtons}
      </div>
      : null  
    }
    
    { dates.end - dates.start <= 10 ?
      <div className='buttons has-addons'>
      {yearButtons}
      </div>
      : null
    }

    <table className='table'>
      <thead>
        <tr>
            <th>Rank</th>
            <th>Author</th>
            <th>Title</th>
            <th>Date</th>
        </tr>
      </thead>
      {booksDisplay}
    </table>
    </main>
    </>
  )
}

export default App
