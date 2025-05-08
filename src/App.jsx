
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layouts from './Layouts/MainLayouts/Layouts'
import Home from './Pages/Home/Home'
import Images from './Pages/Home/Images/Images'
import AboutUs from './Pages/About/About'
import ContactSection from './Pages/Contact/Contact'
import HomeServices from './Pages/Servises/HomeServicess'
import QuranPage from './Pages/QuranPdf/QuranPdf'

function App() {

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layouts/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/Qalereya' element={<Images/>}/>
        <Route path='/Haqqımızda' element={<AboutUs/>}/>
        <Route path='/Əlaqə' element={<ContactSection/>}/>
        <Route path='/Xidmətlərimiz' element={<HomeServices/>}/>
        <Route path='/Qurani-Kərim' element={<QuranPage/>}/>

        </Route>

      </Routes>
    </>
  )
}

export default App
