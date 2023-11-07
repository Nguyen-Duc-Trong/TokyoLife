"use client";
import React from "react";
import {FC} from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {dataProduct} from "@/components/PageHome/dataPageHome"
import { addToCart } from "@/redux/slides/userSlide";

interface Props {
    id?: any;
  }
const Detail: FC<Props> = (id: any) => {
    const dispatch = useDispatch();
    const hihiId =id.id.params.id
    const addProductToCart = (it:any) => {
    dispatch(addToCart(it))
   }

   

return (
    <div className="flex justify-center items-center p-[50px]">
       
        {dataProduct.map((it)=>{
            if(it.id===hihiId){
                return(
                    <div className="flex">
                        <Image className="w-[200px] h-[250px]" src={it.img} alt="" />
                        <div className="">
                            <p> <b>{it.title}</b></p>
                            <button className="mx-[10px] bg-red-400" onClick={() => addProductToCart(it)}>THÊM VÀO GIỎ HÀNG</button>
                        </div>
                    </div>
                )
            }
        })}
       
    </div>
)
  
}

export default Detail