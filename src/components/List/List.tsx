import React from 'react';
import classes from './List.module.scss'
import ListItem from "../ListItem/ListItem";

const List = () => {
    return (
        <div className={classes.container}>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
        </div>
    );
};

export default List;
