import { connect } from 'react-redux'
import { state } from '../types'
import { setAuthor, search } from '../actions'

type props = { 
  author: string,
  query: string
  setAuthor: (author: string) => void,
  search: (author: string) => void
}

function QueryTag({author, query, setAuthor, search}: props): JSX.Element {
  return (
    <div className='buttons has-addons'>
      <button className='button is-info' onClick={() => {
        setAuthor('')
        search('')
        }}>
        {author !== '' ? author : query}
        <button className='delete is-small ml-1'></button>
      </button>
    </div>
  )
}

function mapStateToProps(state: state): {author: string, query: string} {
  return { 
    author: state.data.author,
    query: state.data.query
   }
}

export default connect(mapStateToProps, { setAuthor, search })(QueryTag)