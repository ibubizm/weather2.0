

export const Buttons = ({ getWeather }) => {
    return (
        <div className="buttons-block">
            <button className="btn" onClick={() => getWeather('minsk')}>Minsk</button>
            <button className="btn" onClick={() => getWeather('moscow')}>Moscow</button>
            <button className="btn" onClick={() => getWeather('bratislava')}>Bratislava</button>
        </div>
    )
}