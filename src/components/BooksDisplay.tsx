import { useEffect, useState } from 'react'
import fiction from '../fiction'
import nonfiction from '../nonfiction'

function BooksDisplay(props: any) {
    const [books, setBooks] = useState(fiction)

    function filterBooks(): void {
        let allBooks = props.genre === 'fiction' ? fiction : nonfiction
        let filtered = []
        for (let i = 0; i < allBooks.length && filtered.length <= 100; i++) {
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
        <table className='table' style={{maxWidth: "600px"}}>
            <thead>
                <tr>
                    <th className='is-narrow'>Rank</th>
                    <th className=''>Author</th>
                    <th className=''>Title</th>
                    <th className='is-narrow'>Date</th>
                </tr>
            </thead>
            {booksDisplay}
        </table>
    )
}

export default BooksDisplay