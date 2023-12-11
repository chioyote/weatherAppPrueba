import { faTemperatureHigh, faTemperatureLow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format, isSameDay } from "date-fns"

import '~/components/WeatherCard.scss'

export const WeatherCard = ( {dayData, date} ) => {
    const { temp_max, temp_min } = dayData
    const formatDate = format(new Date( date ), 'dd/MM/yyyy')

    const minTemp = temp_min.reduce(function (prevTemp, currentTemp) {
        return Math.min(prevTemp, currentTemp);
    });
    const maxTemp = temp_max.reduce(function (prevTemp, currentTemp) {
        return Math.max(prevTemp, currentTemp);
    });
    
    return (
        <div className={`list__country--card`}>
            <span className={`list__country--card-date`}>{formatDate}</span>
            <div className={`list__country--card-data hot`}>
                <span>{minTemp} <sup>°C</sup></span>
                <FontAwesomeIcon icon={faTemperatureLow} size="sm"/>
            </div>
            <div className={`list__country--card-data cold`}>
                <span>{maxTemp} <sup>°C</sup></span>
                <FontAwesomeIcon icon={faTemperatureHigh} size="sm"/>
            </div>
        </div>
    )
}
