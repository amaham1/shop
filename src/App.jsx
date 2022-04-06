import { useState } from 'react'
import logo from '../logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import CompanyAdd from './Componenets/CompanyAdd.jsx'
import Home from './Componenets/Home'

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/CompanyAdd" element={<CompanyAdd/>}/>
      </Routes>
    </div>
  )
}

export default App
