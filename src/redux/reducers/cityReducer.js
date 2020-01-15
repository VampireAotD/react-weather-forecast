import {FETCH_ERROR, FETCH_START, FETCH_SUCCESS, RESET_CITY_STATE} from "../actions/actionTypes";

const initState = {
    weatherData: null,
    loading : false,
    error : null
}

export default function cityReducer( state = initState, action) {
    switch (action.type){
        case FETCH_START:
            return{
                ...state, loading: true
            }
        case FETCH_SUCCESS:
            return{
                ...state, weatherData: action.data, loading : false
            }
        case FETCH_ERROR:
            return{
                ...state, loading : true, error: action.error
            }
        case RESET_CITY_STATE:
            return{
                ...state, weatherData : null, loading : false, error : null
            }
        default:
            return state
    }
}