import React from 'react';
import './Testimonial.css';
import { Swiper,SwiperSlide } from 'swiper/react'; 
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css'

const Testimonial = () => {

   const clients =[
        {
            img: profilePic1,
            review:
            "Your positivity motivates us even on the hardest days. I can honestly say that I have never met someone as positive and hard-working as you. Your attitude towards work is admirable, and I believe you will achieve great things in the future. "
        },
       { img: profilePic2,
            review:
            "I am so lucky to work with you because you can bring innovative ideas and a fresh perspective on the project.Thank you for your meticulous work on this project. We could not have done it without you"
       },
       {
        img: profilePic3,
            review:
            "You have elevated this project with your hard work and great ideas. Thank you for your contributions.I truly appreciate the time and effort you have put into this project"
       },
       {
        img: profilePic4,
            review:
            "I appreciate your guidance and encouragement on our latest project. I would not have been able to do it without you.Please allow me to express my gratitude for the extra time and effort you put into this project."
       }
    ]

  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className='t-heading'>
            <span>Clients always get</span>
            <span>Exceptional Work</span>
            <span>From me...</span>
            <div className='blur t-blur1' style={{ background: "var(--purple)"}}></div>
            <div className='blur t-blur2' style={{ background: "var(--skyblue)"}}></div>
        </div>
          
        <Swiper 
         modules={[Pagination]}
         slidesPerView={1}
         pagination={{clickable:true}}
         grabCursor={true}
        >
            {clients.map((client, index)=>{
              return(
                <SwiperSlide key={index}>
                    <div className="testimonial">
                    <img src={client.img}/>
                    <span>{client.review}</span>
                    </div>
                </SwiperSlide>
              )  
              })}
        </Swiper>
    </div>
  )
}

export default Testimonial