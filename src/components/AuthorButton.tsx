import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { state } from '../types'
import { setAuthor } from '../actions'

type props = { 
  author: string,
  setAuthor: (author: string) => void
}

function AuthorButton({author, setAuthor}: props): JSX.Element {
  return (
    <div className='buttons has-addons'>
      <Link to='/'>
      <button className='button is-info' onClick={() => setAuthor('')}>
        {author}
        <button className='delete is-small ml-1'></button>
      </button>
      </Link>
    </div>
  )
}

function mapStateToProps(state: state): {author: string} {
  return { author: state.data.author }
}

export default connect(mapStateToProps, { setAuthor })(AuthorButton)