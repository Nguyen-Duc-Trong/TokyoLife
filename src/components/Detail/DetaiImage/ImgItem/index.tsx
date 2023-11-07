import React, { useState } from "react";
export interface ICard1Props {
  img: any;
}
const ImgItem = ({ img }: ICard1Props) => {
  const [active, setActive] = useState(false);

  const handleChangeBorder = () => {
    setActive(!active);
  };
  return (
    <div className="text-white">
      <img
        onClick={handleChangeBorder}
        className={`w-[96px] mb-4 ${
          active ? "shadow-[0px_0px_8px_0px_rgba(255,0,0,0.6)]" : ""
        }`}
        src={img}
        alt=""
      />
    </div>
  );
};

export default ImgItem;
