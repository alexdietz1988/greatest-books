import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux'
import { search, setDates } from '../actions'
import { dates, defaultDates } from '../types'

type props = {
    search: (query: string) => void,
    setDates: (dates: dates) => void
}

function Search({ search, setDates }: props): JSX.Element {
    function onSubmit(formValues: {query: string}): void {
        setDates(defaultDates)
        search(formValues.query)
    }
    return (
        <Form 
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div className='field mb-5' style={{"maxWidth": "500px"}}>
                        <div className='control'>
                            <Field name='query' className='input is-expanded' type='text' component='input' placeholder='Search by title or author' />
                        </div>
                    </div>
                </form>
            )}
        />
    )
}

export default connect(null, { search, setDates })(Search)