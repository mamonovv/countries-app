import React from 'react';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classes from './BackButton.module.scss'

const BackButton = () => {
    return (
        <button className={classes.button}>
            <FontAwesomeIcon icon={faArrowLeft}/>
            Back
        </button>
    );
};

export default BackButton;
