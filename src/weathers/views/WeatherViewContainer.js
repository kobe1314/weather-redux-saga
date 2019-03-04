import { connect } from 'react-redux';
import View from './WeatherView';
const mapStateToProps = (state) => {
    const {status, weatherinfo, error } = state.weather;
    console.log(weatherinfo)
    return {
        status,
        cityName: weatherinfo.city,
        weather: weatherinfo.weather,
        lowestTemp: weatherinfo.temp1,
        highestTemp: weatherinfo.temp2,
        error
    }
}

export default connect(mapStateToProps)(View);
