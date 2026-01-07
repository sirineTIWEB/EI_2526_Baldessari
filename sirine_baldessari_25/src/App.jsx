import { useState } from 'react'
import './App.css'
import LoadingPage from './context/LoadingContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/PageAccueil';
import Info from './pages/PageInfo';
import SinglePage from './pages/SinglePage';
import Catalogue from './pages/Catalogue';
import Contact from './pages/Contact';
import Footer from './composants/Footer';


function App() {

  return (
    <BrowserRouter>
      <LoadingPage>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/info" element={<Info />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/contact" element={<Contact />} />
          {/* passer l'url de l'event cliqué */}
          <Route path="/evenement/:id" element={<SinglePage />} />
          <Route path="/oeuvre/:id" element={<SinglePage />} />
        </Routes>
        <Footer />
      </LoadingPage>
    </BrowserRouter>
  )
}

export default App
