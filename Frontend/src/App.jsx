import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Addemp from "./pages/Addemp"
import Allemp from "./pages/Allemp"
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/about' element={<h1>About</h1>}/>
        <Route path='/create-emp' element={<Addemp/>}/>
        <Route path='/allemp' element={<Allemp/>}/>
      </Routes>
    </Router>
  )
}

export default App