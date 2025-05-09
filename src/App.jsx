
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layouts from './Layouts/MainLayouts/Layouts'
import Home from './Pages/Home/Home'
import Images from './Pages/Home/Images/Images'
import AboutUs from './Pages/About/About'
import ContactSection from './Pages/Contact/Contact'
import HomeServices from './Pages/Servises/HomeServicess'
import QuranPage from './Pages/QuranPdf/QuranPdf'
import CumaDay from './Pages/CumaHutba/CumaHutba'
import Weekin from './Pages/WeekinMeeting/Weekin'
import Cost from './Pages/Cost/Cost'
import QuranLearning from './Pages/QuranLearn/QuranLearn'

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
        <Route path='/Cuma-Xutba' element={<CumaDay/>}/>
        <Route path='/Həftə-Söhbətləri' element={<Weekin/>}/>
        <Route path='/Aylıq-Hesabat' element={<Cost/>}/>
        <Route path='/Quran-Təlimi' element={<QuranLearning/>}/>

        </Route>

      </Routes>
    </>
  )
}

export default App
