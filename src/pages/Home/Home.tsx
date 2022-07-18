import React, {useEffect, useState} from 'react';
import classes from "./Home.module.scss"
import Input from "../../components/UI/Input/Input";
import Filter from "../../components/UI/Filter/Filter";
import List from "../../components/List/List";
import CountriesService from "../../services/CountriesService";
import {useFetching} from "../../hooks/useFetching";
import {ICountry} from "../../types/ICountry";


const Home = () => {

    const [countries, setCountries] = useState<ICountry[]>([]);

    const [fetchCountries, isCountriesLoading, countriesError] = useFetching(
        async () => {
            const response = await CountriesService.getAll();
            setCountries(response.data)
        }
    )

    useEffect(() => {
        fetchCountries()
    }, [])

    return (
        <div>
            <div className={classes.search}>
                <Input/>
                <Filter/>
            </div>
            {isCountriesLoading
                ? <div className={classes.loading}>Loading...</div>
                : <List countries={countries}/>
            }
        </div>
    );
};

export default Home;
