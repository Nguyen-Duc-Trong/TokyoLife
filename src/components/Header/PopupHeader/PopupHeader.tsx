import React, { useMemo, useState } from 'react';
import dataNavbar from "./dataNavbar";
import {FaAngleRight} from "react-icons/fa"
import Link from 'next/link';

const PopupHeader = () => {
    return(
        <div className="md:block flex box-border ">
            <ul className="flex justify-around mx-[10px] h-[100%] ">
                {dataNavbar.map((it)=>{
                    return (
                        <li key={it.id} className="mx-[10px] block py-[20px] px-[5px] group">
                            <Link href={it.url}>
                                <div className='cursor-pointer text-[16px]'>{it.title}</div>
                            </Link>
                            <div className='w-[100%]'>
                                <div className="absolute container m-auto z-[100] py-[19px] left-[160px] top-[44px] hidden mr-5 group-hover:block">
                                    <div className="flex w-[1212px] min-h-[300px] ">
                                        <div className="w-[350px] h-[500px] bg-[#ececec]">
                                            <ul className="  realtive">
                                                {it.detail.map((it)=>{
                                                return (
                                                <div  key={it.id}  className='flex justify-between items-center group/gr2 hover:bg-black hover:text-white p-[10px] px-[10px] w-[90%] m-auto mt-[10px] rounded-[5px] cursor-pointer'>
                                                    <li  className="font-semibold">
                                                        <Link href={it.url}>
                                                            <span>
                                                                {it.title}
                                                            </span>
                                                        </Link>
                                                        <div className="absolute w-[50vw] bg-white left-[350px] top-[20px] h-[500px] ">
                                                            <ul className=" flex flex-wrap bg-white pb-[10px] ml-[15px] mt-[10px]">
                                                                {it.detailChild.map((it,index)=>{
                                                                return(
                                                                <li key={it.id} className={` ${index !==0 ? "hidden "
                                                                    : "z-0" } w-[205px] bg-white mr-[30px] pr-[20px]
                                                                    pt-[10px] group-hover/gr2:z-50 group-hover/gr2:block
                                                                    `}>
                                                                    <h3 className="text-[#000000] pb-[10px] font-bold">
                                                                        {it.title}
                                                                    </h3>
                                                                    <ul>
                                                                        {
                                                                        it.subtitle.map((it, index)=>{
                                                                        return (
                                                                        <li className="text-black text-[14px]"
                                                                            key={index}>{it}</li>
                                                                        )
                                                                        })
                                                                        }
                                                                    </ul>
                                                                </li>
                                                                )
                                                                })
                                                                }
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <span>
                                                        <FaAngleRight />
                                                    </span>
                                                </div>
                                                )
                                                })
                                                }
                                            </ul>
                                        </div>
                                        <div className="w-[850px] bg-white mr-[10px] p-[10px]">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default PopupHeader