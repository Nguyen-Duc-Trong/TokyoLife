import React from "react";
import { dataPromotion } from "../../dataPageHome";
import Link from "next/link";

const Promotion = () => {
    return(
        <section className="w-[100%] mb-[30px]">
            <div className=" bg-[#ffffff] px-[12px] py-[10px]">
                <h2 className='mb-[8px] font-bold'>THÁNG 9 - TOKYOLIFE CÓ GÌ HOT 🔥</h2>
                <div className="w-[100%] overflow-auto">
                    <div className="grid grid-cols-4 gap-4 px-2 overflow-auto w-[1176px]">
                        {dataPromotion.map((it)=>{
                            return(
                                <div key={it.id} className=" border-[1px] border-solid border-black rounded-[5px] p-[10px]">
                                    <Link href={it.url}>
                                        <p className="text-[16px] text-[#000000] font-bold">{it.title}</p>
                                        <span className="text-[13px] text-[#252a2b]">{it.subTitle}</span>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promotion