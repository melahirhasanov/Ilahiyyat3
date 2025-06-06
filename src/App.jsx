
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
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
import NotFound from './Pages/NoteFound/NotFound'
import AdminDashboard from './Pages/Admin/Admin'
import AdminLogin from './Pages/Admin/AdminLogin'

function App() {
  const AdminRoute = () => {
    const isAdmin = localStorage.getItem('userRole') === 'admin';
    return isAdmin ? <Outlet/> : <Navigate to="/mescidvideosu" replace />;
  };
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
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/mescidvideosu' element={<AdminLogin/>}/>
        <Route path='/Quran-Təlimi' element={<QuranLearning/>}/>

        <Route element={<AdminRoute />}>
          <Route path="/mescidsekli" element={<AdminDashboard />} />
        </Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
