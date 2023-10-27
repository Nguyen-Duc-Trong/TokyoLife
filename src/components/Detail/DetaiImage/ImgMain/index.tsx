import React, { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  Pagination,
  Navigation,
  Thumbs,
  FreeMode,
} from "swiper/modules";
export interface SliderDetail {
  img: any;
}
const ImgMain = ({ img }: SliderDetail) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
  return (
    <div>
      <div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          cssMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          // autoplay={true}
          thumbs={{ swiper: thumbsSwiper }}
          width={430}
          navigation={true}
          loop={true}
          pagination={true}
          modules={[Pagination, Navigation, Autoplay, Thumbs]}
          className="swiper_style mySwiper2"
        >
          <SwiperSlide>
            <img src={img} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ImgMain;
