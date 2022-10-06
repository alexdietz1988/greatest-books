import { connect } from 'react-redux'
import { cutoff, defaultDates, dates, state } from '../types'
import { setDates } from '../actions'

type props = {
    range: number,
    dates: dates,
    setDates: (dates: dates) => void
}

function DateButtons(props: props) {
    const buttons = []

    // If the selected decade is 1920, for example, then the decade buttons should props.range from 1900 to 1999
    const contextSize = props.range * 10 
    let contextStart = Math.floor(props.dates.start / contextSize) * contextSize
    let contextEnd = Math.min(contextStart + contextSize - 1, new Date().getFullYear())

    // If the user deselects the 1920s button, for example, then the date props.range should return to 1900-1999
    let deselectDates = {start: contextStart, end: contextEnd} 

    if (props.range === 100) {
        contextStart = cutoff
        deselectDates = defaultDates
        contextEnd = new Date().getFullYear()
    }

    for (let i = contextStart; i < contextEnd; i += props.range) {
        const selected = props.dates.start >= i && props.dates.end <= i + props.range - 1
        const newDates = selected ? deselectDates : {start: i, end: i + props.range - 1}
        buttons.push(
            <button
                key={i}
                className={selected ? 'button is-link' : 'button'}
                onClick={() => setDates(newDates)}
            >
            {props.range === 1 ? i : i + 's'}
            </button>)
    }

    return (
        <>
        {buttons}
        </>
    )
}

function mapStateToProps(state: state): {dates: dates} {
    return { dates: state.data.dates }
}

export default connect(mapStateToProps, { setDates })(DateButtons)