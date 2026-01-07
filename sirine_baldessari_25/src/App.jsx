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
import Header from './composants/Header';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import Baldessari from './pages/Baldessari.jsx';

import RouteProtegee from './composants/RouteProtegee.jsx';
import { AuthProvider } from './context/AuthContext.jsx';


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <LoadingPage>
          <Header />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/info" element={<Info />} />
            <Route path="/baldessari" element={<Baldessari />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            {/* passer l'url de l'event cliqué */}
            <Route path="/evenement/:id" element={<SinglePage />} />
            <Route path="/oeuvre/:id" element={<SinglePage />} />
            <Route path="/dashboard" element={
              <RouteProtegee>
                <Dashboard />
              </RouteProtegee>
            }
            />
          </Routes>
          <Footer />
        </LoadingPage>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
