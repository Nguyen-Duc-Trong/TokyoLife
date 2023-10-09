import React, { memo } from "react";
import "src/components/Header/PopupAccount/PopupAccount.scss";

import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import Image from "next/image";
import logoGg from "public/img/Logo/logoGg.png";
import logoFb from "public/img/Logo/logoFb.png";

const PopupAccount = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
  };

  return (
    <div
      id="PopupAccount"
      className="w-[340px] top-[0px] md:max-xl:right-[-86px] -[-0px] right-[-165px] bg-[#ffffff]"
    >
      <div className="p-[20px]">
        <div className="pb-[10px]">
          <p className="flex justify-center items-center text-[18px] text-[#000000] font-medium">
            ĐĂNG NHẬP TÀI KHOẢN
          </p>
          <p className="flex justify-center items-center text-[14px] text-[#677279]">
            Nhập email và mật khẩu của bạn
          </p>
        </div>
        <div className="pt-[20px] border-t border-solid border-[#e7e7e7]">
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 20 }}
            style={{ maxWidth: 700 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[{ message: "Please input your email" }]}
              className="mb-[12px]"
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="Mật khẩu"
              name="password"
              rules={[{ message: "Please input your password!" }]}
              className="mb-[0px] "
            >
              <Input.Password />
            </Form.Item>
            <div className="pt-[6px] text-[13px] text-[#9e9e9e] text-left mb-[12px]">
              This site is protected by reCAPTCHA and the Google
              <Link href={"/"}>
                <span className="text-[#2962ff]"> Privacy Policy</span>
              </Link>{" "}
              and{" "}
              <Link href={"/"}>
                {" "}
                <span className="text-[#2962ff]">Privacy Policy</span>
              </Link>
            </div>
            <Form.Item
              className="mb-[0px]"
              wrapperCol={{ offset: 0, span: 160 }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="bg-[#252a2b] font-medium button1 w-[300px] py-[0px] h-[42px] text-[13px] rounded-none"
              >
                ĐĂNG NHẬP
              </Button>
            </Form.Item>
            <Form.Item
              className="mb-[0px]"
              wrapperCol={{ offset: 0, span: 160 }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="bg-[#dd4b39] button2 mt-[10px] mb-[8px] font-medium w-[300px] py-[0px] flex justify-center items-center h-[42px] text-[14px] rounded-[5px]"
              >
                <span className="w-[40px] h-[40px]">
                  <Image className="w-[40px] h-[40px]" src={logoGg} alt="" />
                </span>
                Đăng nhập Google
              </Button>
            </Form.Item>
            <Form.Item
              className="mb-[0px]"
              wrapperCol={{ offset: 0, span: 160 }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="bg-[#3b5998] button3 w-[300px] font-medium py-[0px] flex justify-center items-center h-[42px] text-[14px] rounded-[5px]"
              >
                <span className="w-[40px] h-[40px]">
                  <Image className="w-[40px] h-[40px]" src={logoFb} alt="" />
                </span>
                Đăng nhập Facebook
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="mt-[16px] text-[12px]">
          <p className="mb-[4px] ">
            <span className="text-[#677279]">Khách hàng mới?</span>
            <Link href={"/account/register"}>
              <span className="text-[#000000]"> Tạo tài khoản</span>
            </Link>
          </p>
          <p className="mb-[4px]">
            <span className="text-[#677279]">Quên mật khẩu?</span>
            <Link href={"/"}>
              <span className="text-[#000000]"> Khôi phục mật khẩu</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(PopupAccount);
