import React from 'react';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classes from './Filter.module.scss'

const Filter = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.head}>
                Filter by Region
                <FontAwesomeIcon icon={faChevronDown}/>
            </div>
            <div className={classes.body}>
                <div className={classes.body__item}>Africa</div>
                <div className={classes.body__item}>America</div>
                <div className={classes.body__item}>Europe</div>
                <div className={classes.body__item}>Asia</div>
                <div className={classes.body__item}>Oceania</div>
            </div>
        </div>
    );
};

export default Filter;
