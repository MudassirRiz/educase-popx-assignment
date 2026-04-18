import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LandingPage from './pages/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>

      <section >
    <Routes>

        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
        
        


        
    </Routes>
      </section>
    </BrowserRouter>

    
    </>
  )
}

export default App
