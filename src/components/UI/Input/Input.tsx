import React from 'react';
import classes from './Input.module.scss'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Input = () => {
    return (
        <div className={classes.wrapper}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.icon}/>
            <input placeholder='Search for a country...' className={classes.input}/>
        </div>
    );
};

export default Input;
