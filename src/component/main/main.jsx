import {
  memo,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react/cjs/react.development'
import { fetchData } from '../../fetchdata'
import './main.scss'
import { Info } from '../info/info'

function Main({ currentCity }) {
  const [location, setLocation] = useState('')
  const [forecast, setForecast] = useState([])
  const [currentWeather, setCurrentWeather] = useState([])
  const [showMore, setShowMore] = useState(false)
  //   const { location, forecast, currentWeather } = useData(currentCity)

  useEffect(() => {
    fetchData(currentCity).then((data) => {
      if (data.status === 200) {
        setCurrentWeather(data.data.current)
        setLocation(data.data.location)
        setForecast(data.data.forecast.forecastday)
      } else {
        alert('error')
      }
    })
  }, [currentCity])

  return (
    <>
      <div className="main">
        <div className="weathe-block">
          <div className="title">{location.name}</div>
          <div className="current-temp">
            {Math.round(currentWeather.temp_c)}°C
          </div>
          {currentWeather.wind_kph} km/h
          <div className="next-days">
            {forecast.map((i) => (
              <div key={i.date_epoch} className="day">
                {i.date.split('-').reverse().join('-')}
                <div className="icon">
                  <img src={i.day.condition.icon} alt="" />
                </div>
                <div className="temp">
                  <div className="min-temp">
                    &#8681;{Math.round(i.day.mintemp_c)}
                  </div>
                  <div className="max-temp">
                    &#8679;{Math.round(i.day.maxtemp_c)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => setShowMore(!showMore)} className="btn">
            show more
          </button>
        </div>
      </div>
      {showMore && <Info forecast={forecast} />}
    </>
  )
}

export default memo(Main)
