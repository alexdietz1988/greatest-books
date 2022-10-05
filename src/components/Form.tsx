function Form(props: any) {
    const centuryButtons = []
    const decadeButtons = []
    const yearButtons = []

    for (let i = 1700; i < 2100; i += 100) {
      centuryButtons.push(
        <button key={i} className='button' onClick={() => props.setDates({start: i, end: i + 99})}>
          {i}s
        </button>)
    }
  
    let firstYearOfCentury = Math.floor(props.dates.start/100) * 100
    for (let i = firstYearOfCentury; i < firstYearOfCentury + 99 && i < 2030; i += 10) {
      decadeButtons.push(
        <button key={i} className='button' onClick={() => props.setDates({start: i, end: i + 9})}>
          {i}s
        </button>)
    }
  
    let firstYearOfDecade = Math.floor(props.dates.start/10) * 10
    for (let i = firstYearOfDecade; i < firstYearOfDecade + 10 && i < 2023; i++) {
      yearButtons.push(
        <button key={i} className='button' onClick={() => props.setDates({start: i, end: i})}>
          {i}
        </button>)
    }

    return (
        <>
        <div className='buttons has-addons'>
        <button className='button' onClick={() => props.setDates({start: -700, end: 1699})}>Earlier</button>
        {centuryButtons}
        </div>

        { props.dates.start > 1699 ?
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

        <div className='buttons has-addons'>
          {props.author === '' ?
            <button className='button'>All Authors</button> :
            <button className='button is-info' onClick={() => props.setAuthor('')}>
              {props.author}
              <button className='delete is-small ml-1'></button>
            </button>
          }
          
          <button className='button' onClick={() => props.setDates(props.defaultDates)}>All Dates</button>
        </div>
        </>
    )
}

export default Form