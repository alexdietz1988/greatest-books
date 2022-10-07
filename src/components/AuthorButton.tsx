import { connect } from 'react-redux'
import { state } from '../types'
import { setAuthor } from '../actions'

type props = { 
  author: string,
  setAuthor: (author: string) => void
}

function AuthorButton({author, setAuthor}: props): JSX.Element {
  return (
    <div className='buttons has-addons'>
      <button className='button is-info' onClick={() => setAuthor('')}>
        {author}
        <button className='delete is-small ml-1'></button>
      </button>
    </div>
  )
}

function mapStateToProps(state: state): {author: string} {
  return { author: state.data.author }
}

export default connect(mapStateToProps, { setAuthor })(AuthorButton)