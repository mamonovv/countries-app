import axios from 'axios'
import {ICountry} from "../types/ICountry";

export default class CountriesService {
    static async getAll() {
        return await axios.get<ICountry[]>(
            'https://restcountries.com/v3.1/all',
        )
    }

    static async getByName(name: string) {
        return await axios.get<ICountry[]>(
            `https://restcountries.com/v3.1/name/${name}`, {
                params: {
                    fullText: true
                }
            }
        )
    }

    static async getByCode(code: string) {
        return await axios.get<ICountry[]>(
            `https://restcountries.com/v3.1/alpha/${code}`
        )
    }

    static async getByPartOfName(name: string) {
        return await axios.get<ICountry[]>(
            `https://restcountries.com/v3.1/name/${name}`
        )
    }

    static async getByRegion(region: string) {
        return await axios.get<ICountry[]>(
            `https://restcountries.com/v3.1/region/${region}`
        )
    }
}
