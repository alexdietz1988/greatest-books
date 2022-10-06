import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import fiction from '../data/fiction'
import nonfiction from '../data/nonfiction'
import { dates, defaultDates, state } from '../types'
import { setAuthor, setDates } from '../actions'

type props = {
    genre: string,
    dates: dates,
    author: string,
    setAuthor: (author: string) => void,
    setDates: (dates: dates) => void,
}

type book = {
    rank: number,
    title: string,
    author: string,
    year: number
}

function BooksDisplay({ genre, dates, author, setAuthor, setDates }: props) {
    const [books, setBooks] = useState(fiction)
    useEffect(filterBooks, [genre, dates, author])

    // Filter books array depending on selected genre, date, and author
    function filterBooks(): void {
        const allBooks: book[] = genre === 'fiction' ? fiction : nonfiction
        const filtered: book[] = []
        for (let i = 0; i < allBooks.length && filtered.length < 100; i++) {
            const book: book = allBooks[i]
            const inDateRange: boolean = (
                book.year >= dates.start &&
                book.year <= dates.end
            )
            const datesAreDefault: boolean = (
                dates.start === defaultDates.start &&
                dates.end === defaultDates.end
            )
            if (
                (inDateRange || datesAreDefault) &&
                (author === '' || book.author === author)
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
                        setAuthor(book.author)
                        setDates(defaultDates)
                    }}>
                        <a>{book.author}</a>
                    </td>
                    <td><em>{book.title}</em></td>
                    { book.year === 10000 ? 
                        <td>No Date</td> :
                        <td onClick={() => {
                            setAuthor('')
                            setDates({ start: book.year, end: book.year })
                            }}>
                            <a>{book.year}</a>
                        </td>
                    }
                </tr>
            )) }
        </table>
}

function mapStateToProps(state: state): state {
    return {
        author: state.author,
        genre: state.genre,
        dates: state.dates
    }
}

export default connect(mapStateToProps, { setAuthor, setDates })(BooksDisplay)