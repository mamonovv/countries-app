export interface ICountry {
    flags: Flags
    name: CountryName
    region: string
    continent: string
    population: number,
    capital: string
}

interface CountryName {
    common: string,
    official: string
}

interface Flags {
    png: string,
    svg: string
}
