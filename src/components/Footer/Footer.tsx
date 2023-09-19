"use client";
import Link from 'next/link';
import React from 'react'


const Footer = () => {
    const dataSupport = [
        {
            id: 1,
            title: "Giới thiệu & Liên hệ"
        },
        {
            id: 2,
            title: "Hướng dẫn mua hàng"
        },
        {
            id: 3,
            title: "HD thanh toán bằng VNPAY"
        },
        {
            id: 4,
            title: "Hướng dẫn chọn Size"
        },
        {
            id: 5,
            title: "Chính sách sinh nhật App Member"
        },
        {
            id: 6,
            title: "Chính sách tích điểm / tiêu điểm"
        },
        {
            id: 7,
            title: "Chính sách đổi trả"
        },
        {
            id: 8,
            title: "Chính sách bảo mật"
        },
        {
            id: 9,
            title: "Chính sách vận chuyển"
        },
        {
            id: 10,
            title: "Điều khoản & Dịch vụ"
        },
        {
            id: 11,
            title: "Tuyển dụng"
        },
    ]
    return (
        <footer className='bg-[#C92027]  text-[#fff] ' >
            <div className='container'>
                <div className='flex pt-[40px] pb-[30px] '>
                    <div className='w-[50%] px-[15px] '>
                        <h4 className='py-4 text-[18px] font-bold px-[15px] '>Về TOKYOLIFE</h4>
                        <div className='flex'>
                            <div className='w-[50%] px-[15px] '>
                                <p className='mb-2.5'>TokyoLife là cửa hàng bán lẻ đồ gia dụng, hóa mỹ phẩm, phụ kiện chính hãng các thương hiệu Nhật Bản: KAI, Inomata, Ebisu, Lec, ORP Tokyo, Kose , Momotani ,Naturie, Rohto , DHC , Orihiro , Naive, Aprica, Kose (Dòng Softymo), Shiseido (Dòng Senka, Anessa), KAO, Rosette, Naive, Ebisu, Unicharm, Tsubaki , Himawari, Rocket, Gunze-Sabrina, Regart… Nước hoa TokyoLife sản xuất tại Pháp. Hóa phẩm lành tính TokyoLife sản xuất tại Nhật Bản. Phụ kiện giày, túi, ví, balo và thời trang hiệu TokyoNow, TokyoBasic, TokyoSmart, TokyoSecret, In The Now và nhiều thương hiệu thời trang, phụ kiện khác sản xuất tại Việt Nam, Trung Quốc, Thái Lan…</p>
                                <img className='max-w-[150px] ' src="https://file.hstatic.net/1000397797/file/logo-bct-min_5c275261c7204ddf9c30a3a2eb1534e5.png" alt="" />
                            </div>
                            <div className='w-[50%] px-[15px] '>
                                <ul>
                                    <li className='font-bold '><Link href={""}>HỆ THỐNG CỬA HÀNG</Link></li>
                                    <li className='my-2'>
                                        <strong>Hotline CSKH:</strong>
                                        <Link href={"tel:0362953021"}>0362953021</Link>
                                    </li>
                                    <li>
                                        <strong>Email CSKH:</strong>
                                        <Link href={"bien181221@gmail.com"}>bien181221@gmail.com</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='w-[25%] px-[15px] ' >
                        <h4 className='py-4 text-[18px]  font-bold'>Hỗ trợ Khách hàng</h4>
                        <ul className='pl-[15px] '>
                            {
                                dataSupport.map((item: any) => (
                                    <li key={item.id} className='list-disc mb-2 hover:text-[#000] '>
                                        <Link href={""}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='w-[25%]  px-[15px]' >
                        <h4 className='py-4 text-[18px]  font-bold'>Hỗ trợ/Tư vấn mua online</h4>
                        <div className='flex items-center gap-2.5'>
                            <svg className='w-[30px] h-[30px] ' fill='#fff' xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 473.806 473.806" space="preserve"> <g> <g> <path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4 c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8 c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6 c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5 c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26 c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9 c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806 C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20 c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6 c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1 c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3 c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5 c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8 c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9 l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1 C420.456,377.706,420.456,388.206,410.256,398.806z"></path> <path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2 c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11 S248.656,111.506,256.056,112.706z"></path> <path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11 c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2 c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"></path> </g> </g> </svg>
                            <div>
                                <h5 className=' text-[18px]  font-bold'>0362953021</h5>
                                <Link href={"bien181221@gmail.com"} >bien181221@gmail.com</Link>
                            </div>
                        </div>
                        <div>
                            <h5 className='py-4 text-[18px]  font-bold'>Kết nối với TokyoLife</h5>
                            <ul className='flex gap-2 mb-2'>
                                <li className='w-8 h-8 flex items-center justify-center border border-[#fff] rounded hover:bg-black hover:border-[#000] cursor-pointer  '>
                                    <svg fill='#fff' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                                </li>
                                <li className='w-8 h-8 flex items-center justify-center border border-[#fff] rounded hover:bg-black hover:border-[#000] cursor-pointer   '>
                                    <svg fill='#fff' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
                                </li>
                                <li className='w-8 h-8 flex items-center justify-center border border-[#fff] rounded  hover:bg-black hover:border-[#000] cursor-pointer  '>
                                    <svg fill='#fff' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" /></svg>
                                </li>
                            </ul>
                        </div>
                        <div className='w-[50%] mt-4 '>
                            <Link href={""}>
                                <img className='w-full' src="https://file.hstatic.net/200000532555/file/2560px-download_on_the_app_store_ece71fddf825492b96b8ce8abec182c0.png" alt="" />
                            </Link>
                            <Link className='mt-2.5' href={""}>
                                <img className='w-full' src="https://file.hstatic.net/200000532555/file/800px-google_play_store_badge_en_b981afa25741472a984505dfc55c66ea.png" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='py-4 border-t border-[#00000014] '>
                    <div className='container'>
                        <div className='text-center'>
                            Copyright © 2023 TokyoLife.
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}
export default Footer