import React from 'react';
import classes from './ListItem.module.scss'

const ListItem = () => {
    return (
        <div>
            <img className={classes.card__flag}
                 src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
                 alt=""/>
            <div>
                <h4>Germany</h4>
                <div>
                    <p><span>Population:</span> 81.770.900</p>
                    <p><span>Region:</span> Europe</p>
                    <p><span>Capital:</span> Berlin</p>
                </div>
            </div>
        </div>
    );
};

export default ListItem;
