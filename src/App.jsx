import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Events from './pages/Events'
import UpcomingEvents from './pages/UpcomingEvents'
import Footer from './components/Footer'
import Gallery from './pages/Gallery'
import JoinGharPadharo from './pages/JoinGharPadharo'
import Reviews from './pages/Reviews'

function App() {

  return (
    <>
      <Header />
      <Home/>
      <Events/>
      <Gallery/>
      <UpcomingEvents/>
      <JoinGharPadharo/>
      <Reviews/>
      <Footer/>
    </>
  )
}

export default App
