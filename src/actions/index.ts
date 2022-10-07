import { SET_AUTHOR, SET_DATES, SET_GENRE, SEARCH } from './types'
import { dates } from '../types'

export function setAuthor(author: string): {type: string, payload: string} {
    return {type: SET_AUTHOR, payload: author}
}

export function setDates(dates: dates): {type: string, payload: dates} {
    return {type: SET_DATES, payload: dates}
}

export function setGenre(genre: string): {type: string, payload: string} {
    return {type: SET_GENRE, payload: genre}
}

export function search(query: string): {type: string, payload: string} {
    return {type: SEARCH, payload: query}
}