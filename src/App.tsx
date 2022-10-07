import { connect } from 'react-redux'

import GenreButtons from './components/GenreButtons'
import DateButtons from './components/DateButtons'
import AuthorButton from './components/AuthorButton'
import BooksDisplay from './components/BooksDisplay'
import { state } from './types'

function App({author}: {author: string}): JSX.Element {
  return (
    <>
    <div className='section pb-0'>
      <p className='title pb-2'>Explore the Greatest Books</p>
      <p className='subtitle'>Created by <a href="http://alexdietz.com">Alex Dietz</a>, based on <a href="https://thegreatestbooks.org/">The Greatest Books</a> by Shane Sherman</p>
    </div>

    <main className='section'>
      {author === '' ? 
        <>
        <DateButtons />
        <GenreButtons />
        </> :
        <AuthorButton />
      }
      <BooksDisplay />
      <p className='is-size-6 has-text-grey'>Book icons created by <a className='has-text-info' href="https://www.flaticon.com/free-icons/book" title="book icons">Freepik - Flaticon</a></p>
    </main>
    </>
  )
}

function mapStateToProps(state: state): {author: string} {
  return { author: state.data.author }
}

export default connect(mapStateToProps)(App)