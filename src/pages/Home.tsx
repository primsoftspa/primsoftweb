import React, { lazy } from "react";
const CarouselRb = lazy(() => import('../components/CarouselRb'))
import ReviewClientes from "../components/review/Clientes";
import ReviewService from "../components/review/ServicesAlt";
import Valores from "../components/review/ValoresSwiper";
import HeroText from "../components/body/HeroText";
import data from "../data/contacto.json"

export default () => {
  return (
    <section className="bg-light w-100">
      <CarouselRb />
      <h2 className="display-4 fw-bold my-5 text-center" style={{
        letterSpacing: "3px"
      }}>{data.name}</h2>
      <ReviewService />
      <ReviewClientes />
    </section>
  );
};
