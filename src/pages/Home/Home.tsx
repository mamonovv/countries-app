import React from 'react';
import classes from "./Home.module.scss"
import Input from "../../components/UI/Input/Input";
import Filter from "../../components/UI/Filter/Filter";
import List from "../../components/List/List";


const Home = () => {
    return (
        <div>
            <div className={classes.search}>
                <Input/>
                <Filter/>
            </div>
            <List/>
        </div>
    );
};

export default Home;
