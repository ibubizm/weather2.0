import { useState, memo, useEffect } from 'react'
import { fetchData } from '../../fetchdata'
import './input.scss'

export const Input = memo(({ setCurrentCity }) => {
  const [value, setValue] = useState('')
  console.log('input')

  return (
    <div className="input-block">
      <input
        placeholder="input city"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <button className="btn btn-sm" onClick={() => setCurrentCity(value)}>
        get
      </button>
    </div>
  )
})
