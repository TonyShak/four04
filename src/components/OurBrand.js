import React from "react"
import { useRef,useEffect,useState } from "react"
import images from "./images"
import '../css/brand.css'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';



const Ourbrand = () => {

  

return (

    <div className="">
        
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={10}
        loop={true}
        grabCursor={true}
        modules={[Pagination]}
        className="mySwiper"
      >
       
        {images.map((image)=>{
            return (
                <SwiperSlide className="">
                    <img src={image} alt=""/>
                </SwiperSlide>
            );
            })}
      </Swiper>
    </>
    </div>


)



}

export default Ourbrand



