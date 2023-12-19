"use client";
import React from "react";
import { FC } from "react";
import DetailContent from "./DetailContent";
import Link from "next/link";
import "./style.scss";
import DetailImage from "./DetaiImage";
import DetailText from "./DetailContent/DetailText";
import Comment from "./Comment";
interface Props {
  id?: any;
}
const Detail: FC<Props> = (id: any) => {
  console.log(id.id.params.id);
  return (
    <div className="pt-10 container">
      <ul className="flex mt-6 mb-10">
        <li className="text-[13px] text-[rgb(85,85,85)] mr-2">
          <Link href="/">Trang chủ</Link>
        </li>
        <li className="text-[11px] text-[rgb(85,85,85)] mr-2 ">|</li>
        <li className="text-[13px] text-[rgb(85,85,85)] mr-2">
          <Link href="">Giảm giá nhiều nhất - Thời trang nữ</Link>
        </li>
        <li className="text-[11px] text-[rgb(85,85,85)] mr-2">|</li>
        <li className="text-[13px] font-semibold">
          <Link href="">NỮ/Áo chống nắng Sunstop Master mũ liền F9UVJ056M</Link>
        </li>
      </ul>
      <div className="flex justify-between">
        <DetailImage />
        <DetailContent id={id} />
      </div>
      <DetailText />
      <Comment />
    </div>
  );
};

export default Detail;
