import React,{useState} from 'react'

function PageSearch() {
  const [isPage,setIsPage] = useState(false)
  const togglePage = () =>{
    setIsPage(!isPage)
  }
  return (
    <div className="relative mx-auto">
      <div className="container ">
        <div className="px-[15px] bg-gray-400 absolute top-0 py-[33px] border w-[80%]">
          <div className="flex w-[100%] justify-between items-center">
            <h1 className="cursor-pointer pb-[30px] pl-[15px] pr-[15px] ">
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
                 <span className="">Gợi ý cho bạn:</span>
                
              </div>
            <button className="cursor-pointer w-[20%] flex justify-end relative">
              <span onClick={togglePage} className="transform rotate-45 w-[40px] h-[40px] rounded-full text-4xl bg-[#f5f5f5] flex items-center justify-center absolute bottom-[10px]">
                +
              </span>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default PageSearch