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
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(8)
    const totalPages = Math.ceil(countries.length / countriesPerPage)

    const [currentCountries, setCurrentCountries] = useState<ICountry[]>([])

    const [fetchCountries, isCountriesLoading, countriesError] = useFetching(
        async () => {
            const response = await CountriesService.getAll();
            setCountries(response.data)
            setInLocalStorage(LS_COUNTRIES, response.data)
        }
    )

    const [fetchCountriesByName, isCountriesByNameLoading, countriesByNameError] = useFetching(
        async (name: string) => {
            if (!name) return setCountries(getFromLocalStorage(LS_COUNTRIES));
            const response = await CountriesService.getByPartOfName(name)
            setCountries(response.data)
        }
    )

    const [fetchCountriesByRegion, isCountriesByRegionLoading, countriesByRegionError] = useFetching(
        async (region: string) => {
            if (region === 'All') return setCountries(getFromLocalStorage(LS_COUNTRIES));
            const response = await CountriesService.getByRegion(region)
            setCountries(response.data)
        }
    )

    useEffect(() => {
        if (window.innerWidth > 1200) setCountriesPerPage(8)
        else if (window.innerWidth > 800) setCountriesPerPage(6)
        else if (window.innerWidth > 550) setCountriesPerPage(4)
        else setCountriesPerPage(2)
        const c = getFromLocalStorage(LS_COUNTRIES)
        setCountries(c)
        if (c.length === 0) fetchCountries()
    }, [])

    useEffect(() => {
        const indexOfLastCountry = currentPage * countriesPerPage;
        const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
        setCurrentCountries(countries.slice(indexOfFirstCountry, indexOfLastCountry))
    }, [countries, currentPage])

    const handleNextPage = () => {
        currentPage === totalPages ? setCurrentPage(1) : setCurrentPage(currentPage + 1)
    }

    const handlePrevPage = () => {
        currentPage === 1 ? setCurrentPage(totalPages) : setCurrentPage(currentPage - 1)
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.search}>
                <Input search={fetchCountriesByName}/>
                <Filter search={fetchCountriesByRegion}/>
            </div>
            {isCountriesLoading || isCountriesByNameLoading || isCountriesByRegionLoading
                ? <div className={classes.loading}>Loading...</div>
                : countriesByNameError !== '' || countriesByRegionError !== ''
                    ? <div className={classes.loading}>There is no countries with that name. Try again!</div>
                    : <List countries={currentCountries}/>
            }
            <Pagination nextPage={handleNextPage} prevPage={handlePrevPage} currentPage={currentPage}
                        totalPages={totalPages}/>
        </div>

    );
};

export default Home;
