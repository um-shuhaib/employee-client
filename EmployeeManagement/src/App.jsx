import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import './bootstrap.min.css'
import Edit from './components/Edit'
import Add from './components/Add'
import {ToastContainer} from 'react-toastify'


function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='edit/:id' element={<Edit/>} />
      <Route path='add' element={<Add/>} />
    </Routes>
    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default App
