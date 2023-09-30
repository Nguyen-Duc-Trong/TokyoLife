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

};
return(
    <div>
        <Slider {...settings} >
            {data?.map((it:any)=>
            <Product key={it.id} data={it} /> )}
        </Slider>
    </div>
  
)
}

export default SliderProduct