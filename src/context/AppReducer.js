import { types } from "../types/types";

export const AppReducer = ( state = {}, action) => {
    switch (action.type) {
        case types.search:
            return {
                ...state,
                searchTerm: action.payload.search,
                weatherData: action.payload.data,
                loader: action.payload.loader
            }
        case types.loader:
            return{
                ...state,
                loader: action.payload.loader
            }
        default:
            break;
    }
}
