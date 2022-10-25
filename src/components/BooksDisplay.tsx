import { connect } from 'react-redux'
import { dates, defaultDates, state, book } from '../types'
import { setAuthor, setDates, fetchBooks } from '../actions'
import { useEffect } from 'react'

type props = {
    books: book[],
    setAuthor: (author: string) => void,
    setDates: (dates: dates) => void,
    fetchBooks: () => void
}

function BooksDisplay({books, setAuthor, setDates, fetchBooks, }: props) {
    useEffect(() => {fetchBooks()}, [])

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

            <tbody>
            {/* For each book, display rank, author, title, and date */}
            {/* Clicking on author shows all books by that author */}
            {/* Clicking on date displays all books in that date (unless book has dummy date of 10000) */}
            { books.map((book: book, idx: number): JSX.Element => (
                <tr key={idx}>
                    <td>{book.rank}</td>
                    <td onClick={() => {
                        setAuthor(book.author)
                        setDates(defaultDates)
                        fetchBooks()
                    }}>
                        <a>{book.author}</a>
                    </td>
                    <td><em>{book.title}</em></td>
                    { book.publication_date === 10000 ? 
                        <td>No Date</td> :
                        <td onClick={() => {
                            setAuthor('')
                            setDates({ start: book.publication_date, end: book.publication_date })
                            fetchBooks()
                            }}>
                            <a>{book.publication_date}</a>
                        </td>
                    }
                </tr>
            )) }
            </tbody>
        </table>
}

function mapStateToProps(state: state): { books: book[] } {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps, { setAuthor, setDates, fetchBooks })(BooksDisplay)