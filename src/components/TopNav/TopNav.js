import "./TopNav.css"
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import React, {useState} from "react";
import Gallery from "../Gallery/Gallery";

const TopNav = () => {

    const [favourites, setFavourites] = useState([]);
    const handleFavourites = (card) => {
        setFavourites([...favourites, card]);
    }

    return (
        <div>
            <BrowserRouter>
                <div className="topnav">
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                </div>
                <Routes>
                    <Route path="/" element={<HomePage handleLikeClick = {handleFavourites} favourites = {favourites}/>} />
                    <Route path="gallery" element={<Gallery data = {favourites} />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default TopNav;