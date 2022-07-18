import React, {FC} from 'react';
import classes from './ListItem.module.scss'
import {ICountry} from "../../types/ICountry";
import {useNavigate} from "react-router-dom";

interface ListItemProps {
    country: ICountry
}

const ListItem: FC<ListItemProps> = ({country}) => {
    const navigator = useNavigate()

    return (
        <div className={classes.card} onClick={() => navigator(`/detail/${country.name.official}`)}>
            <div className={classes.flagHolder}>
                <img className={classes.card__flag}
                     src={country.flags.svg}
                     alt={country.name.official}/>
            </div>

            <div className={classes.card__text}>
                <h4 className={classes.card__header}>{country.name.official}</h4>
                <div className={classes.card__desc}>
                    <p><span>Population:</span> {country.population}</p>
                    <p><span>Region:</span> {country.region}</p>
                    <p><span>Capital:</span> {country.capital}</p>
                </div>
            </div>
        </div>
    );
};

export default ListItem;
