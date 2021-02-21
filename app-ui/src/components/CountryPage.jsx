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
            chartData: {}
        }
    }

    componentDidMount = () => {
        Axios
            .get(`${baseUrl}/api/data/countries`)
            .then((res) => this.setState({ countries: res.data }))
            .catch((err) => console.log(err))

        Axios
            .get(`${baseUrl}/api/data/${(window.location.pathname).split("/")[2]}`)
            .then((res) => {
                this.setState({ chartData: res.data })
                console.log(res);
            })
            .catch((err) => console.log(err))
    }

    handleSelect = (e) => {
        e.preventDefault();
        let countryName = e.target.innerHTML;
        Axios
            .get(`${baseUrl}/api/data/${countryName}`)
            .then((res) => {
                this.setState({ chartData: res.data })
            })
            .catch((err) => console.log(err))
        this.props.history.push(`/${countryName}`)
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