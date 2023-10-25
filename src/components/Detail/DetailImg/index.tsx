"use client";
import React, { FC, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Button } from "antd";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
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
import "./style.scss";
// import ImageItem from "./ImageItem";
interface listImg {
  handleActive: any;

  data: any;
}
const ListImg: FC<listImg> = ({ handleActive, data }) => {
  return <img width={96} src={data.img} alt="" />;
};
const DetailImg = () => {
  const [isBorder, setIsBorder] = useState(false);
  const [dataImg, setDataImg] = useState([
    {
      id: uuidv4(),
      img: "https://pm2ec.s3.amazonaws.com/cms/products/F9UVJ056M-025/ba5a03c228db45ec872f8d2d99532f9e_thumbnail.jpg",
      active: true,
    },
    {
      id: uuidv4(),
      img: "https://pm2ec.s3.amazonaws.com/cms/products/F9UVJ056M-001/4d74eeeb41874cef8447eb9d97967e0c_thumbnail.jpg",
      active: false,
    },
    {
      id: uuidv4(),
      img: "https://pm2ec.s3.amazonaws.com/cms/products/F9UVJ056M-005/1f2ae6bd209a4589a75c73b60318c4f6_thumbnail.jpg",
      active: false,
    },
  ]);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
  const handleActive = (id: string) => {
    const newArr = dataImg.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          active: true,
        };
      }

      return {
        ...item,
        active: false,
      };
    });
    setDataImg(newArr);
  };

  return (
    <div className="flex">
      <Swiper
        onSwiper={setThumbsSwiper}
        watchSlidesProgress={true}
        slidesPerView={3}
        width={130}
        direction="vertical"
        className="mySwiper1"
        spaceBetween={30}
        freeMode={true}
        modules={[Navigation, Thumbs, FreeMode]}
      >
        {dataImg.map((item) => (
          <SwiperSlide>
            <ListImg key={item.id} handleActive={handleActive} data={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        cssMode={true}
        // autoplay={true}
        thumbs={{ swiper: thumbsSwiper }}
        width={430}
        navigation={true}
        loop={true}
        pagination={{ clickable: false }}
        modules={[Pagination, Navigation, Autoplay, Thumbs]}
        className="swiper_style mySwiper2"
      >
        {/* cái lày */}
        <SwiperSlide>
          <img
            src="https://pm2ec.s3.amazonaws.com/cms/products/F9UVJ056M-001/4d74eeeb41874cef8447eb9d97967e0c_optimized_original_image.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://pm2ec.s3.amazonaws.com/cms/products/F9UVJ056M-005/97e2d21f594d487fa612faa7f05db82b_optimized_original_image.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://pm2ec.s3.amazonaws.com/cms/products/F9UVJ056M-020/0186b429276e487ca6e7ff57f10da468_optimized_original_image.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DetailImg;
