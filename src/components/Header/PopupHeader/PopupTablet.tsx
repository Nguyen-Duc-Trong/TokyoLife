import React, { memo, useState } from 'react';
import dataNavbar from "./dataNavbar";
import {FaAngleRight} from "react-icons/fa"
import Link from 'next/link';
import { Button, Popover, Space } from 'antd'
import {AiFillCloseSquare} from "react-icons/ai"
const PopupTablet = (props:any) => {
    const {setOpen}= props
    const [show,setShow]= useState(0)  
    return(
        <div className="min-h-[100vh] w-full box-border  pt-[0] top-0 left-0 fixed ">
            <div className="absolute w-[100vw] h-[100vh] left-[0] top-0 z-[11] bg-[rgba(115,115,115,0.7)] "  onClick={()=> setOpen(false)}></div>
           <div className='w-[80%]  relative flex top-0 left-0  z-20'>
           <div className=' w-full min-h-[100vh] bg-[#fff] '>
       
           <ul className="flex w-full h-[49px]  overflow-x-auto   " >
                {dataNavbar.map((it,index)=>{
                    return (
                        <React.Fragment>
                            <li  onClick={()=>setShow(index)}  key={it.id} className=" block group border-r-2 ">
                                <Link href={it.url}>
                                    <div className={`${index === show ? "text-[#000000] border-b-2 border-[#000000] bg-[#ffffff]" : "text-[#999999]"} cursor-pointer w-[100px] h-[49px] flex justify-center items-center p-[10px] bg-[#ffffff] `}>
                                        <span className= {`${index === show ? "text-[#000000]" : "text-[#999999]"} text-[14px] font-black text-[#999999]`}>{it.title}</span>
                                    </div>
                                </Link>
                            </li>
                            
                        </React.Fragment>
                    )
                })
                }
            </ul>
            <div className=" w-[100%]  " >
                {dataNavbar[show].detail.map((it)=>{
                return (
                <ul
                    className='flex justify-between items-center p-[10px] pt-[0] mt-[0] px-[10px] w-[90%] m-auto rounded-[5px] cursor-pointer'>
                    <li key={it.id} className="">
                        <Link href={it.url}>
                        <ul className=' text-[16px] '>
                            <li className='ml-[10px] pb-[16px] font-bold'>
                                {it.title}
                            </li>
                            <li>
                                <ul>
                                    <li>
                                        {it.detailChild.map((it)=>{
                                        return (
                                        <div key={it.id} className="text-[16px] text-[#000000]">
                                            <p className=' ml-[25px] pb-[16px]'>{it.title}</p>
                                            {it.subtitle.map((it)=>{
                                            return (
                                            <p className='ml-[35px] pb-[16px]'>{it}</p>
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
           <AiFillCloseSquare  className="p-[0] bg-slate-300 text-[30px] w-[52px] h-[52px]"  onClick={()=>setOpen(false)}/>
           </div>
          
        </div>
    )
}

export default memo(PopupTablet) 