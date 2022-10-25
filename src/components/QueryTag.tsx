import { connect } from 'react-redux'
import { state } from '../types'
import { setAuthor, setQuery, fetchBooks } from '../actions'

type props = { 
  author: string,
  query: string
  setAuthor: (author: string) => void,
  setQuery: (author: string) => void,
  fetchBooks: () => void
}

function QueryTag({ author, query, setAuthor, setQuery, fetchBooks }: props): JSX.Element {
  return (
    <div className='buttons has-addons'>
      <button className='button is-info' onClick={() => {
        setAuthor('')
        setQuery('')
        fetchBooks()
        }}>
        {author !== '' ? author : query}
        <button className='delete is-small ml-1'></button>
      </button>
    </div>
  )
}

function mapStateToProps(state: state): {author: string, query: string} {
  return { 
    author: state.filters.author,
    query: state.filters.query
   }
}

export default connect(mapStateToProps, { setAuthor, setQuery, fetchBooks })(QueryTag)