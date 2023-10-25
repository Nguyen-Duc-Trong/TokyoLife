import React from "react";
import ImgItem from "./ImgItem";
import { dataDetail } from "../data";
const DetailImage = () => {
  return (
    <div>
      <div>
        {dataDetail.map((item) => (
          <ImgItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DetailImage;
