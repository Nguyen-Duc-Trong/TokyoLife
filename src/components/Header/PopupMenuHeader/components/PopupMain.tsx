import React from "react";
import dataNavbar from "../dataNavbar";
import {FaAngleRight} from "react-icons/fa"

const PopupMain = () => {
    return(
        <div className='w-[100%]'>
            {dataNavbar.map((it)=>{
                return(
                    <div className='w-[100%]' key={it.id}>
                    <div
                        className="absolute w-[1140px] m-auto z-[1] py-[20px] left-[-48%] top-[55px] hidden mr-5 group-hover:block">
                        <div className="flex w-[76vw] min-h-[300px] ">
                            <div className="w-[320px] h-[500px] bg-[#ececec]">
                                <ul className="  realtive">
                                    {it.detail.map((it)=>{
                                    return (
                                    <div
                                        className='flex justify-between items-center group/gr2 hover:bg-black hover:text-white p-[10px] px-[10px] w-[90%] m-auto mt-[10px] rounded-[5px] cursor-pointer'>
                                        <li key={it.id} className="font-semibold">
                                            {it.title}
                                            <div
                                                className="absolute w-[50vw] bg-white left-[320px] top-[0px] h-[500px] ">
                                                <ul
                                                    className=" flex flex-wrap bg-white py-[10px] ml-[15px] mt-[10px]">
                                                    {it.detailChild.map((it,index)=>{
                                                    return(
                                                    <li key={index} className={` ${index !==0 ? "hidden "
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
                            <div className="w-[50vw] bg-white mr-[10px] p-[10px]">
                            </div>
                        </div>
                    </div>
                </div>
                )
            })}
       
    </div>
    )
}

export default PopupMain