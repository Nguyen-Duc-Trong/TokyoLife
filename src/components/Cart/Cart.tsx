"use client"
import React ,{useEffect}from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import {dataProduct} from "@/components/PageHome/dataPageHome"
import {deleteProduct, increment, decrement  } from "@/redux/slides/userSlide"
import {BsTrash} from "react-icons/bs"
import {IoIosArrowDown} from "react-icons/io"
import Link from "next/link";
import logoCart from 'public/svg/logoCart.svg'

const Cart = () => {
  const listCart = useSelector((state:any)=> state.userSlide.listProductCart);
  const dispatch = useDispatch();
  console.log(listCart);
  const quantityListCart = listCart.length
  const deleteProductCart = (id:any) => {
    dispatch(deleteProduct(id))
  }
  const hanldleIncrement = (id:any)=>{
    dispatch(increment(id))
  }
  const hanldlDecrement = (id:any)=>{
    dispatch(decrement(id))
  }
  const total = ()=>{
    let sum = 0
    listCart.forEach((it:any) => {
       sum += it.price1 * it.quantity
    });
    return sum
  }
  return (
    <div className="container mb-[20px] pt-[25px] box-border pb-[100px]">
        <div className="lg:flex md:block w-[100%]">
          <div className="lg:w-[66%] md:w-[100%] min-h-[200px] mt-[8px]">
            <div className="w-[100%] m-auto bg-white">
              <div className="flex py-[16px] px-[20px] items-center bg-white">
                <p className="font-bold text-[20px] ">GIỎ HÀNG</p>
                <span className="text-[#c92127] ml-[8px] font-normal"> ({quantityListCart} sản phẩm)</span>
              </div>
            </div>
            {
              listCart.length <1 ?
              <div className="h-[100%] bg-white items-center justify-center">
                <p className="flex justify-center font-bold text-[1.5rem] mb-[30px]">không có sản phẩm nào</p>
                <div className="w-fit m-auto">
                  <Image src={logoCart} alt=""></Image>
                </div>
                <div className="w-[30%] m-auto mt-[40px]">
                  <Link href={"/"}>
                    <button className="w-[100%] bg-[#c92127] min-w-[64px] py-[11px] px-[32px] rounded-[4px] mt-[24px] mb-[8px] text-[14px] leading-[18px] font-medium text-white shadow-md shadow-[#00000033]">TIẾP TỤC MUA SẮM</button>
                  </Link>
                </div>
                
              </div>
              :
              <div className="bg-white mt-[8px]">
                <div className="flex">
                  <p className="w-[157px]"></p>
                  <p className="py-[15px] w-[250px] text-[#000000] text-[14px] font-bold">Tên Hàng</p>
                  <p className="py-[15px] w-[15%] text-[#000000] text-[14px] font-bold">Giá</p>
                  <p className="py-[15px] w-[15%] text-[#000000] text-[14px] font-bold">Số Lượng</p>
                  <p className="py-[15px] w-[16%] text-[#000000] text-[14px] text-right font-bold">Tổng tiền</p>
                </div>
                {listCart?.map((it:any)=>{       
                  return(    
                    <div className=" mt-[8px] bg-white flex">
                      <div className="max-w-[166px] mt-[8px] mb-[15px] mx-[20px]">
                        <div className="max-w-[113px] mb-[15px] mr-[20px]">
                          <Image className="w-[100%] h-[150px]" src={it.img} alt="" />
                        </div>
                      </div>
                      <div className="max-w-[250px] pr-[20px]">
                        <Link href={`/detail/${it.id}`}> <p className="text-[14px] font-normal text-[#000000]">
                        {it.title}</p>
                        </Link>
                        <div className="pt-[12px] pb-[8px]">
                          <button
                            className="flex items-center justify-around min-w-[155px] bg-[#f5f5f5] font-medium text-[#52525b] text-[14px] py-[4px]">
                            Chọn phân loại <span>
                              <IoIosArrowDown /></span>
                          </button>
                        </div>
                        <ul>
                          <li>Kích thước </li>
                          <li>Màu sắc</li>
                        </ul>
                      </div>
                      <div className="w-[15%]">
                        <div className="w-[100%] pb-[15px]">
                          <p className="text-[#c92027] text-[14px] font-semibold">{it.price1 * it.quantity}đ</p>
                          <p className="line-through font-normal text-[14px]">{it.price2 * +it.quantity}đ </p>
                        </div>
                      </div>
                      <div className=" w-[15%]">
                        <div className="flex font-bold h-[24px]">
                          <button className="border-y-[1px] border-l-[1px] rounded-l-[4px] w-[25px] flex justify-center items-center py-[3px] px-[9px]" onClick={()=>hanldlDecrement(it.id)}> - </button>
                          <div className="w-[30px] min-w-[30px] flex justify-center items-center border-[1px]">{it.quantity}</div>
                          <button className="border-y-[1px] border-r-[1px] rounded-r-[4px] w-[25px] flex justify-center items-center py-[3px] px-[9px]" onClick={()=>hanldleIncrement(it.id)}> + </button>
                        </div>
                      </div>
                      <div className="w-[16%]">
                        <div>
                          <p className="font-bold text-right ">{it.price1 * it.quantity}đ</p>
                          <button className="flex justify-end mt-[100%] w-[100%] h-[50px]" onClick={()=>deleteProductCart(it.id)}>
                            <BsTrash className="text-[17px]"/>
                          </button>
                        </div>
                      </div>
                    </div>
                  )        
                })}
              </div>
            }
          </div>
          <div className="lg:w-[35%] md:w-[100%] mt-[8px] ml-[16px] h-fit bg-white">
            <div className="py-[30px] px-[20px]">
              <p className="font-bold text-[20px]">ĐƠN HÀNG</p>
              <div className=" flex border-b-[1px] border-dashed border-[#999999] mt-[24px] pb-[16px] justify-between">
                <span className="text-[#555555] font-normal text-[14px]">Tổng giá trị đơn hàng :</span>
                <span className="text-[20px] font-bold leading-[24px] text-[#c92127]"> {total()}đ</span>
              </div>
              <button
                className="w-[100%] bg-[#c92127] min-w-[64px] py-[11px] px-[32px] rounded-[4px] mt-[24px] mb-[8px] text-[14px] leading-[18px] font-medium text-white shadow-md shadow-[#00000033]">TIẾP
                TỤC THANH TOÁN ➔</button>
              <p className="text-[12px] font-normal text-[#333] leading-[1.5]">
                Dùng mã giảm giá của <span className="font-semibold text-[#c92127]">TokyoLife</span> trong bước tiếp
                theo
              </p>
            </div>
          </div>
        </div>
  </div>   
)}
export default Cart
