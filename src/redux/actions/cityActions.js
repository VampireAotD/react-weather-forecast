import axios from 'axios'
import {FETCH_ERROR, FETCH_START, FETCH_SUCCESS, RESET_CITY_STATE} from "./actionTypes";

export function fetchCityWeather(id) {
    return async dispatch => {
        dispatch(fetchStart())

        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=49fbcdd0a1bb1d81e5ee352584e8254f&units=imperial`)

            dispatch(fetchSuccess(response.data))
        }
        catch (error){
            dispatch(fetchError(error))
        }

    }
}

export function fetchStart() {
    return{
        type : FETCH_START
    }
}

export function fetchSuccess(data) {
    return{
        type : FETCH_SUCCESS,
        data
    }
}

export function fetchError(error) {
    return{
        type : FETCH_ERROR,
        error
    }
}

export function resetCityState() {
    return{
        type : RESET_CITY_STATE
    }
}