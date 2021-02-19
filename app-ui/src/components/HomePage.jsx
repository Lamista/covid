import React, { Component } from 'react';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            selectedCountry: "Lithuania"
        }
    }

    render() {
        return (
            <div>Country: {this.state.selectedCountry}</div>
        )
    }
}

export default HomePage;