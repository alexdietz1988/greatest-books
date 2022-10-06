function DateButtons(props: any) {
    const buttons = []
    let contextSize = props.range * 10
    let startDate = Math.floor(props.dates.start / contextSize) * contextSize
    let endDate = startDate + contextSize - 1
    let deselectDates = {start: startDate, end: endDate}

    if (props.range === 100) {
        startDate = props.cutoff
        endDate = new Date().getFullYear()
        deselectDates = props.defaultDates
    }

    for (let i = startDate; i < endDate; i += props.range) {
        const selected = props.dates.start >= i && props.dates.end <= i + props.range - 1
        buttons.push(
            <button
            key={i}
            className={selected ? 'button is-link' : 'button'}
            onClick={() => selected ?
                props.setDates(deselectDates) :
                props.setDates({start: i, end: i + props.range - 1})}
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

export default DateButtons