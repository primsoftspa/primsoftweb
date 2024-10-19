import firstBgImg from '../assets/slider/01.jpg'

function CarouselRb() {

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
          <h3 className='carousel-title animate__animated animate__zoomIn animate__delay-1s fw-bold'>PrimSoft</h3>
          <p className='p1 fs-2 fw-normal animate__animated animate__fadeIn animate__delay-2s animate__slow'>Experiencia y conocimiento</p>
        </div>
        </>
  );
}

export default CarouselRb;
