import React from 'react';
import './Portfolio.css';
import {Swiper,SwiperSlide} from 'swiper/react';
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HDC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import 'swiper/css';

const Portfolio = () => {
  return (
    <div className="Portfolio" id='Portfolio'>
      <span>Recent Project</span>
      <span>Portfolio</span>
      
    <Swiper
    spaceBetween={1}
    slidesPerView={2}
    grabCursor={true}
    className='Portfolio-slider'
    >
      <SwiperSlide>
       <img src={Sidebar}/>
      </SwiperSlide>
      <SwiperSlide>
       <img src={Ecommerce}/>
      </SwiperSlide>
      <SwiperSlide>
       <img src={MusicApp}/>
      </SwiperSlide>
      <SwiperSlide>
       <img src={HDC}/>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Portfolio