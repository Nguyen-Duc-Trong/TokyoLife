"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "next/image";
import Link from "next/link";

const Product = (props: any) => {
    const {data} = props
    return(        
        <div key={data.id} className=" bg-[#ffffff] mx-[5px]">
           <Link href={`/detail/${data.id}`}>
                <div className="relative h-fit">
                    <Image className="max-h-[320px]" src={data.img} alt="" />
                    <div className="absolute top-[5px] left-[5px] bg-[#ff0000] tracking-[0.5px] z-3 text-[#fff] text-[12px] font-medium py-[2px] px-[5px]">
                        <span>-50%</span>
                    </div>
                </div>
                <div className="px-[10px] pt-[12px] pb-[10px]">
                    <p className="text-[11px] text-[#666666] font-normal mb-[4px]">{data.subTitle}</p>
                    <h3 className="text-[14px] mb-[8px] font-medium">{data.title}</h3>
                    <p>
                        <span className="text-[#c92027] text-[14px] font-semibold mr-[5px]">{data.price1}</span>
                        <span className="text-[#cecece] text-[13px] font-light line-through">{data.price2}</span>
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default Product