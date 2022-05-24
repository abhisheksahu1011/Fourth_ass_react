import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Contact from './Component/Contact'
import Home from './Component/Home'
import NavBar from './Component/NavBar'
import Student from './Component/Student'
import './index.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>

        <NavBar/>

            <Routes>

                <Route path='/home' element={<Home/>}/>
                <Route path='/student' element={<Student/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>




      </BrowserRouter>




    </div>
  )
}

export default App
