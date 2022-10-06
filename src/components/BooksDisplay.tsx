import { useEffect, useState } from 'react'
import fiction from '../data/fiction'
import nonfiction from '../data/nonfiction'

function BooksDisplay(props: any) {
    const [books, setBooks] = useState(fiction)
    useEffect(filterBooks, [props])

    function filterBooks(): void {
        let allBooks = props.genre === 'fiction' ? fiction : nonfiction
        const filtered = []
        for (let i = 0; i < allBooks.length && filtered.length < 100; i++) {
            let book = allBooks[i]
            if ((book.year > props.dates.start - 1 && book.year < props.dates.end + 1) &&
            (props.author === '' || book.author === props.author)) {
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
                    <td onClick={() => {
                        props.setAuthor('')
                        props.setDates({ start: book.year, end: book.year })
                        }}>
                        <a>{book.year}</a>
                    </td>
                </tr>
            )) }
        </table>
}

export default BooksDisplay