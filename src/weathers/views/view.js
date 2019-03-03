import React, { Component } from 'react';
import {SUCCESS,FAIL,LOADING} from '../status';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const { cityName, weather, lowestTemp, highestTemp, state, error } = this.props;
        
        if (state === LOADING) {
            return (<div>Don't have the data now!</div>)
        }

        if (state === SUCCESS) {
            return <div>
            {cityName} {weather} the lowest temperature {lowestTemp} the highest temperature
            {highestTemp}
          </div>
        }

        if (state === FAIL) {
            return (<div>Fetch api fail, this is error info {error}</div>)
        }

        return <div>
            Fetch Weather
        </div>
    
    }
}

export default View;