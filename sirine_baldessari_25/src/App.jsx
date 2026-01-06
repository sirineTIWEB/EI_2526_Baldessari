import { useState } from 'react'
import './App.css'
import LoadingPage from './composants/LoadingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './composants/PageIndex/PageAccueil';
import Info from './composants/PageInfo/PageInfo';
import SingleEvent from './composants/SingleEvent/SingleEvent';


function App() {

  return (
    <BrowserRouter>
      <LoadingPage>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/info" element={<Info />} />
          {/* passer l'url de l'event cliqué */}
          <Route path="/evenement/:id" element={<SingleEvent />} />
        </Routes>
      </LoadingPage>
    </BrowserRouter>
  )
}

export default App
