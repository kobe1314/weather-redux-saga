import { connect } from 'react-redux';
import View from './view';
const mapStateToProps = (state) => {
    const weatherData = state.weather;
    return {
        status: weatherData.status,
        cityName: weatherData.city,
        weather: weatherData.weather,
        lowestTemp: weatherData.temp1,
        highestTemp: weatherData.temp2
    }
}

export default connect(mapStateToProps)(View);
