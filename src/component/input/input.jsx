import { useState } from "react"
import './input.scss'

export const Input = ({ getWeather }) => {
    const [value, setValue] = useState('')

    return (
        <div className="input-block">
            <input placeholder="input city" value={value} onChange={(e) => setValue(e.target.value)} type="text" />
            <button className="btn btn-sm" onClick={() => getWeather(value)}>get</button>
        </div>

    )
}