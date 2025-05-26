
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layouts from './Layouts/MainLayouts/Layouts'
import Home from './Pages/Home/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layouts/>}>
        <Route path='/' element={<Home/>}/></Route>

      </Routes>
    </>
  )
}

export default App
