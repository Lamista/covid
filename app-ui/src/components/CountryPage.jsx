import Axios from 'axios';
import React, { Component } from 'react';
import baseUrl from '../AppConfig';
import LineChart from './LineChart';
import PageTop from './PageTop';

class CountryPage extends Component {
    constructor() {
        super();
        this.state = {
            countries: [],
            chartData: {},
            countrySelected: ""
        }
    }

    componentDidMount = () => {
        Axios
            .get(`${baseUrl}/api/data/countries`)
            .then((res) => this.setState({ countries: res.data }))
            .catch((err) => console.log(err))

        Axios
            .get(`${baseUrl}/api/data/${this.props.countrySelected}`)
            .then((res) => this.setState({ chartData: res.data }))
            .then(() => console.log(this.state.chartData))
            .catch((err) => console.log(err))
    }

    handleSelect = (e) => {
        e.preventDefault();
        let countryName = e.target.innerHTML;
        this.props.history.push(`/${countryName}`)
        this.setState({ countrySelected: countryName })
    }

    render() {
        return (
            <div className="container text-center">
                <PageTop
                    countries={this.state.countries}
                    handleSelect={this.handleSelect}
                />
                <div className="mt-5">
                    <LineChart
                        chartData={this.state.chartData}
                    />
                </div>
            </div>
        )
    }
}

export default CountryPage;