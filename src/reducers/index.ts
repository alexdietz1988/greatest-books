import { combineReducers } from 'redux'
import { SET_GENRE, SET_AUTHOR, SET_DATES } from '../actions/types'
import { dates, defaultDates, state, book } from '../types'
import fiction from '../data/fiction'
import nonfiction from '../data/nonfiction'

const defaultState: state = {
    data: {
        genre: 'fiction',
        author: '',
        dates: defaultDates,
        books: fiction
    }
}

function dataReducer(state: state = defaultState, action: {type: string, payload: string | dates}): state {
    const newState: state = { ...state }
    const data = newState.data

    if (typeof action.payload === 'string') {
        if (action.type === SET_GENRE) {
            data.genre = action.payload
        } else if (action.type === SET_AUTHOR) {
            data.author = action.payload
        }

    } else if (action.type === SET_DATES) {
        data.dates = action.payload
    }

    const allBooks: book[] = data.genre === 'fiction' ? fiction : nonfiction
    const newBooks: book[] = []

    for (let i = 0; i < allBooks.length && newBooks.length < 100; i++) {
        const book: book = allBooks[i]
        const inDateRange: boolean = (
            book.year >= data.dates.start &&
            book.year <= data.dates.end
        )
        const datesAreDefault: boolean = (
            data.dates.start === defaultDates.start &&
            data.dates.end === defaultDates.end
        )
        if (
            (inDateRange || datesAreDefault) &&
            (data.author === '' || book.author === data.author)
        ) {
            newBooks.push(book)
        }
    }

    return newState
}

export default combineReducers({
    data: dataReducer
})