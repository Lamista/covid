import React from 'react';
import CountriesDropdown from './CountriesDropdown';

const PageTop = ({ countries }) => {
    return (
        <div>
            <h1 className="mt-5">COVID-19 statistics</h1>
            <h5>Cases and deaths by country</h5>
            <div className="row mt-5">
                <p className="col-6 text-right">Select country: </p>
                <div className="col-6 text-left">
                    <CountriesDropdown
                        countries={countries}
                    />
                </div>
            </div>
        </div>
    )
}

export default PageTop;