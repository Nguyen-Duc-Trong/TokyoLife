import React from "react";
import ImgItem from "./ImgItem";
import { dataDetail } from "../data";
import ImgMain from "./ImgMain";

const DetailImage = () => {
  return (
    <div className="flex">
      <div className="h-[650px] overflow-y-auto table-left">
        {dataDetail.map((item) => (
          <ImgItem key={item.id} {...item} />
        ))}
      </div>
      <div className="flex">
        <ImgMain dataImages={dataDetail} />
      </div>
    </div>
  );
};

export default DetailImage;
