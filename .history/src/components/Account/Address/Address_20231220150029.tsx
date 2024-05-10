"use client";

import React,{useState, memo} from "react";

import Link from "next/link"

import PopupAddress from "./PopupAddress"
import { dataAccount } from "../dataAccount"
import {BiDisc} from "react-icons/bi"
import {BsPencilSquare} from "react-icons/bs"
import {FaTimes} from "react-icons/fa"

export default function Home() {
    const [openPopupAddress, setOpenPopupAddress] = useState(false);
    const [openPopupUpdteAddress, setOpenUpdteAddress] = useState(false)    

    return (
        <section>
            <div className='container '>
                <div className="text-center mt-[40px] mb-[30px]">
                    <h1 className="text-[25px] font-bold pb-[15px]">Thông tin địa chỉ</h1>
                    <hr className="border-[2.5px] border-solid w-[70px] border-[#000000] m-auto" />
                </div>
                <div className="lg:flex md:block mb-[50px] min-h-[75vh]">
                    <div className="lg:w-[30%] mx-[15px] py-[20px] px-[15px] h-fit bg-[#ffffff]">
                        <h3 className="mb-[10px] text-[15px] font-bold uppercase">Tài khoản</h3>
                        <ul>
                            <Link href="/account">
                            <li className="flex items-center py-[5px] text-[#252a2b]">
                                <span className="text-[8px] mr-[8px]">
                                    <BiDisc /></span>
                                Thông tin tài khoản
                            </li>
                            </Link>
                            <Link href={"/account/address"}> <li className="flex items-center py-[5px] text-[#252a2b]">
                            <span className="text-[8px] mr-[8px]">
                                <BiDisc /></span>
                            Danh sách địa chỉ
                            </li>
                            </Link>
                            <Link href="/account/register">
                            <li className="flex items-center py-[5px] text-[#252a2b]">
                                <span className="text-[8px] mr-[8px]">
                                    <BiDisc /></span>
                                Đăng xuất
                            </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="w-[100%] ml-[10px] xl:flex md:block bg-[#f7f7f7] relative">
                        <div className="xl:w-[50%] mr-[15px]">
                            {dataAccount.map((it)=>{
                            return(
                            <div className="flex items-center bg-[#d9edf7] justify-between py-[14px] px-[10px]">
                                <h3 className="font-medium">
                                    <b className="text-[14px]">{it.title}</b>
                                    <span> (Địa chỉ mặc định)</span>
                                </h3>
                                <p className="flex justify-center items-center">
                                    <span className="px-[15px] text-[16px] font-black"
                                        onClick={()=>setOpenPopupAddress(!openPopupAddress)}>
                                        <BsPencilSquare />
                                    </span>
                                    <span className="text-[16px]">
                                        <FaTimes />
                                    </span>
                                </p>
                            </div>
                            )
                            })}
                            {openPopupAddress ? <PopupAddress />: ""}
                            <div className=" pt-[5px] px-[15px] pb-[15px] bg-[#ffffff] ">
                                {dataAccount.map((it)=>{
                                    return(
                                        <div key={it.id}>
                                            <div className="mb-[18px]">
                                                <b className="">{it.title}</b>
                                            </div>
                                            <div className="mb-[8px]">
                                                <b>Công ty:</b>
                                            </div>
                                            <div className="flex mb-[8px]">
                                                <div className="w-[35%] h-[40px]">
                                                    <b>Địa chỉ:</b>
                                                </div>
                                                <div className="w-[65%]">
                                                    <p className="mb-[10px]"></p>
                                                    <p className="mb-[10px]"></p>
                                                    <p> , {it.nationality}</p>
                                                </div>

                                            </div>
                                            <div className="flex mb-[8px]">
                                                <div className="w-[35%]">
                                                    <b>Số điện thoại:</b>
                                                </div>
                                                <div className="w-[65%]">
                                                    <span>{it.phone}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="lg:w-[50%] mx-[15px]">
                            <input className="w-[100%] bg-[#323232] text-[#fff]
                             text-center font-semibold p-[10px]" type="submit" 
                             value="NHẬP ĐỊA CHỈ MỚI"  onClick={()=>setOpenUpdteAddress(!openPopupUpdteAddress)}/>
                            {openPopupUpdteAddress ? <PopupAddress />: ""}
                        </div>
                    </div>
                </div>
                <div className="mb-[40px]">
                    <div className="mt-[10px] pb-[5px] w-[67%] m-auto">
                        <span className="text-[16px] font-normal text-[#252a2b] ">
                            Đăng kí email để nhận ưu đãi từ TOKYOLIFE
                        </span>
                    </div>
                    <div className="flex justify-center items-center">
                        <input
                            className="h-[50px] w-[55%] border-[1px] outline-none rounded-l-[3px] border-solid border-[#00000059] py-[15px] px-[10px]"
                            type="email" placeholder="Nhập email của bạn" />
                        <button
                            className="h-[50px] flex justify-center items-center w-[12%] py-[17px] px-[10px] text-[16px] font-medium bg-black text-[#ffffff]">Đăng
                            ký</button>
                    </div>
                </div>
            </div>
    </section>
    )
}
