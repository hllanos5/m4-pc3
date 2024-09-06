import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Inicio />} />
    </Routes>
  )
}

export default App
