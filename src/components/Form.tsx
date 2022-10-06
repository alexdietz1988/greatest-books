import DateButtons from './DateButtons'

function Form(props: any) {
  const cutoff: number = 1500
  
  const earlierButton: JSX.Element = (
    <button
      className={props.dates.end < cutoff ? 'button is-link' : 'button'}
      onClick={() => {
        const newDates = props.dates.end < cutoff ? props.defaultDates : {start: -700, end: cutoff - 1}
        props.setDates(newDates)
        }}>
      Earlier
    </button>
  )

  const selectDateRange = (range: number): JSX.Element => (
      <div className='buttons has-addons'>
        { range === 100 ? earlierButton : null }
        <DateButtons cutoff={cutoff} defaultDates={props.defaultDates} dates={props.dates} setDates={props.setDates} range={range} />
      </div>
  )

  return (
      <>
      {/* SELECT GENRE */}
      <div className='buttons has-addons'>
        {['fiction', 'nonfiction'].map(genre => (
          <button
              className={props.genre === genre ? 'button is-success' : 'button'}
              onClick={() => props.setGenre(genre)}
            >
            {genre[0].toUpperCase() + genre.slice(1)}
          </button>
        )
        )}
      </div>

      {/* SELECT CENTURY / DECADE / YEAR */}
      {selectDateRange(100)}
      { props.dates.start >= cutoff ? selectDateRange(10) : null }
      { props.dates.end - props.dates.start <= 10 ? selectDateRange(1) : null }

      {/* SHOW SELECTED AUTHOR */}
      {props.author === '' ?
        null :
        <div className='buttons has-addons'>
          <button className='button is-info' onClick={() => props.setAuthor('')}>
            {props.author}
            <button className='delete is-small ml-1'></button>
          </button>
        </div>
      }
      </>
  )
}

export default Form