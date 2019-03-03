import React, { PureComponent } from 'react';

class CitySelector extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    fetchWeatherData = (ev) => {
        debugger;
        const cityCode = ev.target.value;
        this.props.onSelectCity(cityCode);
    }
    render() {
        return (
            <select onChange={this.fetchWeatherData}>
                {
                    Object.keys(CITY_CODE).map(
                        (cityName) => <option key={cityName} value={CITY_CODE[cityName]}>{cityName}</option>
                    )
                }
            </select>
        );
    }
}

const CITY_CODE = {
    '北京': 101010100,
    '上海': 101020100,
    '广州': 101280101,
    '深圳': 101280601
}

export default CitySelector;