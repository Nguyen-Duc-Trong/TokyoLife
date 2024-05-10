import React, { useState } from "react";
function HeaderSearch(props:any) {
  const {setIsDropDownSearch} = props
  return (
    <div className="absolute top-0 left-0 w-full ">
      <div className="container ">
        <div className="px-[15px] bg-[#fff] absolute top-0 py-[33px] border w-[80%] min-h-[400px]">
          <div className="flex w-[100%] justify-between items-center">
            <h1 className="cursor-pointer  pl-[15px] pr-[15px] ">
              <img
                className="w-[220px]"
                src="https://file.hstatic.net/200000532555/file/logo-tkl-01_50c40d291088493182dd995d3da9e130.png"
                alt=""
              />
            </h1>

            <div className=" relative w-[50%]">
              <svg
                className="m-[13px] svg search absolute top-0 "
                height="18px"
                width="25px"
                viewBox="0 0 24 24"
                fill="#c5cee0"
              >
                <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
              </svg>

              <input
                className="border py-[9px] pr-[9px] pl-[50px] rounded-3xl w-full"
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
              />
            </div>
            <button className="cursor-pointer  flex justify-center items-center w-10 h-10 rounded-[50%] bg-[#f5f5f5] " onClick={()=>setIsDropDownSearch(false)}>
              <svg
              
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
            
          </div>
          <span className="flex justify-end pt-[20px] w-[43%]">Gợi ý cho bạn:</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderSearch;
