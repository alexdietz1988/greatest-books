import { combineReducers } from 'redux'
import filterReducer from './filterReducer'
import bookReducer from './bookReducer'

export default combineReducers({ 
    filters: filterReducer,
    books: bookReducer
})