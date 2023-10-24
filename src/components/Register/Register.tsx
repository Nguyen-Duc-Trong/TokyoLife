"use client";
import React, { useState } from "react";
import "./style.css";
import { Form, Input, Button, Radio } from "antd";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

function Register() {
  const [form] = Form.useForm();
  const onFinish = (value: any) => {
    console.log(form.getFieldsValue());
    console.log("value", value.firstname);
  };
  const PATTERN_PASSWORD =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@#$%^&+=]{6,12}$/;
  const PATTERN_EMAIL =
    /^[\s\S]*(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))(?= *$)/;

  const PATTERN_PHONE_NUMBER = /^(0[3|5|7|8|9])([0-9]{8})\b$/;

  return (
    <div className="container">
      <div className="bg-[#f7f7f7] flex justify-center w-full">
        <div className="w-[620px] mt-[35px] mb-[50px] p-[30px] bg-[#fff] border">
          <div className="title-register text-center text-[25px] font-bold">
            <h1>Tạo tài khoản</h1>
          </div>
          <Form
            onFinish={onFinish}
            form={form}
            initialValues={{ remember: true }}
          >
            <Form.Item name="firstname">
              <Input
                className="border-none h-[55px] text-[#5c5c5c] font-medium bg-[#ededed]"
                placeholder="Họ"
              />
            </Form.Item>
            <Form.Item name="lastname">
              <Input
                className="border-none h-[55px] text-[#5c5c5c] font-medium bg-[#ededed]"
                placeholder="Tên"
              />
            </Form.Item>
            <Form.Item name="gender">
              <Radio.Group>
                <Radio value={1}>Nữ</Radio>
                <Radio value={2}>Nam</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="date">
              <Input
                className="border-none h-[55px] text-[#5c5c5c] font-medium bg-[#ededed]"
                placeholder="mm/dd/yyyy"
              />
            </Form.Item>
            <Form.Item name="email">
              <Input
                className="border-none h-[55px] text-[#5c5c5c] font-medium bg-[#ededed]"
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              rules={[
                { required: true },
                {
                  pattern: PATTERN_PHONE_NUMBER,
                  message: "Định dạng số điện thoại không đúng",
                },
              ]}
            >
              <Input
                className="border-none h-[55px] text-[#5c5c5c] font-medium bg-[#ededed]"
                placeholder="Số điện thoại"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  pattern: PATTERN_PASSWORD,
                  message:
                    "Mật khẩu: 6-12 ký tự, bao gồm chữ hoa, chữ thường, số, ký tự đặc biệt",
                },
              ]}
            >
              <Input.Password
                className="border-none h-[55px] text-[#5c5c5c] font-medium bg-[#ededed]"
                placeholder="Mật khẩu"
              />
            </Form.Item>
            <div className="text-[#9e9e9e] text-[13px]">
              This site is protected by reCAPTCHA and the Google
              <Link href="" className="mx-[5px] text-[#2962ff]">
                Privacy Policy
              </Link>
              and
              <Link href="" className="mx-[5px] text-[#2962ff]">
                Terms of Service
              </Link>{" "}
              apply.
            </div>
            <Form.Item>
              <Button
                htmlType="submit"
                className="mt-[25px] flex justify-center items-center mx-auto text-[14px] font-medium px-[40px] h-[45px] rounded-none text-[#fff] bg-[#111]"
              >
                Đăng kí
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
