import { connect } from 'react-redux'
import { state, defaultDates, dates } from '../types'
import { setGenre, setDates, setAuthor, fetchBooks } from '../actions'

type props = {
    genre: string,
    setGenre: (genre: string) => void,
    setDates: (dates: dates) => void,
    setAuthor: (author: string) => void,
    fetchBooks: () => void
}

function GenreButtons({genre, setGenre, setDates, setAuthor, fetchBooks }: props): JSX.Element {
    function genreButton(thisGenre: string): JSX.Element {
        return (
            <button
                key={thisGenre}
                className={genre === thisGenre ? 'button is-success' : 'button'}
                onClick={() => {
                if (genre !== thisGenre) {
                    setGenre(thisGenre)
                    setDates(defaultDates)
                    setAuthor('')
                    fetchBooks()
                }
                }}
                >
                {thisGenre[0].toUpperCase() + thisGenre.slice(1)}
            </button>
        )
    }

    return (
        <div className='buttons has-addons'>
        {genreButton('fiction')}
        {genreButton('nonfiction')}
        </div>
    )
}

function mapStateToProps(state: state): { genre: string } {
    return { genre: state.filters.genre }
}

export default connect(mapStateToProps, { setGenre, setDates, setAuthor, fetchBooks })(GenreButtons)