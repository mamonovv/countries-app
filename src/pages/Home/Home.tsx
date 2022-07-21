import React, {useEffect, useState} from 'react';
import classes from "./Home.module.scss"
import Input from "../../components/UI/Input/Input";
import Filter from "../../components/UI/Filter/Filter";
import List from "../../components/List/List";
import CountriesService from "../../services/CountriesService";
import {useFetching} from "../../hooks/useFetching";
import {ICountry} from "../../types/ICountry";
import {getFromLocalStorage, setInLocalStorage} from "../../helpers/localStorage";
import Pagination from "../../components/UI/Pagination/Pagination";

const LS_COUNTRIES = 'LS_COUNTRIES'

const Home = () => {
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [currentCountries, setCurrentCountries] = useState<ICountry[]>([])
    const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([])
    const [inputValue, setInputValue] = useState('')

    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(8)

    const getTotalPages = () => Math.ceil(filteredCountries.length / countriesPerPage)

    const [fetchCountries, isCountriesLoading, countriesError] = useFetching(
        async () => {
            const response = await CountriesService.getAll();
            setCountries(response.data)
            setFilteredCountries(response.data)
            setInLocalStorage(LS_COUNTRIES, response.data)
        }
    )

    const [fetchCountriesByRegion, isCountriesByRegionLoading, countriesByRegionError] = useFetching(
        async (region: string) => {
            setInputValue('')
            if (region === 'All') {
                const c = getFromLocalStorage(LS_COUNTRIES)
                setFilteredCountries(c);
                setCountries(c)
                return
            }
            const response = await CountriesService.getByRegion(region)
            setCountries(response.data)
            setFilteredCountries(response.data)
        }
    )

    useEffect(() => {
        if (window.innerWidth > 1200) setCountriesPerPage(8)
        else if (window.innerWidth > 800) setCountriesPerPage(6)
        else if (window.innerWidth > 550) setCountriesPerPage(4)
        else setCountriesPerPage(2)
        const c = getFromLocalStorage(LS_COUNTRIES)
        setCountries(c)
        setFilteredCountries(c)
        if (c.length === 0) fetchCountries()
        setInputValue('')
    }, [])

    useEffect(() => {
        const indexOfLastCountry = currentPage * countriesPerPage;
        const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
        setCurrentCountries(filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry))
    }, [filteredCountries, currentPage])

    const handleNextPage = () => {
        currentPage === getTotalPages() ? setCurrentPage(1) : setCurrentPage(currentPage + 1)
    }

    const handlePrevPage = () => {
        currentPage === 1 ? setCurrentPage(getTotalPages()) : setCurrentPage(currentPage - 1)
    }
    const handleInput = (name: string) => {
        setFilteredCountries(countries.filter((country) => country.name.official.toLowerCase().includes(name.toLowerCase())))
        setCurrentPage(1);
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.search}>
                <Input search={handleInput} inputValue={inputValue} setInputValue={setInputValue}/>
                <Filter search={fetchCountriesByRegion}/>
            </div>
            {isCountriesLoading || isCountriesByRegionLoading
                ? <div className={classes.loading}>Loading...</div>
                : countriesByRegionError !== '' || filteredCountries.length === 0
                    ? <div className={classes.loading}>There is no countries with that name. Try again!</div>
                    : <>
                        <List countries={currentCountries}/>
                        <Pagination nextPage={handleNextPage} prevPage={handlePrevPage} currentPage={currentPage}
                                    totalPages={getTotalPages()}/>
                    </>
            }
        </div>

    );
};

export default Home;
