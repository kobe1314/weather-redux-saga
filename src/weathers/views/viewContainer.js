import { connect } from 'react-redux';
import View from './view';
const mapStateToProps = (state) => {
    const {status, weatherinfo } = state.weather;
    console.log(weatherinfo)
    return {
        status,
        cityName: weatherinfo.city,
        weather: weatherinfo.weather,
        lowestTemp: weatherinfo.temp1,
        highestTemp: weatherinfo.temp2
    }
}

export default connect(mapStateToProps)(View);
