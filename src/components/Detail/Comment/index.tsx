import React from "react";

const Comment = () => {
  return (
    <div>
      <h6 className="uppercase text-lg font-semibold my-6">
        ĐÁNH GIÁ TỪ NGƯỜI MUA
      </h6>
      <div className="bg-white py-10 w-full flex flex-col items-center gap-6">
        <img
          className="w-[314px] h-[215px]"
          src="https://tokyolife.vn/_next/static/media/EmtyReview.86be870e.svg"
          alt=""
        />
        <p className="text-sm">Sản phẩm chưa có đánh giá </p>
      </div>
    </div>
  );
};

export default Comment;
