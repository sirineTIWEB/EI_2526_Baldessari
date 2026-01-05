import { useState } from 'react'
import './App.css'
import LoadingPage from './composants/LoadingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './composants/PageIndex/Accueil';


function App() {

  return (
    <BrowserRouter>
      <LoadingPage>
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
      </LoadingPage>
    </BrowserRouter>
  )
}

export default App
