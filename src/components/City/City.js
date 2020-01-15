import React from 'react'
import styles from './City.module.css'
import Loader from '../../components/Loader/Loader';
import {connect} from "react-redux";
import {fetchCityWeather, resetCityState} from "../../redux/actions/cityActions";
import PropTypes from 'prop-types'

class City extends React.Component{

    componentDidMount() {
        this.props.fetchCity(this.props.id)
    }

    componentWillUnmount(){
        this.props.resetState()
    }

    render() {
        return (
            this.props.weatherData && !this.props.loading
            ?
                <div className={styles.city_info}>
                    <div>
                        <h1>{this.props.weatherData.weather[0].main} in {this.props.weatherData.name}</h1>
                        <div className={styles.city_img}>
                            <img src={`http://openweathermap.org/img/w/${this.props.weatherData.weather[0].icon}.png`} alt={this.props.weatherData.name}/>
                        </div>
                        <p>Current: {this.props.weatherData.main.temp}°</p>
                        <p>High: {this.props.weatherData.main.temp_max}°</p>
                        <p>Low: {this.props.weatherData.main.temp_min}°</p>
                        <p>Wind Speed: {this.props.weatherData.wind.speed} mi/hr</p>
                    </div>
                </div>
             :
                <Loader/>
         )
    }
}

function mapStateFromProps(state) {
    return{
        weatherData : state.cityReducer.weatherData,
        loading : state.cityReducer.loading
    }
}

function mapDispatchFromProps(dispatch) {
    return{
        fetchCity : id => dispatch(fetchCityWeather(id)),
        resetState : () => dispatch(resetCityState())
    }
}

City.propTypes = {
    weatherData: PropTypes.object,
    loading: PropTypes.bool,
    fetchCity : PropTypes.func.isRequired,
    resetState : PropTypes.func.isRequired
}

export default connect(mapStateFromProps, mapDispatchFromProps)(City)