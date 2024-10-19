import React from 'react'
import CardRb from './body/Card';
import s1 from '../assets/png/services/01.png'

function ClientesCarousel() {
  return (
      <div className="container-fluid">
    {/* <!-- Module-1 --> */}
    <div id="module-1" className="container">
      <section className="row my-4 d-block">
        <div className="col-12 col-sm-10 col-md-4 col-lg-6 mx-auto my-5">
          {/* <!-- controls --> */}
          <div className="card border border-primary border-1">
            <button className="carousel-control-prev" type="button" data-bs-target="#rootCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <p className="bg-dark text-light text-center m-0 py-2 rounded fs-5 select-bg">Algunos de nuestros servicios son</p>
            <button className="carousel-control-next" type="button" data-bs-target="#rootCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-12 col-sm-10 col-md-4 col-lg-6 mx-auto my-auto">
          <div className="card border-0">
            {/* <!-- Carrousel --> */}
            <div id="rootCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
              <div className="carousel-inner" id="inner-carousel-1">
                <div className="carousel-item active">
                    <CardRb image={s1} />
                </div>
              </div>
            </div>
            {/* <!-- End Carousel --> */}
          </div>
        </div>
      </section>
    </div>
   </div> 
  )
}

export default ClientesCarousel