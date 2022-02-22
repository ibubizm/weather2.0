import Main from './component/main/main'
import './App.css'
import { Input } from './component/input/input'
import { useState } from 'react'
import { Buttons } from './component/buttons'

function App() {
  const [currentCity, setCurrentCity] = useState(
    localStorage.getItem('city') || 'minsk'
  )

  return (
    <div className="App">
      <Input setCurrentCity={setCurrentCity} />
      <Buttons setCurrentCity={setCurrentCity} />
      <Main currentCity={currentCity} />
    </div>
  )
}

export default App
