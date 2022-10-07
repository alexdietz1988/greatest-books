import { connect } from 'react-redux'

import DateButtons from './DateButtons'
import { dates, cutoff, defaultDates, state } from '../types'
import { setGenre, setDates, setAuthor } from '../actions'

type props = { 
  genre: string,
  dates: dates,
  author: string,
  setGenre: (genre: string) => void,
  setDates: (dates: dates) => void,
  setAuthor: (author: string) => void,
}

function Form({genre, dates, author, setGenre, setDates, setAuthor}: props): JSX.Element {
  const earlierButton: JSX.Element = (
    <button
      className={dates.end < cutoff ? 'button is-link' : 'button'}
      onClick={() => {
        const newDates = dates.end < cutoff ? defaultDates : {start: -700, end: cutoff - 1}
        setDates(newDates)
        }}>
      Earlier
    </button>
  )

  const selectDateRange = (range: number): JSX.Element => (
      <div className='buttons has-addons'>
        { range === 100 ? earlierButton : null }
        <DateButtons range={range} />
      </div>
  )

  return (
      <>
      {/* SELECT GENRE */}
      <div className='buttons has-addons'>
        {['fiction', 'nonfiction'].map((thisGenre: string): JSX.Element => (
          <button
              key={thisGenre}
              className={genre === thisGenre ? 'button is-success' : 'button'}
              onClick={() => setGenre(thisGenre)}
            >
            {thisGenre[0].toUpperCase() + thisGenre.slice(1)}
          </button>
        )
        )}
      </div>

      {/* SELECT CENTURY / DECADE / YEAR */}
      {selectDateRange(100)}
      { dates.start >= cutoff ? selectDateRange(10) : null }
      { dates.end - dates.start <= 10 ? selectDateRange(1) : null }

      {/* SHOW SELECTED AUTHOR */}
      {author === '' ?
        null :
        <div className='buttons has-addons'>
          <button className='button is-info' onClick={() => setAuthor('')}>
            {author}
            <button className='delete is-small ml-1'></button>
          </button>
        </div>
      }
      </>
  )
}

function mapStateToProps(state: state): {genre: string, author: string, dates: dates} {
  return {
    genre: state.data.genre,
    author: state.data.author,
    dates: state.data.dates
  }
}

export default connect(mapStateToProps, { setGenre, setDates, setAuthor })(Form)