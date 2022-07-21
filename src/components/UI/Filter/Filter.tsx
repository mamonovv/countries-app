import React, {FC, useEffect, useRef, useState} from 'react';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classes from './Filter.module.scss'
import {useDebounce} from "../../../hooks/useDebounce";
import {useHandleClickOutside} from "../../../hooks/useHandleClickOutside";

interface FilterProps {
    search: (region: string) => void,
}

const Filter: FC<FilterProps> = ({search}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [filter, setFilter] = useState('Filter by Region')
    const filterRef = useRef(null)
    useHandleClickOutside(filterRef, (state: boolean) => setIsOpen(state))

    const debounced = useDebounce(filter);

    useEffect(() => {
        if (debounced !== 'Filter by Region') search(debounced)
    }, [debounced])

    const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    const chooseRegion = (region: string) => {
        setFilter(region)
        setIsOpen(false)
    }

    return (
        <div className={classes.wrapper} ref={filterRef}>
            <div className={classes.head} onClick={() => setIsOpen(!isOpen)}>
                {filter}
                <FontAwesomeIcon icon={faChevronDown}/>
            </div>
            {isOpen && <div className={classes.body}>
                {regions.map(region => (
                    <div key={region} onClick={() => chooseRegion(region)} className={classes.body__item}>{region}</div>
                ))}
            </div>
            }
        </div>
    );
};

export default Filter;
