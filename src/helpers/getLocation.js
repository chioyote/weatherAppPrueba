import axios from "axios"

export const getLocation = async ( searchParam ) => {
    try {
        const url = `https://search.reservamos.mx/api/v2/places?q=${searchParam}`;
        const response = await axios({
            method: 'GET',
            url: url
        })
        return response.data
    } catch (error) {
        console.log(error.message)
        return error
    }
}
