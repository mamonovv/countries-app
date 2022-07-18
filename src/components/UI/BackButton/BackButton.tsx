import React, {FC} from 'react';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classes from './BackButton.module.scss'

interface BackButtonProps {
    onClick: () => void
}

const BackButton: FC<BackButtonProps> = ({onClick}) => {
    return (
        <button onClick={onClick} className={classes.button}>
            <FontAwesomeIcon icon={faArrowLeft}/>
            Back
        </button>
    );
};

export default BackButton;
