import {
    FETCH_WEATHER_API
} from '../actiontype';
import CitySelector from './CitySelector';
import { connect } from 'react-redux';
const mapDispatherToProps = (dispatch) => {
    return {
        onSelectCity: (cityCode) => {
            dispatch({
                type: FETCH_WEATHER_API,
                cityCode
            })
        }
    }
}



export default connect(null,mapDispatherToProps )(CitySelector);