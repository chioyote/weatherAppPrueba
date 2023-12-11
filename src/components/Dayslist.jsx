import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"
import { WeatherByCountry } from "./WeatherByCountry"
import { Loader } from "../ui/components"
import { EmptyState } from "./EmptyState"

export const Dayslist = () => {
    const { loader, weatherData } = useContext(AppContext)
    const [weatherKeys, setWeatherKeys] = useState(null)

    useEffect(() => {
        setWeatherKeys(Object.keys(weatherData))
    }, [weatherData])
    
    if ( loader ) {
        return(<Loader/>)
    }

    if ( weatherData.length == 0 ) {
        return( <EmptyState/> )
    }
    return (
        <div>
            { weatherKeys &&
                weatherData.map( item => (
                    <WeatherByCountry key={item.id} weatherData={item}/>
                ))
            }
        </div>
    )
}
