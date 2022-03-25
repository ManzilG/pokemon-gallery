import './App.css';
import TopNav from "./components/TopNav/TopNav";
import HomePage from "./components/HomePage/HomePage";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import * as PropTypes from "prop-types";
import CoreText from "./components/CoreText/CoreText";

class Item extends React.Component {
    render() {
        return null;
    }
}

Item.propTypes = {children: PropTypes.node};

function App() {
  return (
    <div className="App">
        <CoreText text="POKEMON PINTEREST"/>
        <TopNav/>
    </div>
  );
}

export default App;
