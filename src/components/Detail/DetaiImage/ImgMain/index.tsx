import React, { FC, useState } from "react";
import Image from "next/image";
import "./style.scss";
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

interface dataImage {
  dataImages: any[];
}
const ImgMain: FC<dataImage> = ({ dataImages }) => {
  console.log("data", dataImages);

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
  return (
    <div>
      <div className="ml-[80px] relative">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          cssMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          thumbs={{ swiper: thumbsSwiper }}
          width={430}
          navigation={true}
          loop={true}
          pagination={true}
          modules={[Pagination, Navigation, Autoplay, Thumbs]}
          className="swiper_style mySwiper2"
        >
          {dataImages.map((item: any) => (
            <SwiperSlide key={item.id}>
              <Image src={item.img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImgMain;
