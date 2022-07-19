import React, {useEffect, useState} from 'react';
import classes from "./Home.module.scss"
import Input from "../../components/UI/Input/Input";
import Filter from "../../components/UI/Filter/Filter";
import List from "../../components/List/List";
import CountriesService from "../../services/CountriesService";
import {useFetching} from "../../hooks/useFetching";
import {ICountry} from "../../types/ICountry";
import {getFromLocalStorage, setInLocalStorage} from "../../helpers/localStorage";

const LS_COUNTRIES = 'LS_COUNTRIES'

const Home = () => {

    const [countries, setCountries] = useState<ICountry[]>([]);

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
        const c = getFromLocalStorage(LS_COUNTRIES)
        setCountries(c)
        if (c.length === 0) fetchCountries()
    }, [])

    return (
        <div>
            <div className={classes.search}>
                <Input search={fetchCountriesByName}/>
                <Filter search={fetchCountriesByRegion}/>
            </div>
            {isCountriesLoading || isCountriesByNameLoading || isCountriesByRegionLoading
                ? <div className={classes.loading}>Loading...</div>
                : countriesByNameError !== '' && countriesByRegionError !== '' && countriesError !== ''
                    ? <div className={classes.loading}>There is no countries with that name. Try again!</div>
                    : <List countries={countries}/>
            }
        </div>
    );
};

export default Home;
