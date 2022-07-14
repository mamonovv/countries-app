import React from 'react';
import classes from './ListItem.module.scss'

const ListItem = () => {
    return (
        <div className={classes.card}>
            <img className={classes.card__flag}
                 src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
                 alt=""/>
            <div className={classes.card__text}>
                <h4 className={classes.card__header}>Germany</h4>
                <div className={classes.card__desc}>
                    <p><span>Population:</span> 81.770.900</p>
                    <p><span>Region:</span> Europe</p>
                    <p><span>Capital:</span> Berlin</p>
                </div>
            </div>
        </div>
    );
};

export default ListItem;
