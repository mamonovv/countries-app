export interface ICountry {
    flags: Flags
    name: CountryName
    region: string
    continent: string
    population: number,
    capital: string
    subregion: string
    tld: string[]
    currencies: Currency[]
    languages: string[]
    borders: string[]
}

interface CountryName {
    common: string,
    official: string
}

interface Flags {
    png: string,
    svg: string
}

interface Currency {
    name: string,
    symbol: string
}
