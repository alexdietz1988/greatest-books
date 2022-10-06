function Form(props: any) {
    const centuryButtons = []
    const decadeButtons = []
    const yearButtons = []
    const cutoff = 1500
    const currentYear = new Date().getFullYear()
    const firstYearOfCentury = Math.floor(props.dates.start/100) * 100
    const firstYearOfDecade = Math.floor(props.dates.start/10) * 10

    for (let i = cutoff; i < 2100; i += 100) {
      const selected = props.dates.start >= i && props.dates.end <= i + 99
      centuryButtons.push(
        <button
          key={i}
          className={selected ? 'button is-link' : 'button'}
          onClick={() => selected ?
            props.setDates(props.defaultDates) :
            props.setDates({start: i, end: i + 99})}
        >
          {i}s
        </button>)
    }
    
    for (let i = firstYearOfCentury; i < firstYearOfCentury + 99 && i <= currentYear; i += 10) {
      const selected = props.dates.start >= i && props.dates.end <= i + 9
      decadeButtons.push(
        <button key={i}
          className={selected ? 'button is-link' : 'button'}
          onClick={() => selected ?
            props.setDates({start: firstYearOfCentury, end: firstYearOfCentury + 99}) :
            props.setDates({start: i, end: i + 9})}>
          {i}s
        </button>)
    }
  
    for (let i = firstYearOfDecade; i < firstYearOfDecade + 10 && i <= currentYear; i++) {
      const selected = props.dates.start === i && props.dates.end === i
      yearButtons.push(
        <button
          key={i}
          className={selected ? 'button is-link' : 'button'}
          onClick={() => selected ? 
            props.setDates({start: firstYearOfDecade, end: firstYearOfDecade + 9}) :
            props.setDates({start: i, end: i})}
        >
          {i}
        </button>)
    }

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
          {centuryButtons}
        </div>

        { props.dates.start > cutoff ?
          <div className='buttons has-addons'>
          {decadeButtons}
          </div>
          : null  
        }
        
        { props.dates.end - props.dates.start <= 10 ?
          <div className='buttons has-addons'>
          {yearButtons}
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