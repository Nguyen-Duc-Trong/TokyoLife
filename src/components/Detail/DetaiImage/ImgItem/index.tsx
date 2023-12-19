import React, { useState } from "react";
import Image from "next/image";
export interface ICard1Props {
  img: any;
  propsImageItem: any;
}
const ImgItem = ({ img, propsImageItem }: ICard1Props) => {
  const handleChangeBorder = () => {
    propsImageItem.setActiveImagePreview(() => {
      if (propsImageItem.activeImagePreview === img) {
        return "";
      } else {
        return img;
      }
    });
  };
  return (
    <div className="text-white w-[120px]">
      <Image
        onClick={handleChangeBorder}
        className={`w-[96px] mb-4 ${
          propsImageItem.activeImagePreview === img
            ? "shadow-[0px_0px_8px_0px_rgba(255,0,0,0.6)]"
            : ""
        }`}
        src={img}
        alt=""
      />
    </div>
  );
};

export default ImgItem;
