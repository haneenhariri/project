import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import { AcademyPage } from './XacademyPage/XacademyPage'
import CertificateAfterS from './components/CertificateAfterS/CertificateAfterS'
import Cirnew from './components/Cirnew/Cirnew'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <LandingPage />}/>
      <Route path='/AcademyPage' element={ <AcademyPage />}/>
      <Route path='/AcademyPage/Certificate' element={ <Cirnew />}/>
      <Route path='/Certificate/:id' element={ <CertificateAfterS />}/>
    </Routes>
    </>
  )
}

export default App
