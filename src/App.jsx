
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import LandingPage from './Pages/LandingPage'
import WatchHistory from './Pages/WatchHistory'
import Header from './Components/Header'

function App() {
 

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch-history' element={<WatchHistory/>}/>
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
