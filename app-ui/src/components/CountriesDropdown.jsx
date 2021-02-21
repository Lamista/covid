import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/CountriesDropdown.css'

const CountriesDropdown = ({ countries, handleSelect }) => {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {window.location.pathname === "/app" ? "All countries" : (window.location.pathname).split("/")[2]}
            </button>
            <div className="dropdown-menu scrollable-menu" aria-labelledby="dropdownMenuButton">
                {countries.map((c) => {
                    return (
                        <button key={c} className="dropdown-item" onClick={handleSelect}>{c}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default CountriesDropdown;