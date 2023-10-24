import React, {memo} from "react";
import "src/components/Header/PopupSearch/PopupSearch.scss";
import { SearchOutlined } from '@ant-design/icons';
import {Input, Space } from 'antd';

const PopupSearch = (props:any) => {
    const {setOpenPopupSearch} = props
    return(
        <section className="w-[100%] h-[100vh] relative">
            <div id="PopupSearch" className="container absolute left-[160px] md:max-xl:left-[30px] bg-[#ffffff] flex justify-between h-[288px] py-[12px] px-[16px] z-10">
                <div>
                    <img className="w-[220px]" src="https://file.hstatic.net/200000532555/file/logo-tkl-01_50c40d291088493182dd995d3da9e130.png" alt="" />
                </div>
                <div className="">
                    <div>
                        <Space.Compact size="large">
                            <Input addonBefore={<SearchOutlined className="rounded-l-[50px]"/>} placeholder="Tìm kiếm sản phẩm" className="w-[600px] rounded-r-[50%]" />
                        </Space.Compact>
                    </div>
                    <div>
                        <p className="py-[20px]">Gợi ý cho bạn:</p>
                        <ul className="max-h-[175px] overflow-y-auto">
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                            <li>hihi</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button onClick={()=> setOpenPopupSearch(false)}>
                        <span id="btn-delete" className="flex bg-[#f5f5f5] rounded-[100px] p-[14px]">
                            <svg fill="#111" height="12px" width="12px" viewBox="0 0 24 24"><path d="M15.04 12L24 2.96 21.04 0 12 8.96 3.04 0 0 2.96 9.04 12 0 20.96 3.04 24 12 14.96 21.04 24 24 20.96z"></path></svg>
                        </span>
                    </button>
                </div>
            </div>
            <div className=" w-[100%] h-[100%] left-[0] top-0 z-[9] bg-[rgba(115,115,115,0.9)]" onClick={()=> setOpenPopupSearch(false)}></div>
        </section>
    )
}

export default memo(PopupSearch)