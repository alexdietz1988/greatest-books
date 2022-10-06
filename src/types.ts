export type dates = {
    start: number,
    end: number
}

export const cutoff: number = 1500

export const defaultDates: dates = {
    start: -700,
    end: new Date().getFullYear()
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
        books: book[]
    }
}