import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
  phrases: string[];  // Frases a mostrar
  colors: string[];   // Colores correspondientes a las frases
}

const TypedText: React.FC<TypedTextProps> = ({ phrases, colors }) => {
  const el = useRef(null); // Crear una referencia para el elemento

  useEffect(() => {
    const formattedStrings = phrases.map((phrase, index) => {
      return `<span style="color: ${colors[index]};">${phrase}</span>`;
    });


    const options = {
      strings: formattedStrings,
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
  }, [phrases, colors]);

  return <span ref={el} className="fs-2" />; // Usar la referencia en el elemento
};

export default TypedText;
