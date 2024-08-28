import React, { useEffect, useState } from 'react';

const Home = () => {
  const backgroundImages = [
    '/imgs/Grupal1.jpg',
    '/imgs/Grupal2.jpg',
    '/imgs/Grupal3.jpg',
  ];
  const [currentBg, setCurrentBg] = useState(0);
  const [fadeClass, setFadeClass] = useState('opacity-100');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('opacity-0');
      setTimeout(() => {
        setCurrentBg((prevBg) => (prevBg + 1) % backgroundImages.length);
        setFadeClass('opacity-100');
      }, 1000); // Tiempo de la transición
    }, 4000); // Tiempo total entre cambios (4 segundos)
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      const windowHeight = window.innerHeight;
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add('opacity-100', 'translate-y-0');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-800 text-white min-h-screen relative overflow-hidden">
      {/* Fondo dinámico */}
      <div
        className={`absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-1000 ease-in-out ${fadeClass}`}
        style={{ 
          backgroundImage: `url(${backgroundImages[currentBg]})`, 
          filter: 'brightness(70%)',
          height: '100vh',
        }}
      ></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-12">
        <div className="max-w-4xl mx-auto text-center py-4">
          <h1 className="text-6xl font-bold mb-8 fade-in opacity-0 transition-opacity duration-700 ease-in-out">
            LBV FC
          </h1>
        </div>
      </div>

      {/* Próximo partido */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-4">
        <div className="w-full max-w-4xl mx-auto text-center py-8">
          <div className="fade-in opacity-0 translate-y-10 transition-all duration-700 ease-in-out p-8 bg-gray-700 bg-opacity-80 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-5xl font-bold mb-4">Próximo Partido</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
              <img src="/imgs/LbvLogo1.png" alt="LBV FC Logo" className="w-24 h-24 object-contain" />
              <div className="text-center">
                <p className="text-2xl text-white">LBV FC vs. Atletic del Valle</p>
                <p className="text-xl text-gray-300">Fecha: 15 de septiembre, 2024</p>
                <p className="text-xl text-gray-300">Hora: 10:00</p>
                <p className="text-xl text-gray-300">Complejo Corazón de Jesús</p>
              </div>
              <img src="/imgs/Atletic del Valle.png" alt="Equipo Rival Logo" className="w-24 h-24 object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Historia */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-4">
        <div className="w-full max-w-4xl mx-auto text-center py-4">
          <div className="fade-in opacity-0 translate-y-10 transition-all duration-700 ease-in-out bg-gray-700 bg-opacity-80 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-4xl font-bold mb-4">Historia</h2>
            <p className="text-lg text-white">
              Lbv FC es un equipo de amigos, fundado el 
              3 de septiembre del 2012, a lo largo de los años el equipo se ha ido fortaleciendo producto de la amistad y unaminidad 
              de sus integrantes, lo que lo ha destacado como una organización social y deportiva. Es un equipo joven que de momento se encuentra participando en la Copa Corazón de Jesús, en Conocoto en
              busca de su primer título barrial.
            </p>
          </div>
        </div>
      </div>

      {/* Sección de Camisetas */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-6">
        <div className="w-full max-w-4xl mx-auto text-center py-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="fade-in opacity-0 translate-y-10 transition-all duration-700 ease-in-out bg-gray-700 bg-opacity-80 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img src="/imgs/local.png" alt="Camiseta Local" className="w-64 h-64 object-cover mb-4 rounded-lg" />
              <div className="text-center">
                <p className="text-white text-lg font-bold mb-2">Camiseta Local</p>
                <p className="text-white mt-2">Precio: $15.00</p>
              </div>
            </div>
            <div className="fade-in opacity-0 translate-y-10 transition-all duration-700 ease-in-out bg-gray-700 bg-opacity-80 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img src="/imgs/visitante.png" alt="Camiseta Visitante" className="w-64 h-64 object-cover mb-4 rounded-lg" />
              <div className="text-center">
                <p className="text-white text-lg font-bold mb-2">Camiseta Visitante</p>
                <p className="text-white mt-2">Precio: $15.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
