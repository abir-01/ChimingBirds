import React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bird from './components/Bird'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Cards /> } />
        <Route exact path="/bird/:id" element={ <Bird/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App