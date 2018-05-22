import React, { Component } from 'react';

import logo from '../../assets/img/space_x_logo_bw_centered.png';
import FilterButtons from '../../components/FilterButtons/FilterButtons';

class LaunchesList extends Component {
    state = {
        allLaunches: null
    };

    componentDidMount() {
        fetch('https://api.spacexdata.com/v2/launches/all')
        .then(res => res.json())
        .then(data => this.setState({ allLaunches: data }))
        .catch(err => console.error(err));
    }

    render() {
        const { allLaunches } = this.state;
        return (
            <div className="launches-list">
                <img src={logo} alt="SpaceX logo" />
                <p>Launches 2018</p>
                {allLaunches ? <FilterButtons allLaunches={allLaunches} /> : <div>Loading</div> }
            </div>
        );
    }
}

export default LaunchesList;