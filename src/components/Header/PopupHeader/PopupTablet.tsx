import React, { memo, useState } from 'react';
import dataNavbar from "./dataNavbar";
import {FaAngleRight} from "react-icons/fa"
import Link from 'next/link';
import { Button, Popover, Space } from 'antd'

const PopupTablet = () => {
    const [show,setShow]= useState(0)  
    return(
        <div className="min-h-[100vh] w-[70vw] box-border p-[20px] pt-[0] relative ">
            <div className="absolute w-[100vw] h-[100vh] left-[0] top-0  bg-[rgba(115,115,115,0.7)] z-[-100]" ></div>
            <ul className="flex mx-[10px] h-[100%] overflow-x-scroll overscroll-none ">
                {dataNavbar.map((it,index)=>{
                    return (
                        <React.Fragment>
                            <li  onClick={()=>setShow(index)}  key={it.id} className=" block group border-r-2 ">
                                <Link href={it.url}>
                                    <div className={`${index === show ? " border-b-2 border-[#000000] bg-[#ffffff]" : ""} cursor-pointer w-[100px] h-[49px] flex justify-center items-center p-[10px] bg-[#ffffff] `}>
                                        <span className= {`${index === show ? "text-black" : ""} text-[14px] font-black text-[#999999]`}>{it.title}</span>
                                    </div>
                                </Link>
                            </li>
                            {/* <div className="absolute w-[100%] bg-white min-h-[70vh] left-[0px] top-[30px]" >
                                {dataNavbar[show].detail.map((it)=>{
                                    return (
                                    <ul
                                        className='flex justify-between items-center p-[10px] px-[10px] w-[90%] m-auto mt-[10px] rounded-[5px] cursor-pointer'>
                                        <li key={it.id} className="">
                                            <Link href={it.url}>
                                            <ul className=' text-[16px] '>
                                                <li className='ml-[10px] font-bold'>
                                                    {it.title}
                                                </li>
                                                <li >
                                                    <ul>
                                                        <li >
                                                            {it.detailChild.map((it)=>{
                                                            return (
                                                            <div key={it.id} className="text-[16px] text-[#000000]">
                                                                <p className=' ml-[25px]'>{it.title}</p>
                                                                {it.subtitle.map((it)=>{
                                                                return (
                                                                <p className='ml-[35px]'>{it}</p>
                                                                )
                                                                })
                                                                }
                                                            </div>
                                                            )
                                                            })
                                                            }
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            </Link>
                                        </li>
                                    </ul>
                                    )
                                })
                                }
                            </div> */}
                        </React.Fragment>
                    )
                })
                }
            </ul>
            <div className="absolute w-[100%] bg-white min-h-[70vh] left-[0px] top-[65px]" >
                {dataNavbar[show].detail.map((it)=>{
                return (
                <ul
                    className='flex justify-between items-center p-[10px] pt-[0] mt-[0] px-[10px] w-[90%] m-auto rounded-[5px] cursor-pointer'>
                    <li key={it.id} className="">
                        <Link href={it.url}>
                        <ul className=' text-[16px] '>
                            <li className='ml-[10px] font-bold'>
                                {it.title}
                            </li>
                            <li>
                                <ul>
                                    <li>
                                        {it.detailChild.map((it)=>{
                                        return (
                                        <div key={it.id} className="text-[16px] text-[#000000]">
                                            <p className=' ml-[25px]'>{it.title}</p>
                                            {it.subtitle.map((it)=>{
                                            return (
                                            <p className='ml-[35px]'>{it}</p>
                                            )
                                            })
                                            }
                                        </div>
                                        )
                                        })
                                        }
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        </Link>
                    </li>
                </ul>
                )
                })
                }
            </div>
        </div>
    )
}

export default memo(PopupTablet) 