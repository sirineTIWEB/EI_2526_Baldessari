import { useState } from 'react'
import './App.css'
import LoadingPage from './composants/LoadingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './composants/PageIndex/PageAccueil';
import Info from './composants/PageInfo/PageInfo';
import SinglePage from './composants/SinglePage/SinglePage';
import Catalogue from './composants/PageCatalogue/Catalogue';


function App() {

  return (
    <BrowserRouter>
      <LoadingPage>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/info" element={<Info />} />
          <Route path="/catalogue" element={<Catalogue />} />
          {/* passer l'url de l'event cliqué */}
          <Route path="/evenement/:id" element={<SinglePage />} />
          <Route path="/oeuvre/:id" element={<SinglePage />} />
        </Routes>
      </LoadingPage>
    </BrowserRouter>
  )
}

export default App
