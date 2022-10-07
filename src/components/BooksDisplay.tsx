import { connect } from 'react-redux'
import { dates, defaultDates, state, book } from '../types'
import { setAuthor, setDates } from '../actions'

type props = {
    books: book[],
    setAuthor: (author: string) => void,
    setDates: (dates: dates) => void,
}

function BooksDisplay({books, setAuthor, setDates}: props) {
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
            </tbody>
        </table>
}

function mapStateToProps(state: state): {books: book[]} {
    return {
        books: state.data.books
    }
}

export default connect(mapStateToProps, { setAuthor, setDates })(BooksDisplay)