import { combineReducers } from 'redux'
import { SET_GENRE, SET_AUTHOR, SET_DATES } from '../actions/types'
import { dates, defaultDates, book } from '../types'
import fiction from '../data/fiction'
import nonfiction from '../data/nonfiction'

const defaultState = {
    genre: 'fiction',
    author: '',
    dates: defaultDates,
    books: fiction
}

type data = {
    genre: string,
    author: string,
    dates: dates,
    books: book[]
}

function dataReducer(state = defaultState, action: {type: string, payload: string | dates}): data {
    const newState: data = { ...state }

    if (typeof action.payload === 'string') {
        if (action.type === SET_GENRE) {
            newState.genre = action.payload
        } else if (action.type === SET_AUTHOR) {
            newState.author = action.payload
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
        if (
            (inDateRange || datesAreDefault) &&
            (newState.author === '' || book.author === newState.author)
        ) {
            newBooks.push(book)
        }
    }

    return newState
}

export default combineReducers({ data: dataReducer })