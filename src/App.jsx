import React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bird from './components/Bird'
import AddBird from './components/AddBird'
import Birds from './components/Birds'
import AudioRecord from './components/AudioRecord'

const App = () => {
  return (
    <BrowserRouter basename='/ChimingBirds/'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={
          <>
            <AudioRecord/>,
            < Birds />
            {/* <AddBird /> */}
          </> } />
        <Route exact path="/bird/:id" element={ <Bird/>} />
        <Route exact path="/addbird" element={ <AddBird/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App