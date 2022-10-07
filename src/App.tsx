import { connect } from 'react-redux'

import Header from './components/Header'
import GenreButtons from './components/GenreButtons'
import DateButtons from './components/DateButtons'
import AuthorButton from './components/AuthorButton'
import BooksDisplay from './components/BooksDisplay'
import { state } from './types'

function App({author}: {author: string}): JSX.Element {
  return (
    <>
    <Header />

    <main className='section'>
      <GenreButtons />

        {author === '' ?
          <DateButtons /> : 
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