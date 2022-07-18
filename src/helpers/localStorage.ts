export const getFromLocalStorage = (key: string) => {
    console.log('get ', JSON.parse(localStorage.getItem(key) ?? '[]'))
    return JSON.parse(localStorage.getItem(key) ?? '[]')
}

export const setInLocalStorage = (key: string, data: any[]) => {
    console.log('set ', JSON.stringify(data))
    localStorage.setItem(key, JSON.stringify(data))
}
