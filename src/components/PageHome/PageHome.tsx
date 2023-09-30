"use client";
import React from "react";
import Banner from "./components/Banner/Banner";
import Promotion from "./components/Promotion/Promotion";
import SliderProduct from "../SliderProduct/SliderProduct";
import { dataProduct } from "../PageHome/dataPageHome";
import Image from "next/image";
import Link from "next/link";
import ListProduct from "./components/ListProduct";

const PageHome = () => {
    return(
       
        <div className="container bg-[#f7f7f7]">
            <Banner/>
            <Promotion/>
            <div className="mb-[50px]">
                <div className="mb-[30px]">
                    <Image src="/img/FlashSale/bannerfls.png" width={1200} height={280} alt="" />
                    <Link href={'/'}> 
                        <span>Xem tất cả</span>
                    </Link>
                </div>
                <SliderProduct data={dataProduct} />
            </div>
            <div className="mb-[50px]">
                <div>
                    <Image src="/img/Banner/bn5.png" width={1200} height={280} alt=""/>
                    <Link href={'/'}>
                        <div className="flex justify-between mt-[20px] mb-[30px]">
                            <h2 className="text-[24px] font-bold">PHỤ KIỆN BALO 50%</h2>
                            <span>Xem tất cả</span>
                        </div>
                    </Link>
                </div>
                <ListProduct/>
            </div>
        </div>
    )
}

export default PageHome