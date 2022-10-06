import { combineReducers } from 'redux'
import { SET_GENRE, SET_AUTHOR, SET_DATES } from '../actions/types'
import { dates, defaultDates } from '../types'

function genreReducer(state: string = 'fiction', action: { type: string, payload: string }): string {
    return action.type === SET_GENRE ? action.payload : state
}

function authorReducer(state: string = '', action: { type: string, payload: string }): string {
    return action.type === SET_AUTHOR ? action.payload : state
}

function datesReducer(state: dates = defaultDates, action: { type: string, payload: dates}): dates {
    return action.type === SET_DATES? action.payload : state
}

export default combineReducers({
    genre: genreReducer,
    author: authorReducer,
    dates: datesReducer
})