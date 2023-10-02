"use client";
import React from "react";
import Product from "@/components/Product/Product";
import { FC} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderProduct.scss"

import Slider from "react-slick";

interface Props {
    data?: any;
  }
const SliderProduct: FC<Props> = ({data}) => {

const settings = {
dots: false,
infinite: true,
speed: 500,
slidesToShow: 5,
slidesToScroll: 1,
autoplay:true,
autoplaySpeed: 2500,
responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: true,
        dots: false,
        centerPadding: '120px',
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: '96px', 
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '96px',    
      }
    }
]
};

return(
    <div >
        <Slider {...settings} >
            {data?.map((it:any)=>
            <Product key={it.id} data={it} /> )}
        </Slider>
    </div>
  
)
}

export default SliderProduct