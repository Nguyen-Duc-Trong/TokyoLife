import React from "react";
import { dataProduct } from "../dataPageHome";
import Product from "@/components/Product/Product";
import { Button } from "antd/es/radio";
import Link from "next/link";

interface Props {
    data?: any;
  }

const ListProduct = () => {
    return(
        <React.Fragment>
            <div className="md:flex flex-wrap container">
                {dataProduct.map((it)=>{
                    return(
                        <Product key={it.id} data={it}/>
                    )
                })}
            </div>
            <div className="flex justify-center items-center">
                <Link href={'/'}>
                    <button className="bg-[#252a2b] py-[12px] px-[28px] text-[#ffffff] hover:bg-[#000000] hover:text-[#ffffff]">
                        <span className=" text-[13px] font-medium">XEM THÊM SẢN PHẨM PHỤ KIỆN BALO 50%</span>
                    </button>
                </Link>
                
            </div>
        </React.Fragment>
       
    )
}

export default ListProduct