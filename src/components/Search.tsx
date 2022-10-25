import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux'
import { setQuery, setDates, fetchBooks } from '../actions'
import { dates, defaultDates } from '../types'

type props = {
    setQuery: (query: string) => void,
    setDates: (dates: dates) => void,
    fetchBooks: () => void
}

function Search({ setQuery, setDates, fetchBooks }: props): JSX.Element {
    function onSubmit(formValues: {query: string}): void {
        setDates(defaultDates)
        setQuery(formValues.query)
        fetchBooks()
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

export default connect(null, { setQuery, setDates, fetchBooks })(Search)