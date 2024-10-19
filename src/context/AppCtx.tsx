import React, { createContext, useContext, useEffect, useState } from "react";
import { IApp, Service } from "../interfaces/@types";

const AppContext = createContext<IApp>({} as IApp);

export function useAppContext() {
  return useContext(AppContext) as IApp;
}

type AppCtxProviderProps = {
  children?: JSX.Element | JSX.Element[];
};

interface TitleContextType {
  title: string;
  setTitle: (title: string) => void;
}

export function useTitle(): TitleContextType {
  const context = useContext(TitleContext);
  if (!context) {
    throw new Error('useTitle debe usarse dentro de un TitleProvider');
  }
  return context;
};


const AppProvider: React.FC<AppCtxProviderProps> = ({ children }) => {

  const [services, setServices] = useState<Service[]>([]);
  const [nameServices, setNameServices] = useState([]);
  const [title, setTitle] = useState('Primsoft');

  useEffect(() => {
    document.title = title;
    fetch("./data/servicios.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.servicios),
        setNameServices(data.nombres)
      })
      .catch((e) => console.error(e.message));
  }, []);

  return (
    <AppContext.Provider
      value={{
        services,
        nameServices
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;



const TitleContext = createContext<TitleContextType | undefined>(undefined);

export const TitleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [title, setTitle] = useState('Primsoft');

  useEffect(() => {
    document.title = title; // Actualiza el título del documento
  }, [title]);

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};
