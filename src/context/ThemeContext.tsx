import React, { createContext, useState, useContext, ReactNode } from 'react';

// Definir el tipo para el contexto
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Crear el contexto con un valor predeterminado de `undefined`
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Proveedor del contexto
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>('light'); // Tema inicial

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};
