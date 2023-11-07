import React from "react";
import ImgItem from "./ImgItem";
import { dataDetail } from "../data";
import ImgMain from "./ImgMain";

const DetailImage = () => {
  return (
    <div className="flex">
      <div>
        {dataDetail.map((item) => (
          <ImgItem key={item.id} {...item} />
        ))}
      </div>
      <div className="flex">
        {/* {dataDetail.map((item) => (
          <ImgMain key={item.id} {...item} /> // m có thấy có cái gì nó sai sai ko  t  kb:)))) t làm giống mẫu m chia cpn sai r
        ))} */}

        <ImgMain dataImages={dataDetail} />
      </div>
    </div>
  );
};

export default DetailImage;
