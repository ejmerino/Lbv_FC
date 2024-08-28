import React, { useEffect, useRef } from 'react';

function Footer() {
  const logosRef = useRef(null);

  useEffect(() => {
    const logos = logosRef.current;
    const scrollWidth = logos.scrollWidth;
    const clientWidth = logos.clientWidth;

    const animate = () => {
      logos.scrollLeft += 1;
      if (logos.scrollLeft >= scrollWidth - clientWidth) {
        logos.scrollLeft = 0;
      }
    };

    const intervalId = setInterval(animate, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="bg-primary-color text-white text-center p- relative overflow-hidden">
      <div className="sponsors flex justify-center items-center overflow-hidden relative h-24">
        <div ref={logosRef} className="flex space-x-8 animate-scroll whitespace-nowrap">
          <img className="h-20" src="/imgs/Jormilcar_blanco.png" alt="Jormilcar" />
          <img className="h-20" src="/imgs/Alcamo3.png" alt="Alcamo" />
          <img className="h-20" src="/imgs/Alfajores_Blanco.png" alt="Alfajores del Valle" />
          <img className="h-20" src="/imgs/Licorería_Espinoza.png" alt="Licorería Espinoza" />
          <img className="h-20" src="/imgs/DrMontoya1.png" alt="Dr Montoya" />
          <img className="h-20" src="/imgs/LbvGroup1.png" alt="Lbv Group" />
          <img className="h-20" src="/imgs/Jormilcar_blanco.png" alt="Jormilcar" />
          <img className="h-20" src="/imgs/Alcamo3.png" alt="Alcamo" />
          <img className="h-20" src="/imgs/Alfajores_Blanco.png" alt="Alfajores del Valle" />
          <img className="h-20" src="/imgs/Licorería_Espinoza.png" alt="Licorería Espinoza" />
          <img className="h-20" src="/imgs/DrMontoya1.png" alt="Dr Montoya" />
          <img className="h-20" src="/imgs/LbvGroup1.png" alt="Lbv Group" />
        </div>
      </div>
      <p>&copy; 2024 Josue Merino Calderón. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
