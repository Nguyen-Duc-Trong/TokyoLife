"use client";
import React,{useState, memo} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {MdOutlineMenu} from "react-icons/md"
import PopupHeader from "./PopupHeader/PopupHeader";
import PopupMain from "./PopupHeader/components/PopupMain";
import PopupTablet from "./PopupHeader/PopupTablet";
import {AiFillCloseSquare} from "react-icons/ai"
const Header = () => {

const [open,setOpen ] = useState(false)
return (
<header className="h-[65px] w-[100%] flex justify-center items-center bg-[#fff] fixed top-0 z-[1000] ">
  
  <div className="md:flex justify-between container items-center ">
    <div className=" top-[5px] text-[3rem]" >
      <MdOutlineMenu className=" text-[3rem] xl:hidden md:max-xl:block " onClick={()=>setOpen(!open)} />
      <div className={`absolute bg-white top-[65px]
       left-[-34px] min-w-[300px] 
       ${ open ? "md:max-xl:block " : " hidden" } `}>
        <AiFillCloseSquare  className="absolute p-[0] bg-slate-300 text-[30px] right-[-30px]"  onClick={()=>setOpen(!open)}/>
        <PopupTablet  />
      </div> 
    </div>
    <h1 className="md:block cursor-pointer">
      <img className="w-[220px]"
        src="https://file.hstatic.net/200000532555/file/logo-tkl-01_50c40d291088493182dd995d3da9e130.png" alt="" />
    </h1>

    <div className=" md:max-xl:hidden">
      <PopupHeader />
    </div>
    <div className="flex">
      <button className="border rounded-3xl">
        <svg className="mx-[19px] my-[10px] svg search" height="18px" width="25px" viewBox="0 0 24 24" fill="#c5cee0">
          <path
            d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z">
          </path>
        </svg>
      </button>
      <div className="flex flex-col items-center ml-[25px] cursor-pointer">
        <span className="text-#4a4a4a mb-[5px]">
          <FontAwesomeIcon size="xl" icon={faUser} />
        </span>
        <span className="text-[12px]">Tài khoản</span>
      </div>
      <div className="flex flex-col items-center ml-[25px] relative">
        <span className="mb-[5px] cursor-pointer">
          <svg className="svg-ico-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 -13 456.75885 456" width="25px">
            <path
              d="m150.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0">
            </path>
            <path
              d="m446.855469 94.035156h-353.101563l-7.199218-40.300781c-4.4375-24.808594-23.882813-44.214844-48.699219-48.601563l-26.101563-4.597656c-5.441406-.96875-10.632812 2.660156-11.601562 8.097656-.964844 5.441407 2.660156 10.632813 8.101562 11.601563l26.199219 4.597656c16.53125 2.929688 29.472656 15.871094 32.402344 32.402344l35.398437 199.699219c4.179688 23.894531 24.941406 41.324218 49.199219 41.300781h210c22.0625.066406 41.546875-14.375 47.902344-35.5l47-155.800781c.871093-3.039063.320312-6.3125-1.5-8.898438-1.902344-2.503906-4.859375-3.980468-8-4zm-56.601563 162.796875c-3.773437 12.6875-15.464844 21.367188-28.699218 21.300781h-210c-14.566407.039063-27.035157-10.441406-29.5-24.800781l-24.699219-139.398437h336.097656zm0 0">
            </path>
            <path
              d="m360.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0">
            </path>
          </svg>

        </span>
        <div
          className="bg-red-600 w-[16px] h-[16px] rounded-full flex items-center justify-center text-white text-xs absolute top-0 right-[10px]">
          0</div>
        <span className="text-[12px]">Giỏ hàng</span>
      </div>
    </div>
  </div>

</header>
);
};
export default memo(Header) ;