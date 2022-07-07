import React from 'react';
import classes from "./Home.module.scss"
import Input from "../../components/UI/Input/Input";
import Filter from "../../components/UI/Filter/Filter";


const Home = () => {
    return (
        <div>
            <div className={classes.search}>
                <Input/>
                <Filter/>
            </div>
        </div>
    );
};

export default Home;
