import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Events from './pages/Events'
import UpcomingEvents from './pages/UpcomingEvents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home/>
      <Events/>
      <UpcomingEvents/>
    </>
  )
}

export default App
