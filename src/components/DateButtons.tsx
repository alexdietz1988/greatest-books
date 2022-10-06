import { cutoff, defaultDates, dates } from '../types'

type props = {
    range: number,
    dates: dates,
    setDates: (dates: dates) => void
}

function DateButtons({range, dates, setDates}: props) {
    const buttons = []

    // If the selected decade is 1920, for example, then the decade buttons should range from 1900 to 1999
    const contextSize = range * 10 
    let contextStart = Math.floor(dates.start / contextSize) * contextSize
    let contextEnd = Math.min(contextStart + contextSize - 1, new Date().getFullYear())

    // If the user deselects the 1920s button, for example, then the date range should return to 1900-1999
    let deselectDates = {start: contextStart, end: contextEnd} 

    if (range === 100) {
        contextStart = cutoff
        deselectDates = defaultDates
        contextEnd = new Date().getFullYear()
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
        <>
        {buttons}
        </>
    )
}

export default DateButtons