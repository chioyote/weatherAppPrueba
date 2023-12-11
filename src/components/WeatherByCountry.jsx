import { useEffect, useState } from "react"
import { WeatherCard } from "./WeatherCard"
import { getFinalDataByDay } from "../helpers"

import '~/components/WeatherByCountry.scss'

export const WeatherByCountry = ( {weatherData} ) => {
    
    const { id, country, state, display, data: {list}} = weatherData
    const [weatherList, setWeatherList] = useState(null)
    useEffect(() => {
        const dailyData = getFinalDataByDay(list);
        dailyData.then( response => {
            if ( response ) {
                setWeatherList(response)
            }
        })
        return () => {
            setWeatherList(null)
        }
    }, [])

    return (
        <div className="list__country">
            <div className="list__country--name">
                <h2>{display}</h2>
                <span>{state}, {country}</span>
            </div>
            <div className={`list__country--data`}>
                {   
                    weatherList &&
                    Object.keys(weatherList).map( item => {
                        const uniqueId = `${id}-${item}`
                        return <WeatherCard key={uniqueId} date={item} dayData={weatherList[item]} cardCount={Object.keys(weatherList).length}/>
                    })
                }
            </div>
        </div>
    )
}
