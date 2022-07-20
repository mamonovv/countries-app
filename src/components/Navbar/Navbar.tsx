import React, {useContext} from 'react';
import classes from "./Navbar.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon} from '@fortawesome/free-regular-svg-icons'
import {faMoon as faMoonSolid} from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from "react-router-dom";
import {ThemeContext} from "../../context/ThemeContext";

const Navbar = () => {
    const navigator = useNavigate()
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.container__logo} onClick={() => navigator('/')}>Where in the world?</div>
                <div className={classes.container__mode} onClick={() => toggleTheme()}>
                    {theme === 'light'
                        ? <>
                            <FontAwesomeIcon icon={faMoon}/>
                            Dark mode
                        </>
                        : <>
                            <FontAwesomeIcon icon={faMoonSolid}/>
                            Light mode
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;
