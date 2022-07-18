import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";

function App() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/detail/:name" element={<Detail/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App;
