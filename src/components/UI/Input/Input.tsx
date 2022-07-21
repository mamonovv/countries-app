import React, {FC, useEffect} from 'react';
import classes from './Input.module.scss'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDebounce} from "../../../hooks/useDebounce";

interface InputProps {
    search: (name: string) => void
    inputValue: string
    setInputValue: any
}

const Input: FC<InputProps> = ({search, setInputValue, inputValue}) => {
    const debounced = useDebounce(inputValue);

    useEffect(() => {
        search(debounced)
    }, [debounced])

    return (
        <div className={classes.wrapper}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.icon}/>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                   placeholder='Search for a country...' className={classes.input}/>
        </div>
    );
};

export default Input;
