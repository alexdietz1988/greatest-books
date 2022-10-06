import DateButtons from './DateButtons'

function Form(props: any) {
  const cutoff = 1500

  return (
      <>
      <div className='buttons has-addons'>
        <button
          className={props.genre === 'fiction' ? 'button is-success' : 'button'}
          onClick={() => props.setGenre('fiction')}
        >
          Fiction
        </button>
        <button
          className={props.genre === 'nonfiction' ? 'button is-success' : 'button'}
          onClick={() => props.setGenre('nonfiction')}
        >
          Nonfiction
        </button>
      </div>

      <div className='buttons has-addons'>
        <button
          className={props.dates.end < cutoff ? 'button is-link' : 'button'}
          onClick={() => props.dates.end < cutoff ?
            props.setDates(props.defaultDates) :
            props.setDates({start: -700, end: cutoff - 1})}>
          Earlier
        </button>
        <DateButtons cutoff={cutoff} defaultDates={props.defaultDates} dates={props.dates} setDates={props.setDates} range={100} />
      </div>

      { props.dates.start >= cutoff ?
        <div className='buttons has-addons'>
        <DateButtons cutoff={cutoff} defaultDates={props.defaultDates} dates={props.dates} setDates={props.setDates} range={10} />
        </div>
        : null  
      }
      
      { props.dates.end - props.dates.start <= 10 ?
        <div className='buttons has-addons'>
        <DateButtons cutoff={cutoff} defaultDates={props.defaultDates} dates={props.dates} setDates={props.setDates} range={1} />
        </div>
        : null
      }

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