import React from 'react';
import classes from "./Navbar.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon} from '@fortawesome/free-regular-svg-icons'
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigator = useNavigate()

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.container__logo} onClick={() => navigator('/')}>Where in the world?</div>
                <div className={classes.container__mode}>
                    <FontAwesomeIcon icon={faMoon}/>
                    Dark mode
                </div>
            </div>
        </div>
    );
};

export default Navbar;
