export const getFromLocalStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key) ?? '[]')
}

export const setInLocalStorage = (key: string, data: any[]) => {
    localStorage.setItem(key, JSON.stringify(data))
}
