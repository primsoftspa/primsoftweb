import React, { lazy } from "react";
const HeroHome = lazy(() => import('../components/hero/HeroHome'))
import ReviewClientes from "../components/review/Clientes";
import ReviewService from "../components/review/ServicesAlt";
import Valores from "../components/review/ValoresSwiper";
import HeroText from "../components/body/HeroText";
import data from "../data/contacto.json";


export default () => {
  return (
    <>
    <section className="bg-light w-100">
      <HeroHome />
      <h2 className="display-4 fw-bold my-5 text-center" style={{
        letterSpacing: "3px"
      }}>{data.name}</h2>
      <ReviewService />
    </section>
    </>
  );
};