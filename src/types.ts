export type dates = {
    start: number,
    end: number
}

export const cutoff: number = 1500

export const defaultDates: dates = {
    start: -700,
    end: new Date().getFullYear()
}