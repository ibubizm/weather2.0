import './main.scss'


export const Main = ({ showMore, setShowMore, currentWeather, location, forecast }) => {
    return (
        <div className="main">
            <div className="weathe-block">
                <div className="title">
                    {location.name}
                </div>
                <div className="current-temp">
                    {Math.round(currentWeather.temp_c)}°C
                </div>
                {currentWeather.wind_kph} km/h
                <div className="next-days">
                    {forecast.map(i =>
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
                    )}

                </div>
                <button onClick={() => setShowMore(!showMore)} className="btn">show more</button>
            </div>


        </div>
    )
}