import axios from "axios"
export const key = '70350a3d6d194e91b6d105911212610 '

export const fetchData = async (currentCity, days = 3) => {
    const data = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${currentCity}&days=${days}&aqi=no&alerts=no`)
    return data
}