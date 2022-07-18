import React, {FC} from 'react';
import classes from './List.module.scss'
import ListItem from "../ListItem/ListItem";
import {ICountry} from "../../types/ICountry";

interface ListProps {
    countries: ICountry[]
}

const List: FC<ListProps> = ({countries}) => {
    return (
        <div className={classes.container}>
            {countries.map((country) => (
                <ListItem key={country.name.official} country={country}/>
            ))}
        </div>
    );
};

export default List;
