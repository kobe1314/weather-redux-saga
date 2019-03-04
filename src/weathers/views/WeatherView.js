import React, { Component } from 'react';
import {SUCCESS,FAIL,LOADING} from '../status';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentWillUpdate() {
        console.log('componentWillUpdate:'+ this.props.weather);
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextProps)
         return true;
    }
    render() {
        const { cityName, weather, lowestTemp, highestTemp, status, error } = this.props;
        
        if (status === LOADING) {
            return (<div>Don't have the data now!</div>)
        }

        if (status === SUCCESS) {
            return <div>
            {cityName} {weather} the lowest temperature {lowestTemp} the highest temperature
            {highestTemp}
          </div>
        }

        if (status === FAIL) {
            return (<div>Fetch api fail, this is error info {error}</div>)
        }

        return <div>
            Fetch Weather
        </div>
    
    }
}

export default View;