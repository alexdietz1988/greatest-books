import { SET_AUTHOR, SET_GENRE, SET_DATES, SET_QUERY } from '../actions/types'
import { dates, defaultDates, filters } from '../types'

const defaultState: filters = {
    genre: 'fiction',
    dates: defaultDates,
    author: '',
    query: ''
}

function filterReducer(state = defaultState, action: {type: string, payload: string | dates}): filters {
    const newState: filters = { ...state }

    if (typeof action.payload === 'string') {
        switch (action.type) {
            case SET_GENRE:
                newState.genre = action.payload
                break
            case SET_AUTHOR:
                newState.author = action.payload
                break
            case SET_QUERY:
                newState.query = action.payload
        }

    } else if (action.type === SET_DATES) {
        newState.dates = action.payload
    }
    
    return newState
}

export default filterReducer