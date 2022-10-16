import { connect } from 'react-redux'
import { cutoff, defaultDates, dates, state } from '../types'
import { setDates } from '../actions'

type props = {
    dates: dates,
    setDates: (dates: dates) => void
}

function DateButtons({dates, setDates}: props): JSX.Element {
    const earlierButton: JSX.Element = (
        <button
            key='earlier'
            className={dates.end < cutoff ? 'button is-link' : 'button'}
            onClick={() => {
            const newDates = dates.end < cutoff ? defaultDates : {start: -700, end: cutoff - 1}
            setDates(newDates)
            }}>
          Earlier
        </button>
    )

    function dateButtons(range: number): JSX.Element {
        const buttons = []

        // If the selected decade is 1920, for example, then the decade buttons should range from 1900 to 1999
        const contextSize = range * 10 
        let contextStart = Math.floor(dates.start / contextSize) * contextSize
        let contextEnd = Math.min(contextStart + contextSize, new Date().getFullYear())

        // If the user deselects the 1920s button, for example, then the date range should return to 1900-1999
        let deselectDates = {start: contextStart, end: contextEnd} 

        if (range === 100) {
            contextStart = cutoff
            deselectDates = defaultDates
            contextEnd = new Date().getFullYear()
            buttons.push(earlierButton)
        }

        for (let i = contextStart; i < contextEnd; i += range) {
            const selected = dates.start >= i && dates.end <= i + range - 1
            const newDates = selected ? deselectDates : {start: i, end: i + range - 1}
            buttons.push(
                <button
                    key={i}
                    className={selected ? 'button is-link' : 'button'}
                    onClick={() => setDates(newDates)}
                >
                {range === 1 ? i : i + 's'}
                </button>)
        }

        return (
            <div className='buttons has-addons'>
            {buttons}
            </div>
        )
    }
    
    return (
        <>
        {dateButtons(100)}
        {dates.start >= cutoff ? dateButtons(10) : null}
        {dates.end - dates.start <= 10? dateButtons(1): null}
        </>
    )
}

function mapStateToProps(state: state): {dates: dates} {
    return { dates: state.data.dates }
}

export default connect(mapStateToProps, { setDates })(DateButtons)