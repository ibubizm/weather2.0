import { memo, useMemo } from 'react'

export const Buttons = memo(({ setCurrentCity }) => {
  const func = (e) => {
    setCurrentCity(e.target.name)
  }

  return (
    <div className="buttons-block">
      <button name="minsk" className="btn" onClick={func}>
        Minsk
      </button>
      <button name="moscow" className="btn" onClick={func}>
        Moscow
      </button>
      <button name="bratislava" className="btn" onClick={func}>
        Bratislava
      </button>
    </div>
  )
})
