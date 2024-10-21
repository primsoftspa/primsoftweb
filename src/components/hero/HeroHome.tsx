import firstBgImg from '../../assets/slider/01.jpg'
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  const el = useRef(null); // Crear una referencia para el elemento

  useEffect(() => {
    const options = {
      strings: [
        '<span style="color: white;">Desarrollo de Software</span>',
        '<span style="color: cyan;">Soluciones Innovadoras</span>',
        '<span style="color: peru;">Transformación Digital</span>',
      ],
      typeSpeed: 60,
      backSpeed: 25,
      smartBackspace: true, // Opcional: para mejorar la velocidad de escritura
      bindInputFocusEvents: true,
      contentType: 'html', // Para permitir HTML
      loop: true
    };

    // Iniciar Typed.js
    const typed = new Typed(el.current, options);

    // Limpiar Typed.js al desmontar el componente
    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} className="fs-2"/>; // Usar la referencia en el elemento
};


export default () => {
  return (
    <>
      {/* FIRST SLIDE */}
        <div className='w-100 p-5 slide text-light'
          style={{
            backgroundImage: `linear-gradient(290deg, rgba(30, 30, 30, 0.4) 20%, rgba(0, 0, 0, .9) 50%), url(${firstBgImg})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            minHeight: '100vh',
            overflow: 'hidden',
            minWidth: '100%'
          }}>
          <h2 className='animate__animated animate__zoomIn animate__delay-1s fw-bold freeman-regular text-info display-1'>PrimSoft</h2>
          {/* <p className='p1 fs-2 fw-normal animate__animated animate__fadeIn animate__delay-2s animate__slow text-gray'>Impulsa tu futuro digital</p> */}
          <TypedText />
        </div>
        </>
  );
}

