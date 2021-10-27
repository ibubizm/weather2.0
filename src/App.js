import { Main } from './component/main/main';
import './App.css';
import { Input } from './component/input/input';
import { useEffect, useState } from 'react';
import { Buttons } from './component/buttons'
import { fetchData } from './fetchdata'
import { Info } from './component/info/info'

function App() {
  const [currentCity, setCurrentCity] = useState(localStorage.getItem('city') || 'minsk')
  const [currentWeather, setCurrentWeather] = useState([])
  const [location, setLocation] = useState('')
  const [forecast, setForecast] = useState([])
  const [showMore, setShowMore] = useState(false)
  const getWeather = (city) => {
    setCurrentCity(city)
    localStorage.setItem('city', city)
  }

  useEffect(() => {
    fetchData(currentCity)
      .then((data) => {
        if (data.status === 200) {
          setCurrentWeather(data.data.current)
          setLocation(data.data.location)
          setForecast(data.data.forecast.forecastday)
        }
      })
  }, [currentCity])

  return (
    <div className="App">
      <Input getWeather={getWeather} />
      <Buttons getWeather={getWeather} />
      <Main
        showMore={showMore}
        setShowMore={setShowMore}
        currentWeather={currentWeather}
        location={location}
        forecast={forecast} />
      {showMore && <Info forecast={forecast} />}

    </div>
  );
}

export default App;
