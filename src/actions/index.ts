import { SET_AUTHOR, SET_DATES, SET_GENRE, SEARCH, FETCH_BOOKS } from './types'
import { dates, book, query, backend } from '../types'

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

export async function fetchBooks(query: query): Promise<{type: string, payload: book[]}> {
    console.log(query)
    const response = await backend.post('book', query )
    console.log(response.data)
    return { type: FETCH_BOOKS, payload: response.data }
}