import DateButtons from './DateButtons'
import { dates, cutoff, defaultDates } from '../types'

type props = { 
  genre: string,
  setGenre: (genre: string) => void,
  dates: dates,
  setDates: (dates: dates) => void,
  author: string,
  setAuthor: (author: string) => void,
}

function Form({ genre, setGenre, dates, setDates, author, setAuthor }: props): JSX.Element {
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
        <DateButtons dates={dates} setDates={setDates} range={range} />
      </div>
  )

  return (
      <>
      {/* SELECT GENRE */}
      <div className='buttons has-addons'>
        {['fiction', 'nonfiction'].map((thisGenre: string): JSX.Element => (
          <button
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

export default Form