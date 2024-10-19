import { useEffect, Suspense, lazy } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import NavigationRb from "./components/header/Navigation";
import AppProvider from "./context/AppCtx";
import HeroNav from './components/header/InfoNav'
import Contacto from './pages/Contacto'
import Footer from './components/Footer/Footer'
import FooterContact from "./components/Footer/FooterContact";
import { Container } from "react-bootstrap";
import Loading from "./components/Loading";
import Contact from "./components/Contact";
// Pages
const Home = lazy(() => import('./pages/Home'));
const Servicios = lazy(()=> import('./pages/Servicios'));
const Empresa =  lazy(() => import('./pages/Empresa'));
const Clientes = lazy(()=> import('./pages/Clientes'));

function App() {
  function GoToTop() {
    const routePath = useLocation();
    const onTop = () => {
      window.scrollTo(0, 0);
    }
    useEffect(() => {
      onTop()
    }, [routePath]);

    return null;
  };

  return (
    <Suspense fallback={<Loading/>}>
    <AppProvider>
      <HashRouter>
        <GoToTop />
        <HeroNav />
        <NavigationRb />
        <Container fluid className="p-0" style={{
          overflow: 'hidden'
        }}>
          <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Contact/>
          <FooterContact />
          <Footer />
        </Container>
      </HashRouter>
    </AppProvider>
    </Suspense>
  );
}

export default App;
