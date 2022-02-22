import axios from 'axios'
import { useState } from 'react'
export const key = '70350a3d6d194e91b6d105911212610 '

export async function fetchData(currentCity, days = 3) {
  try {
    const data = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${currentCity}&days=${days}&aqi=no&alerts=no`
    )
    return data
  } catch (e) {
    alert(e)
    const data = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${currentCity}&days=${days}&aqi=no&alerts=no`
    )
    return data
  }
}
