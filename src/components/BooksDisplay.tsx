import { useEffect, useState } from 'react'
import fiction from '../data/fiction'
import nonfiction from '../data/nonfiction'

function BooksDisplay(props: any) {
    const [books, setBooks] = useState(fiction)
    useEffect(filterBooks, [props])

    // Filter books array depending on selected genre, date, and author
    function filterBooks(): void {
        const allBooks = props.genre === 'fiction' ? fiction : nonfiction
        const filtered = []
        for (let i = 0; i < allBooks.length && filtered.length < 100; i++) {
            let book = allBooks[i]
            const inDateRange: boolean = (
                book.year >= props.dates.start &&
                book.year <= props.dates.end
            )
            const datesAreDefault: boolean = (
                props.dates.start === props.defaultDates.start &&
                props.dates.end === props.defaultDates.end
            )
            if (
                (inDateRange || datesAreDefault) &&
                (props.author === '' || book.author === props.author)
            ) {
                filtered.push(book)
            }
        }
        setBooks(filtered)
    }

    return books.length === 0 ?
        <p>No results</p> :
        <table className='table' style={{maxWidth: "600px"}}>
            <thead>
                <tr>
                    <th className='is-narrow'>Rank</th>
                    <th>Author</th>
                    <th>Title</th>
                    <th className='is-narrow'>Date</th>
                </tr>
            </thead>

            {/* For each book, display rank, author, title, and date */}
            {/* Clicking on author shows all books by that author */}
            {/* Clicking on date displays all books in that date (unless book has dummy date of 10000) */}
            { books.map((book, idx): JSX.Element => (
                <tr key={idx}>
                    <td>{book.rank}</td>
                    <td onClick={() => {
                        props.setAuthor(book.author)
                        props.setDates(props.defaultDates)
                    }}>
                        <a>{book.author}</a>
                    </td>
                    <td><em>{book.title}</em></td>
                    { book.year === 10000 ? 
                        <td>No Date</td> :
                        <td onClick={() => {
                            props.setAuthor('')
                            props.setDates({ start: book.year, end: book.year })
                            }}>
                            <a>{book.year}</a>
                        </td>
                    }
                </tr>
            )) }
        </table>
}

export default BooksDisplay