import axios from 'axios'

export const backend = axios.create({ baseURL: 'http://localhost:4000/' })

export const cutoff: number = 1500

export const defaultDates: dates = {
    start: -700,
    end: new Date().getFullYear()
}

export type dates = {
    start: number,
    end: number
}

export type book = {
    rank: number,
    title: string,
    author: string,
    year: number
}

export type state = {
    data: {
        genre: string,
        author: string,
        dates: dates,
        query: string
        books: book[]
    }
}

export type query = {
    genre: string,
    dates: dates,
    author: string,
    queryString: string
}