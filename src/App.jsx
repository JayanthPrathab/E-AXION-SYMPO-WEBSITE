import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import Landingpage from './components/Landingpage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Hero /> */}
      <Landingpage />
    </>
  )
}

export default App
