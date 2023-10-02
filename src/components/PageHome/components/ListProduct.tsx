import React from "react";
import { dataProduct } from "../dataPageHome";
import Product from "@/components/Product/Product";
import { Button } from "antd/es/radio";
import Link from "next/link";
import { Col, Row } from 'antd';


interface Props {
    data?: any;
  }

const ListProduct = () => {
    return(
        <div>
            {/* <Row gutter={[16,16]}>
                {dataProduct.map((it)=>{
                    return(
                        <Col xs={12} sm={12} md={8} lg={6} xl={4}  span={5} >
                            <Product key={it.id} data={it} />
                        </Col>
                    )
                })}
            </Row> */}
            <div className="grid lg:grid-cols-5 gap-5 md:grid-cols-2  ">
                {dataProduct.map((it)=>{
                    return(
                        <Product key={it.id} data={it} />
                    )
                })}
            </div>
            <div className="flex justify-center items-center mt-[10px]">
                <Link href={'/'}>
                    <button className="bg-[#252a2b] py-[12px] px-[28px] text-[#ffffff] hover:bg-[#000000] hover:text-[#ffffff]">
                        <span className=" text-[13px] font-medium">XEM THÊM SẢN PHẨM PHỤ KIỆN BALO 50%</span>
                    </button>
                </Link>
                
            </div>
        </div>
       
    )
}

export default ListProduct