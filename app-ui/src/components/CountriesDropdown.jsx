import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CountriesDropdown.css'

const CountriesDropdown = ({ countries }) => {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {window.location.pathname === "/app/" ? "All countries" : (window.location.pathname).split("/")[2]}
            </button>
            <div className="dropdown-menu scrollable-menu" aria-labelledby="dropdownMenuButton">
                {countries.map((c) => {
                    return (
                        <Link key={c} className="dropdown-item" to={`/${c}`}>{c}</Link>
                    )
                })}
            </div>
        </div>
    )
}

export default CountriesDropdown;