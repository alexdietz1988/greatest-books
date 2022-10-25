import { FETCH_BOOKS } from '../actions/types'
import { book } from '../types'

function bookReducer(state: book[] = [], action: { type: string, payload: string | book[] }): book[] {
    if (action.type === FETCH_BOOKS && typeof action.payload !== 'string') {
        return action.payload
    }
    return state
}

export default bookReducer