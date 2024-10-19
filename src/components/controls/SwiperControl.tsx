import React from 'react'
import nextImg from '../../assets/png/btns/forward_96px.png'
import prevImg from '../../assets/png/btns/back_96px.png'

const SwiperControl = (props: any) => {

  return (
    <div className="control-slider">
      <div ref={props.navigationPrevRef} className="control-prev">
          <img src={prevImg} alt="prev btn" style={{width: '100%'}} />
      </div>
      <div ref={props.navigationNextRef} className="control-next">
        <img src={nextImg} alt="next btn" style={{width: '100%'}}/>
      </div>
    </div> 
  )
}

export default SwiperControl