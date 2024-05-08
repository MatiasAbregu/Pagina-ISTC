import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { DetailedNew } from './pages/DetailedNew'
import { DetailedCareer } from './pages/DetailedCareer'
import { AllNews } from './pages/AllNews'
import { AllCareers } from './pages/AllCareers'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all-news' element={<AllNews />} />
        <Route path='/news/:id' element={<DetailedNew />} />
        <Route path='/all-careers' element={<AllCareers />} />
        <Route path='/careers/:id' element={<DetailedCareer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App