import React, {useEffect, useState} from 'react';
import classes from './Detail.module.scss'
import BackButton from "../../components/UI/BackButton/BackButton";
import Button from "../../components/UI/Button/Button";
import CountriesService from "../../services/CountriesService";
import {useNavigate, useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import {ICountry} from "../../types/ICountry";
import Loader from "../../components/UI/Loader/Loader";

const Detail = () => {
    const navigator = useNavigate()
    const [country, setCountry] = useState<ICountry>()
    const {code} = useParams()

    const [fetchCountry, isCountryLoading, countryError] = useFetching(
        async () => {
            const response = await CountriesService.getByCode(code ?? '');
            setCountry(response.data[0])
        }
    )

    useEffect(() => {
        fetchCountry()
    }, [code])

    const handleBack = () => {
        navigator('/')
    }

    const handleBordered = (name: string) => {
        navigator(`/detail/${name}`)
    }

    return (
        <div className={classes.container}>
            {isCountryLoading
                ? <div className={classes.loading}><Loader/></div>
                : <>
                    <BackButton onClick={handleBack}/>
                    <div className={classes.content}>
                        <img className={classes.content__flag}
                             src={country?.flags?.svg}
                             alt=""/>
                        <div className={classes.content__desc}>
                            <div className={classes.content__header}>{country?.name?.official}</div>
                            <div className={classes.content__info}>
                                <div className={classes.content__first}>
                                    <p className={classes.content__row}><span>Native Name:</span> {country?.name.common}
                                    </p>
                                    <p className={classes.content__row}><span>Population:</span> {country?.population}
                                    </p>
                                    <p className={classes.content__row}><span>Region:</span> {country?.region}</p>
                                    <p className={classes.content__row}><span>Sub Region:</span> {country?.subregion}
                                    </p>
                                    <p className={classes.content__row}><span>Capital:</span> {country?.capital}</p>
                                </div>
                                <div className={classes.content__second}>
                                    <p className={classes.content__row}>
                                        <span>Top Level Domain:</span> {country?.tld[0]}</p>
                                    <div className={classes.content__row}>
                                        <span>Currencies:</span> {Object.values(country?.currencies ?? []).map(curr => <>{curr.name}</>)}
                                    </div>
                                    <p className={classes.content__row}>
                                        <span>Languages:</span> {Object.values(country?.languages ?? []).map(lang => <>{lang}</>)}
                                    </p>
                                </div>
                            </div>
                            {country?.borders && <div className={classes.content__border}>
                                <div className={classes.content__name}>
                                    Border Countries:
                                </div>
                                <div className={classes.content__wrapper}>
                                    {country?.borders.map(border => (
                                        <Button onClick={handleBordered} key={border} border={border}/>
                                    ))}
                                </div>
                            </div>}
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default Detail;
