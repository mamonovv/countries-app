import React, {useState} from 'react';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classes from './Filter.module.scss'

const Filter = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [filter, setFilter] = useState('Filter by Region')

    const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    const chooseRegion = (region: string) => {
        setFilter(region)
        setIsOpen(false)
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.head} onClick={() => setIsOpen(!isOpen)}>
                {filter}
                <FontAwesomeIcon icon={faChevronDown}/>
            </div>
            {isOpen && <div className={classes.body}>
                {regions.map(region => (
                    <div onClick={() => chooseRegion(region)} className={classes.body__item}>{region}</div>
                ))}
            </div>
            }
        </div>
    );
};

export default Filter;
