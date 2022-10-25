import { SET_AUTHOR, SET_DATES, SET_GENRE, SET_QUERY, FETCH_BOOKS } from './types'
import { dates, backend } from '../types'

export function setAuthor(author: string): {type: string, payload: string} {
    return {type: SET_AUTHOR, payload: author}
}

export function setDates(dates: dates): {type: string, payload: dates} {
    return {type: SET_DATES, payload: dates}
}

export function setGenre(genre: string): {type: string, payload: string} {
    return {type: SET_GENRE, payload: genre}
}

export function setQuery(query: string): {type: string, payload: string} {
    return {type: SET_QUERY, payload: query}
}

export const fetchBooks = () => async (dispatch: any, getState: any) => {
    const response = await backend.post('book', getState().filters )
    return dispatch({ type: FETCH_BOOKS, payload: response.data })
}