import {SET_ACTIVE_PLACE} from "./actionTypes";

export function activePlace(index) {
    return{
        type : SET_ACTIVE_PLACE,
        index
    }
}
