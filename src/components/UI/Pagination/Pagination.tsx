import React, {FC} from 'react';
import classes from './Pagination.module.scss'

interface PaginationProps {
    nextPage: () => void
    prevPage: () => void
    currentPage: number
    totalPages: number
}

const Pagination: FC<PaginationProps> = ({nextPage, prevPage, totalPages, currentPage}) => {
    return (
        <div className={classes.container}>
            <button onClick={prevPage}>Prev</button>
            <div>{currentPage} / {totalPages}</div>
            <button onClick={nextPage}>Next</button>
        </div>
    );
};

export default Pagination;
