import React from "react";

import {BiUser} from "react-icons/bi"
import {IoHomeSharp} from "react-icons/io5"
import {FaMapMarkerAlt} from "react-icons/fa"
import {BsFillTelephoneFill} from "react-icons/bs"

const PopupAddress = () => {
    return(
        <div className="w-[47.5%] pt-[5px] px-[15px] pb-[15px] bg-[#ffffff] mr-[15px] absolute">
             <div className="bg-[#ffffff]">
                 <form action="">
                     <div className="flex my-[15px] h-[34px]">
                         <span
                             className="w-[35px] h-[34px] flex justify-center items-center text-[#dad9d9] bg-[#ebebeb] text-[13px]">
                             <BiUser />
                         </span>
                         <input className="w-[100%] py-[5px] px-[15px] border-[1px] border-solid border-[#ebebeb] outline-none" type="text" placeholder="Họ" />
                     </div>
                     <div className="flex my-[15px] h-[34px]">
                         <span
                             className="w-[35px] h-[34px] flex justify-center items-center text-[#dad9d9] bg-[#ebebeb] text-[13px]">
                             <BiUser />
                         </span>
                         <input className="w-[100%] py-[5px] px-[15px] border-[1px] border-solid border-[#ebebeb] outline-none" type="text" placeholder="Tên" />
                     </div>
                     <div className="flex my-[15px] h-[34px]">
                         <span
                             className="w-[35px] h-[34px] flex justify-center items-center text-[#dad9d9] bg-[#ebebeb] text-[13px]">
                             <IoHomeSharp />
                         </span>
                         <input className="w-[100%] py-[5px] px-[15px] border-[1px] border-solid border-[#ebebeb] outline-none" type="text my-[15px] h-[34px]"
                             placeholder="Công ty" />
                     </div>
                     <div className="flex my-[15px] h-[34px]">
                         <span
                             className="w-[35px] h-[34px] flex justify-center items-center text-[#dad9d9] bg-[#ebebeb] text-[13px]">
                             <IoHomeSharp />
                         </span>
                         <input className="w-[100%] py-[5px] px-[15px] border-[1px] border-solid border-[#ebebeb] outline-none" type="text"
                             placeholder="Địa chỉ 1" />
                     </div>
                     <div className="flex my-[15px] h-[34px]">
                         <span
                             className="w-[35px] h-[34px] flex justify-center items-center text-[#dad9d9] bg-[#ebebeb] text-[13px]">
                             <IoHomeSharp />
                         </span>
                         <input className="w-[100%] py-[5px] px-[15px] border-[1px] border-solid border-[#ebebeb] outline-none" type="text"
                             placeholder="Địa chỉ 2" />
                     </div>
                     <div className="flex my-[15px] h-[34px]">
                         <span
                             className="w-[35px] h-[34px] flex justify-center items-center text-[#dad9d9] bg-[#ebebeb] text-[13px]">
                             <FaMapMarkerAlt />
                         </span>
                         <select className="w-[100%] py-[5px] px-[15px] border-[1px] border-solid border-[#ebebeb] outline-none" name="" id=""
                             placeholder="Quốc tịch">
                             <option value="- Please Select --">- Please Select --</option>
                             <option value="Vietnam">Vietnam</option>
                             <option value="United States">United States</option>
                             <option value="Thailand">Thailand</option>
                         </select>
                     </div>
                     <div className="flex my-[15px] h-[34px]">
                         <span
                             className="w-[35px] h-[34px] flex justify-center items-center text-[#dad9d9] bg-[#ebebeb] text-[13px]">
                             <FaMapMarkerAlt />
                         </span>
                         <select className="w-[100%] py-[5px] px-[15px] border-[1px] border-solid border-[#ebebeb] outline-none" name="" data-default="">
                             <option value="Hà Nội">Hà Nội</option>
                             <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                             <option value="Đà Nẵng">Đà Nẵng</option>
                             <option value="An Giang">An Giang</option>
                             <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
                             <option value="Bình Dương">Bình Dương</option>
                             <option value="Bình Phước">Bình Phước</option>
                             <option value="Bình Thuận">Bình Thuận</option>
                             <option value="Bình Định">Bình Định</option>
                             <option value="Bạc Liêu">Bạc Liêu</option>
                             <option value="Bắc Giang">Bắc Giang</option>
                             <option value="Bắc Kạn">Bắc Kạn</option>
                             <option value="Bắc Ninh">Bắc Ninh</option>
                             <option value="Bến Tre">Bến Tre</option>
                             <option value="Cao Bằng">Cao Bằng</option>
                             <option value="Cà Mau">Cà Mau</option>
                             <option value="Cần Thơ">Cần Thơ</option>
                             <option value="Gia Lai">Gia Lai</option>
                             <option value="Hà Giang">Hà Giang</option>
                             <option value="Hà Nam">Hà Nam</option>
                             <option value="Hà Tĩnh">Hà Tĩnh</option>
                             <option value="Hòa Bình">Hòa Bình</option>
                             <option value="Hưng Yên">Hưng Yên</option>
                             <option value="Hải Dương">Hải Dương</option>
                             <option value="Hải Phòng">Hải Phòng</option>
                             <option value="Hậu Giang">Hậu Giang</option>
                             <option value="Khánh Hòa">Khánh Hòa</option>
                             <option value="Kiên Giang">Kiên Giang</option>
                             <option value="Kon Tum">Kon Tum</option>
                             <option value="Lai Châu">Lai Châu</option>
                             <option value="Long An">Long An</option>
                             <option value="Lào Cai">Lào Cai</option>
                             <option value="Lâm Đồng">Lâm Đồng</option>
                             <option value="Lạng Sơn">Lạng Sơn</option>
                             <option value="Nam Định">Nam Định</option>
                             <option value="Nghệ An">Nghệ An</option>
                             <option value="Ninh Bình">Ninh Bình</option>
                             <option value="Ninh Thuận">Ninh Thuận</option>
                             <option value="Phú Thọ">Phú Thọ</option>
                             <option value="Phú Yên">Phú Yên</option>
                             <option value="Quảng Bình">Quảng Bình</option>
                             <option value="Quảng Nam">Quảng Nam</option>
                             <option value="Quảng Ngãi">Quảng Ngãi</option>
                             <option value="Quảng Ninh">Quảng Ninh</option>
                             <option value="Quảng Trị">Quảng Trị</option>
                             <option value="Sóc Trăng">Sóc Trăng</option>
                             <option value="Sơn La">Sơn La</option>
                             <option value="Thanh Hóa">Thanh Hóa</option>
                             <option value="Thái Bình">Thái Bình</option>
                             <option value="Thái Nguyên">Thái Nguyên</option>
                             <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
                             <option value="Tiền Giang">Tiền Giang</option>
                             <option value="Trà Vinh">Trà Vinh</option>
                             <option value="Tuyên Quang">Tuyên Quang</option>
                             <option value="Tây Ninh">Tây Ninh</option>
                             <option value="Vĩnh Long">Vĩnh Long</option>
                             <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                             <option value="Yên Bái">Yên Bái</option>
                             <option value="Điện Biên">Điện Biên</option>
                             <option value="Đắk Lắk">Đắk Lắk</option>
                             <option value="Đắk Nông">Đắk Nông</option>
                             <option value="Đồng Nai">Đồng Nai</option>
                             <option value="Đồng Tháp">Đồng Tháp</option>
                         </select>
                     </div>
                     <div className="flex my-[15px] h-[34px]">
                         <span
                             className="w-[35px] h-[34px] flex justify-center items-center text-[#dad9d9] bg-[#ebebeb] text-[13px]">
                             <BsFillTelephoneFill />
                         </span>
                         <input className="w-[100%] py-[5px] px-[15px] border-[1px] border-solid border-[#ebebeb] outline-none" type="number"
                             placeholder="Số điện thoại" />
                     </div>
                     <div className="flex items-center my-[15px] h-[34px]">
                         <input className="mr-[5px]" type="checkbox" />
                         <span>Đặt làm địa chỉ mặc định</span>
                     </div>
                     <div className="flex items-center">
                         <input className="h-[35px] mr-[5px] px-[30px] bg-[#323232] text-[#fff] text-[14px] uppercase"
                             type="submit" value="Cập nhật" />
                         <span>hoặc Hủy</span>
                     </div>
                 </form>
             </div>
        </div>
       
    )
}

export default PopupAddress