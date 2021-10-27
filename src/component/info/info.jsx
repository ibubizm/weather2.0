import './info.scss'

export const Info = ({ forecast }) => {
    return (
        <div className="info-block">
            <div className="days">
                {forecast[0].hour.map((item) =>
                    <div key={item.time_epoch} className="day">
                        {item.time.split(' ')[1]}
                        <div className="icon">
                            <img src={item.condition.icon} alt="" />
                        </div>
                        <div className="temp">
                            {Math.round(item.temp_c)}°C
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
