import { Button } from "antd";
import { useState } from "react";
const DetailText = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="w-[700px] mx-auto">
      <div className="text-left">
        <h6 className="text-lg font-bold uppercase">Chi tiết sản phẩm</h6>
        <div className="my-2.5 text-sm flex flex-col gap-4">
          <p className="uppercase">
            <strong>ĐẶC ĐIỂM NỔI BẬT:</strong>
          </p>
          <p>
            - CAO NHẤT: SunStop Tokyopfe có chỉ số UPF 50+ cao nhất trên thị
            trường chống nắng Việt Nam.
          </p>
          <p>
            - XÉT NGHIỆM: SunStop Tokyopfe có Kết quả xét nghiệm của Viện Dệt
            may Việt Nam về chỉ số chống nắng cho từng dòng sản phẩm.
          </p>
          <p>
            - CÔNG NGHỆ: SunStop Tokyopfe sử dụng CÔNG NGHỆ CHỐNG NẮNG UPF50+
            ngăn chặn trên 98% tia UV, duy trì khả năng chống UV sau nhiều lần
            giặt; tránh nguy cơ đen da, nám, sạm, ung thư da.
          </p>
          {show ? (
            <div className="flex flex-col gap-4">
              <p>
                - ĐA DẠNG: Nhiều màu sắc, kiểu dáng, ứng dụng pnh hoạt trong mọi
                trường hợp.
              </p>
              <p>
                - 1 ĐỔI 1: Bảo hành 1 đổi 1 trong vòng 14 ngày nếu không hài
                lòng về sản phẩm
              </p>
              <p>
                - Vải siêu mỏng, nhẹ, co giãn 4 chiều, hút ẩm tốt, nhanh khô.
              </p>
              <p>
                - Phù hợp với các hoạt động ngoài trời, hoạt động thể thao cần
                thoát mồ hôi nhanh
              </p>
              <p>- Dễ gấp gọn, mang theo mọi nơi.</p>
              <p>
                <strong>CHẤT LIỆU: </strong>
                76% Polyester, 14% Spandex, 10% Viscose
              </p>
              <p>
                <strong>HƯỚNG DẪN SỬ DỤNG & BẢO QUẢN:</strong>
              </p>
              <p>
                Nên giặt tay hoặc giặt máy với nước lạnh, tránh phơi dưới trời
                nắng gắt.
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <Button
        onClick={handleShow}
        className="hover:!bg-[rgb(201,33,39)] hover:!border-none hover:!text-white flex justify-center w-[158px] h-[42px] items-center p-2.5 text-sm font-medium mx-auto mt-5"
      >
        {show ? "Thu gọn" : "Xem thêm"}
      </Button>
    </div>
  );
};

export default DetailText;
