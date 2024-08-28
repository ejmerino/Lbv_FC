import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Players from './components/Players';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Encabezado fijo */}
        <Header className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white" />

        {/* Contenido principal */}
        <main className="flex-grow mt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<Players />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>

        {/* Pie de página */}
        <Footer className="mt-auto" />
      </div>
    </Router>
  );
}

export default App;