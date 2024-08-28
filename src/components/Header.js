import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent backdrop-filter backdrop-blur-lg text-white flex justify-between items-center py-2 px-4 static w-full top-0 z-10 font-montserrat">
      {/* Logo y nombre del equipo */}
      <div className="flex items-center">
        <Link to="/">
          <img className="h-8 mr-4" src="/imgs/LbvLogo1.png" alt="Logo de Lbv FC" />
        </Link>
        <span className="text-xl font-bold transition duration-300 hover:text-primary-light">Lbv FC</span>
      </div>

      {/* Menú de navegación */}
      <nav className="flex items-center">
        {/* Icono de menú para dispositivos móviles */}
        <div className="md:hidden" onClick={toggleMenu}>
          <div className="flex flex-col cursor-pointer">
            <span className={`block w-6 h-1 bg-white mb-1 transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-1 bg-white mb-1 transition duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-1 bg-white transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </div>

        {/* Lista de enlaces */}
        <ul className={`md:flex md:items-center md:gap-6 absolute md:static bg-transparent w-full left-0 md:w-auto transition duration-300 ${isMenuOpen ? 'top-14' : '-top-[200px]'}`}>
          <li className="md:my-0 my-4">
            <Link to="/" className="block py-2 px-4 text-white hover:text-primary-light transition duration-300 font-semibold" onClick={toggleMenu}>Inicio</Link>
          </li>
          <li className="md:my-0 my-4">
            <Link to="/players" className="block py-2 px-4 text-white hover:text-primary-light transition duration-300 font-semibold" onClick={toggleMenu}>Jugadores</Link>
          </li>
          <li className="md:my-0 my-4">
            <Link to="/gallery" className="block py-2 px-4 text-white hover:text-primary-light transition duration-300 font-semibold" onClick={toggleMenu}>Galería</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
