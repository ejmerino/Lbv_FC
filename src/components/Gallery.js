import React, { useState } from 'react';

const Gallery = () => {
  const images = [
    '/imgs/Alejandro Montoya.jpg',
    '/imgs/Cancha1.jpg',
    '/imgs/Grupal1.jpg',
    '/imgs/A Montoya.jpg',
    '/imgs/Grupal2.jpg',
    '/imgs/Grupal3.jpg',
    '/imgs/Daniel Gómez 2.jpg',
    '/imgs/Daniel Gómez 4.jpg',
    '/imgs/Jos DT.jpg',
    '/imgs/José Chiiliguano.jpg',
    '/imgs/Puertas.jpg',
    '/imgs/Sebastián Lima 2.jpg',
    '/imgs/Fernando Molina 5.jpg',
    '/imgs/Gustavo Peñafiel 3.jpg',
    '/imgs/Joshua Pazmiño.jpg',
    '/imgs/Mauro Bazurto 2.jpg',
    '/imgs/S. Córdova.jpg',
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="py-8">
      <h2 className="text-4xl font-bold text-center mb-8">Galería</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="object-cover w-full h-64 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => openModal(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative max-w-4xl mx-auto">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto max-h-screen rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
