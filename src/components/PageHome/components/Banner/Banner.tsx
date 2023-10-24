import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import bn1 from "public/img/Banner/bn1.png"
import bn2 from "public/img/Banner/bn2.png"
import bn3 from "public/img/Banner/bn3.png"
import bn4 from "public/img/Banner/bn4.png"

import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import required modules

const Banner = () => {
  return (
    <section className='w-full'>
      <div className=' '>
        <Swiper spaceBetween={30}  centeredSlides={true} autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }} 
        pagination={{
          clickable: true,
        }} 
        navigation={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper">
          <SwiperSlide>
            <Image src={bn1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={bn2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={bn3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={bn4} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Banner
