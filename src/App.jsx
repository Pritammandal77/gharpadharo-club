import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Events from './pages/Events'
import UpcomingEvents from './pages/UpcomingEvents'
import Footer from './components/Footer'
import Gallery from './pages/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home/>
      <Events/>
      {/* <Gallery/> */}
      <UpcomingEvents/>
      <Footer/>
    </>
  )
}

export default App
