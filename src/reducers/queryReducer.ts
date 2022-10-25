import { SET_AUTHOR, SET_GENRE, SET_DATES, SEARCH } from '../actions/types'
import { dates, defaultDates, query } from '../types'
import { fetchBooks } from '../actions'

const defaultState = {
    genre: 'fiction',
    dates: defaultDates,
    author: '',
    queryString: ''
}

function queryReducer(state = defaultState, action: {type: string, payload: string | dates}): query {
    const newState: query = { ...state }

    if (typeof action.payload === 'string') {
        switch (action.type) {
            case SET_GENRE:
                newState.genre = action.payload
                break
            case SET_AUTHOR:
                newState.author = action.payload
                break
            case SEARCH:
                newState.queryString = action.payload
        }

    } else if (action.type === SET_DATES) {
        newState.dates = action.payload
    }
    fetchBooks(newState)
    
    return newState
}

export default queryReducer