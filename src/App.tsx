import React, {useContext} from 'react';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import {ThemeContext} from "./context/ThemeContext";

function App() {
    const {theme} = useContext(ThemeContext)

    return (
        <div className={'app'} data-theme={theme}>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/detail/:code" element={<Detail/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
