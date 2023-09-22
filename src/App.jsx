import React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bird from './components/Bird'
import AddBird from './components/AddBird'

const App = () => {
  return (
    <BrowserRouter basename='/ChimingBirds/'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={
          <>
            < Cards />,
            <AddBird />
          </> } />
        <Route exact path="/bird/:id" element={ <Bird/>} />
        <Route exact path="/addbird" element={ <AddBird/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App