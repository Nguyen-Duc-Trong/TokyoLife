"use client";
import React from "react"

import Link from "next/link"
import { dataAccount } from "./dataAccount"
import {BiDisc} from "react-icons/bi"


const Account =(props:any) => {
    const {hanldesetChangeLogout} = props
    return (
        <section>
            <div className='container '>
                <div className="text-center mt-[40px] mb-[30px]">
                    <h1 className="text-[25px] font-bold pb-[15px]">Tài khoản của bạn</h1>
                    <hr className="border-[2.5px] border-solid w-[70px] border-[#000000] m-auto"/>
                </div>
                <div className="lg:flex md:block mb-[50px]">
                    <div className="lg:w-[30%] mx-[15px] py-[20px] px-[15px] h-fit bg-[#ffffff]">
                        <h3 className="mb-[10px] text-[15px] font-bold uppercase">Tài khoản</h3>
                        <ul>
                            <Link href="/account">
                                <li className="flex items-center py-[5px] text-[#252a2b]">
                                    <span className="text-[8px] mr-[8px]"><BiDisc/></span>
                                    Thông tin tài khoản
                                </li>
                            </Link>
                            <Link href={"/account/address"}>
                                <li className="flex items-center py-[5px] text-[#252a2b]">
                                    <span className="text-[8px] mr-[8px]"><BiDisc/></span>
                                    Danh sách địa chỉ
                                </li>
                            </Link>
                            <Link href="/">
                                <li className="flex items-center py-[5px] text-[#252a2b]">
                                    <span className="text-[8px] mr-[8px]"><BiDisc/></span>
                                    Đăng xuất
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="w-[100%] ml-[10px] bg-[#f7f7f7]"> 
                        <div className="bg-[#ffffff] px-[15px] py-[8px]">
                            <p className="pb-[8px] text-[15px] font-bold border-b-[1px] border-solid border-[#ededed] uppercase">Thông tin tài khoản</p>
                            {dataAccount.map((it)=>{
                                return(
                                    <div className="" key={it.id}>
                                        <h2 className="text-[16px] font-medium mt-[10px] mb-[5px] text-black">{it.title}</h2>
                                        <p className="mb-[3px]">{it.email}</p>
                                        <p className="mb-[3px]">{it.nationality}</p>
                                        <p className="mb-[3px]">{it.phone}</p>
                                    </div>
                                )
                            })}
                            <Link href={"/account/address"}>
                                <p className="font-medium mt-[5px] mb-[15px] underline text-[#000000]">Xem địa chỉ</p>
                            </Link>
                        </div>
                        <div className="bg-[#d9edf7] py-[8px] px-[10px] my-[20px]">
                            <div className="bg-[#ffffff] p-[10px]">
                                {dataAccount.map((it)=>{
                                    return <p className="mb-[10px]">{it.status}</p>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-[40px]">
                    <div className="mt-[10px] pb-[5px] w-[67%] m-auto">
                        <span className="text-[16px] font-normal text-[#252a2b] ">
                            Đăng kí email để nhận ưu đãi từ TOKYOLIFE
                        </span> 
                    </div>
                    <div className="flex justify-center items-center mb-[40px]">
                        <input className="h-[50px] w-[55%] border-[1px] rounded-l-[3px] border-solid border-[#00000059] py-[15px] px-[10px]  outline-none" type="email"  placeholder="Nhập email của bạn" />
                        <Link className="contents" href={"account/register"}>
                            <button className="h-[50px] flex justify-center items-center w-[12%] py-[17px] px-[10px] text-[16px] font-medium bg-black text-[#ffffff]">Đăng ký</button>
                        </Link>
                    </div>
               </div>
            </div>
        </section>
    )
}

export default Account