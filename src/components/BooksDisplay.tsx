import { useEffect, useState } from 'react'
import data from '../data'

function BooksDisplay(props: any) {
    const [books, setBooks] = useState(data)

    function filterBooks() {
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

    const booksDisplay = books.map((book, idx) => {
        return (
          <tr key={idx}>
            <td>{book.rank}</td>
            <td onClick={() => props.setAuthor(book.author)}>{book.author}</td>
            <td><em>{book.title}</em></td>
            <td>{book.year}</td>
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