import React, {FC, useEffect, useState} from 'react';
import classes from './Input.module.scss'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDebounce} from "../../../hooks/useDebounce";

interface InputProps {
    search: (name: string) => void
}

const Input: FC<InputProps> = ({search}) => {
    const [inputValue, setInputCityValue] = useState('')
    const debounced = useDebounce(inputValue);

    useEffect(() => {
        search(debounced)
    }, [debounced])

    return (
        <div className={classes.wrapper}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.icon}/>
            <input value={inputValue} onChange={(e) => setInputCityValue(e.target.value)}
                   placeholder='Search for a country...' className={classes.input}/>
        </div>
    );
};

export default Input;
