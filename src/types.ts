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
    publication_date: number
}

export type state = {
    filters: {
        genre: string,
        author: string,
        dates: dates,
        query: string
        
    },
    books: book[]
}

export type filters = {
    genre: string,
    dates: dates,
    author: string,
    query: string
}