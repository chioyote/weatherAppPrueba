import axios from "axios";

const apiKey = import.meta.env.VITE_WEATHER_KEY

export const getWeather = ( locations = [] ) => {
    const weatherData = [];

    const returnedWeatherData = new Promise((resolve, reject) => {
        if ( Object.keys(locations).length == 0 ) {
            reject('empty-search')
        }
        locations.forEach( async (item, index) => {
            const {lat, long, display, country, state, id } = item;
            const thisData = {
                id,
                lat,
                long,
                display,
                country,
                state,
                data: false
            }
            try {
                const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
                const response = await axios({
                    method: 'GET',
                    url: url
                })
                thisData['data'] = response?.data
                
            } catch (error) {
                console.log(error)
                return
            }

            weatherData.push(thisData)

            if ( (Object.keys(locations).length - 1) == index ) {
                resolve(weatherData)
            }
             
        })
    })
    return returnedWeatherData
}
