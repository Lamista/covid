import Axios from 'axios';
import React, { Component } from 'react';
import baseUrl from '../AppConfig';
import CountryChart from './CountryChart';
import PageTop from './PageTop';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            selectedCountry: "",
            countries: ["Lithuania", "Russia", "USA"]
        }
    }

    componentDidMount = () => {
        Axios
            .get(`${baseUrl}/data/countries`)
            .then((res) => this.setState({ countries: res.data }))
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div className="container text-center">
                <PageTop countries={this.state.countries} />
                <div className="mt-5">
                    <CountryChart />
                </div>
            </div>
        )
    }
}

export default HomePage;