import React from 'react';
import classes from './Detail.module.scss'
import BackButton from "../../components/UI/BackButton/BackButton";
import Button from "../../components/UI/Button/Button";

const Detail = () => {
    return (
        <div className={classes.container}>
            <BackButton/>
            <div className={classes.content}>
                <img className={classes.content__flag}
                     src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
                     alt=""/>
                <div className={classes.content__desc}>
                    <div className={classes.content__header}>Belgium</div>
                    <div className={classes.content__info}>
                        <div className={classes.content__first}>
                            <p className={classes.content__row}><span>Native Name:</span> Belgium</p>
                            <p className={classes.content__row}><span>Population:</span> 11.2.23.4</p>
                            <p className={classes.content__row}><span>Region:</span> Europe</p>
                            <p className={classes.content__row}><span>Sub Region:</span> Western Europe</p>
                            <p className={classes.content__row}><span>Capital:</span> Brussels</p>
                        </div>
                        <div className={classes.content__second}>
                            <p className={classes.content__row}><span>Top Level Domain:</span> .be</p>
                            <p className={classes.content__row}><span>Currencies:</span> Euro</p>
                            <p className={classes.content__row}><span>Languages:</span> Dutch, French, German</p>
                        </div>
                    </div>
                    <div className={classes.content__border}>
                        Border Countries:
                        <Button/>
                        <Button/>
                        <Button/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
