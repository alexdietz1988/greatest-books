import { connect } from 'react-redux'

import Header from './components/Header'
import GenreButtons from './components/GenreButtons'
import DateButtons from './components/DateButtons'
import QueryTag from './components/QueryTag'
import BooksDisplay from './components/BooksDisplay'
import { state } from './types'
import Search from './components/Search'

function App({author, query}: {author: string, query: string}): JSX.Element {
  return (
    <>
    <Header />

    <main className='section'>
      <GenreButtons />
      

        {author === '' && query === '' ?
          <>
          <Search />
          <DateButtons />
          </> : 
          <QueryTag />
        }
      
      <BooksDisplay />
      <p className='is-size-6 has-text-grey'>Book icons created by <a className='has-text-info' href="https://www.flaticon.com/free-icons/book" title="book icons">Freepik - Flaticon</a></p>
    </main>
    </>
  )
}

function mapStateToProps(state: state): {author: string, query: string} {
  console.log(state.filters)
  return { 
    author: state.filters.author,
    query: state.filters.query
   }
}

export default connect(mapStateToProps)(App)