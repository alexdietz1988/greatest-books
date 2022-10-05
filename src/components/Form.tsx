function Form(props: any) {
    const centuryButtons = []
    const decadeButtons = []
    const yearButtons = []
    const cutoff = 1500

    function earlierButton() {
      let buttonClass = 'button'
      let clickHandler = () => props.setDates({start: -700, end: cutoff - 1})
      if (props.dates.end < cutoff) {
        buttonClass += ' is-link'
        clickHandler = () => props.setDates(props.defaultDates)
      }
      return (
        <button className={buttonClass} onClick={clickHandler}>
          Earlier
        </button>
      )
    }

    for (let i = cutoff; i < 2100; i += 100) {
      let buttonClass = 'button'
      let clickHandler = () => props.setDates({start: i, end: i + 99})
      if (props.dates.start >= i && props.dates.end <= i + 99) {
        buttonClass += ' is-link'
        clickHandler = () => {props.setDates(props.defaultDates)}
      }
      centuryButtons.push(
        <button key={i} className={buttonClass} onClick={clickHandler}>
          {i}s
        </button>)
    }
  
    let firstYearOfCentury = Math.floor(props.dates.start/100) * 100
    for (let i = firstYearOfCentury; i < firstYearOfCentury + 99 && i <= new Date().getFullYear(); i += 10) {
      let buttonClass = 'button'
      let clickHandler = () => props.setDates({start: i, end: i + 9})
      if (props.dates.start >= i && props.dates.end <= i + 9) {
        buttonClass += ' is-link'
        clickHandler = () => {props.setDates({start: firstYearOfCentury, end: firstYearOfCentury + 99})}
      }
      decadeButtons.push(
        <button key={i} className={buttonClass} onClick={clickHandler}>
          {i}s
        </button>)
    }
  
    let firstYearOfDecade = Math.floor(props.dates.start/10) * 10
    for (let i = firstYearOfDecade; i < firstYearOfDecade + 10 && i <= new Date().getFullYear(); i++) {
      let buttonClass = 'button'
      let clickHandler = () => { props.setDates({start: i, end: i}) }
      if (props.dates.start === i && props.dates.end === i) {
        buttonClass += ' is-link'
        clickHandler = () => {props.setDates({start: firstYearOfDecade, end: firstYearOfDecade + 9})}
      }
      yearButtons.push(
        <button key={i} className={buttonClass} onClick={clickHandler}>
          {i}
        </button>)
    }

    return (
        <>

        <div className='buttons has-addons'>
        <button className={props.genre === 'fiction'? 'button is-link' : 'button'} onClick={() => props.setGenre('fiction')}>Fiction</button>
        <button className={props.genre === 'nonfiction'? 'button is-link' : 'button'} onClick={() => props.setGenre('nonfiction')}>Nonfiction</button>
        </div>

        <div className='buttons has-addons'>
        {earlierButton()}
        {centuryButtons}
        </div>

        { props.dates.start > 1499 ?
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