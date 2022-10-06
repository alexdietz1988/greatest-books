import { useEffect, useState } from 'react'
import fiction from '../fiction'
import nonfiction from '../nonfiction'

function BooksDisplay(props: any) {
    const [books, setBooks] = useState(fiction)

    function filterBooks(): void {
        let allBooks = props.genre === 'fiction' ? fiction : nonfiction
        let filtered = []
        for (let i = 0; i < allBooks.length && filtered.length < 100; i++) {
          let book = allBooks[i]
          if (
            (book.year > props.dates.start - 1 && book.year < props.dates.end + 1) &&
            (props.author === '' || book.author === props.author)) {
            filtered.push(book)
          }
        }
        setBooks(filtered)
    }
    
    useEffect(filterBooks, [props])

    const booksDisplay = books.map((book, idx): JSX.Element => {
        return (
          <tr key={idx}>
            <td>{book.rank}</td>
            <td onClick={() => {
                props.setAuthor(book.author)
                props.setDates(props.defaultDates)
            }}>
                <a>{book.author}</a>
            </td>
            <td><em>{book.title}</em></td>
            <td onClick={() => {
                if (typeof book.year === "number") {
                    props.setAuthor('')
                    props.setDates({ start: book.year, end: book.year })
                }
                }}>
                <a>{book.year}</a>
            </td>
          </tr>
        )
        }
    )

    if (books.length === 0) {
        return <div>No results</div>
    }

    return (
        <table className='table' style={{maxWidth: "600px"}}>
            <thead>
                <tr>
                    <th className='is-narrow'>Rank</th>
                    <th>Author</th>
                    <th>Title</th>
                    <th className='is-narrow'>Date</th>
                </tr>
            </thead>
            {booksDisplay}
        </table>
    )
}

export default BooksDisplay