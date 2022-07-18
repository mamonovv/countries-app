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

    useEffect(() => {
        const c = getFromLocalStorage(LS_COUNTRIES)
        setCountries(c)
        if (c.length === 0) fetchCountries()
    }, [])

    return (
        <div>
            <div className={classes.search}>
                <Input/>
                <Filter/>
            </div>
            {isCountriesLoading || countries.length === 0
                ? <div className={classes.loading}>Loading...</div>
                : <List countries={countries}/>
            }
        </div>
    );
};

export default Home;
