import React, {memo} from "react";
import { dataAccount } from "@/components/Account/dataAccount";
import Link from "next/link";
import {BsDot} from "react-icons/bs"

const PopupAccLogged = (props:any) => {
    const {hanldesetChangeLogout} = props
    return(
            <div className="p-[10px]">
                <div className="pb-[10px] border-b-[1px] border-solid border-[#e7e7e7]">
                    <p className="text-[18px] text-[#000000] uppercase tracking-[0.5px] font-medium">THÔNG TIN TÀI KHOẢN</p>
                </div>
                <div>
                    <ul>
                        {dataAccount.map((it)=>{
                            return <li className="pt-[10px] pb-[5px] mb-[8px]" key={it.id}>
                                    <span className="text-[15px] text-[#282c2d] font-semibold ">{it.title}</span>
                                </li>
                        })}
                        <Link href={"/account"}>
                            <li className="flex items-center mb-[5px]">
                                <span className="text-[20px] text-[#252a2b]"><BsDot/></span>
                                <span className="text-[#252a2b] px-[4px]">Tài khoản của tôi</span>
                            </li>
                        </Link>
                        <Link href={"/account/address"}>
                            <li className="flex items-center mb-[5px]">
                                <span className="text-[20px] text-[#252a2b]"><BsDot/></span>
                                <span className="text-[#252a2b] px-[4px]">Danh sách địa chỉ</span>
                            </li>
                        </Link>
                        <Link href={"/"}>
                            <li className="flex items-center mb-[5px]">
                                <span className="text-[20px] text-[#252a2b]"><BsDot/></span>
                                <span  onClick={()=>hanldesetChangeLogout(hanldesetChangeLogout)} className="text-[#252a2b] px-[4px]">Đăng xuất</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
    )
}

export default memo(PopupAccLogged)