import { useState } from 'react'
import './App.css'
import LoadingPage from './composants/LoadingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './composants/PageIndex/PageAccueil';
import Info from './composants/PageInfo/PageInfo';


function App() {

  return (
    <BrowserRouter>
      <LoadingPage>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </LoadingPage>
    </BrowserRouter>
  )
}

export default App
