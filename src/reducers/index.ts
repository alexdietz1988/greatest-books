import { combineReducers } from 'redux'
import queryReducer from './queryReducer'
import bookReducer from './bookReducer'

export default combineReducers({ 
    query: queryReducer,
    books: bookReducer
})