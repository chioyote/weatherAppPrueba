import React, { useReducer } from 'react'
import { AppContext } from './AppContext'
import { AppReducer } from './AppReducer'
import { getLocation, getWeather } from '../helpers'
import { cleanSearchParam } from '../utils/cleanSearchParam'
import { types } from '../types/types'

const initialState = {
    searchTerm: 'Ciudad de México',
    weatherData: [],
    loader: true
}

export const AppProvider = ({children}) => {
    const [appState, appStateDispatch] = useReducer(AppReducer, initialState)

    const searchLocation = async ( searchParam = initialState.searchTerm ) => {
        const resultsLocation = await getLocation(searchParam);
        const cityData = resultsLocation.filter(item => item.result_type == 'city' && item.slug.toLowerCase().includes(cleanSearchParam(searchParam)) )
        const weatherData = getWeather(cityData);
        let payload = {}
        

        setTimeout(() => {
            weatherData.then( response =>  {
                payload = {
                    search: searchParam,
                    data: response,
                    loader: false
                }
            })
            .catch((error)=>{
                payload = {
                    search: searchParam,
                    data: [],
                    loader: false
                }
            })
            .finally(() => {
                const action = {
                    type: types.search,
                    payload: payload
                }
                appStateDispatch(action)
            });
        }, 400);

    }

    const setLoader = () => {
        const payload = {
            loader: true
        }

        const action = {
            type: types.loader,
            payload: payload
        }
        appStateDispatch(action)
    }

    return (
        <AppContext.Provider value={ {...appState, setLoader, searchLocation} }>
            {children}
        </AppContext.Provider>
    )
}
