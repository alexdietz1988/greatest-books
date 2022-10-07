import { combineReducers } from 'redux'
import { SET_AUTHOR, SET_GENRE, SET_DATES, SEARCH } from '../actions/types'
import { dates, defaultDates, book } from '../types'
import fiction from '../data/fiction'
import nonfiction from '../data/nonfiction'

const defaultState = {
    genre: 'fiction',
    dates: defaultDates,
    author: '',
    query: '',
    books: fiction
}

type data = {
    genre: string,
    dates: dates,
    author: string,
    query: string,
    books: book[]
}

function dataReducer(state = defaultState, action: {type: string, payload: string | dates}): data {
    const newState: data = { ...state }

    if (typeof action.payload === 'string') {
        switch (action.type) {
            case SET_GENRE:
                newState.genre = action.payload
                break
            case SET_AUTHOR:
                newState.author = action.payload
                break
            case SEARCH:
                newState.query = action.payload
        }

    } else if (action.type === SET_DATES) {
        newState.dates = action.payload
    }

    const allBooks: book[] = newState.genre === 'fiction' ? fiction : nonfiction
    const newBooks: book[] = []

    for (let i = 0; i < allBooks.length && newBooks.length < 100; i++) {
        const book: book = allBooks[i]
        const inDateRange: boolean = (
            book.year >= newState.dates.start &&
            book.year <= newState.dates.end
        )
        const datesAreDefault: boolean = (
            newState.dates.start === defaultDates.start &&
            newState.dates.end === defaultDates.end
        )
        const dateMatch: boolean = inDateRange || datesAreDefault
        const authorMatch: boolean = newState.author === '' || book.author === newState.author

        const emptyQuery: boolean = newState.query === ''
        const authorQueryMatch: boolean = book.author.toLowerCase().includes(newState.query.toLowerCase())
        const titleQueryMatch: boolean = book.title.toLowerCase().includes(newState.query.toLowerCase())
        const queryMatch = emptyQuery || (authorQueryMatch || titleQueryMatch)
        const match: boolean = (dateMatch && authorMatch) && queryMatch
        if (match) {
            newBooks.push(book)
        }
    }
    newState.books = newBooks

    return newState
}

export default combineReducers({ data: dataReducer })