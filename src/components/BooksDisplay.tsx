import { useEffect, useState } from 'react'
import data from '../data'

function BooksDisplay(props: any) {
    const [books, setBooks] = useState(data)

    function filterBooks(): void {
        let filtered = []
        for (let i = 0; i < data.length && filtered.length < 100; i++) {
          let book = data[i]
          if (
            (book.year > props.dates.start - 1 && book.year < props.dates.end + 1) &&
            (props.author === '' || book.author === props.author)) {
            filtered.push(book)
          }
        }
        setBooks(filtered)
    }
    
    useEffect(filterBooks, [props])

    function seeAllByAuthor(author: string): void {
        props.setAuthor(author)
        props.setDates(props.defaultDates)
    }

    function seeAllByYear(year: number): void {
        props.setDates({ start: year, end: year })
    }

    const booksDisplay = books.map((book, idx) => {
        return (
          <tr key={idx}>
            <td>{book.rank}</td>
            <td onClick={() => seeAllByAuthor(book.author)}><a>{book.author}</a></td>
            <td><em>{book.title}</em></td>
            <td onClick={() => {
                if (typeof book.year === "number") {
                    seeAllByYear(book.year)
                }
                }}>
                <a>{book.year}</a>
            </td>
          </tr>
        )
        }
    )

    return (
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
    )
}

export default BooksDisplay