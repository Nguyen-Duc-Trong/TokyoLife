import React, { useMemo, useState } from 'react';
import dataNavbar from "./dataNavbar";
import {FaAngleRight} from "react-icons/fa"

const PopupHeader = () => {
    return(
        <div className="flex box-border">
            <ul className="flex justify-around mx-[10px] relative h-[100%] ">
                {dataNavbar.map((it)=>{
                    return (
                        <li key={it.id} className="mx-[10px] block py-[20px] px-[5px] group">
                            <div className='cursor-pointer'>{it.title}</div>
                            <div className="absolute py-[20px] left-[-48%] top-[55px] hidden mr-5 group-hover:block">
                                <div className="flex w-[76vw] min-h-[300px] ">
                                    <div className="w-[320px] h-[500px] bg-[#ececec]">
                                        <ul className="  realtive">
                                            {it.detail.map((it)=>{
                                            return (
                                                <div className='flex justify-between items-center group/gr2 hover:bg-black hover:text-white p-[10px] px-[10px] w-[90%] m-auto mt-[10px] rounded-[5px] cursor-pointer'>
                                                    <li key={it.id} className="font-semibold">
                                                        {it.title}
                                                        <div
                                                            className="absolute w-[50vw] bg-white left-[320px] top-[0px] h-[500px] ">
                                                            <ul
                                                                className=" flex flex-wrap bg-white py-[10px] ml-[15px]">
                                                                {it.detailChild.map((it,index)=>{
                                                                return(
                                                                <li key={index} className={` ${index !==0 ? "hidden "
                                                                    : "z-0" } w-[205px] bg-white mr-[30px] pr-[20px]
                                                                    pt-[10px] group-hover/gr2:z-50 group-hover/gr2:block
                                                                    `}>
                                                                    <h3 className="text-[#000000] font-bold">{it.title}
                                                                    </h3>
                                                                    <ul>
                                                                        {
                                                                        it.subtitle.map((it, index)=>{
                                                                        return (
                                                                        <li className="text-black" key={index}>{it}</li>
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
                                                        <FaAngleRight/>
                                                    </span>
                                                </div>
                                            )
                                            })

                                            }
                                        </ul>
                                    </div>
                                    <div className="w-[50vw] bg-white mr-[10px] p-[10px]">
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