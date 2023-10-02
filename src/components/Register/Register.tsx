"use client";
import React, { useState } from "react";
import "./style.css";
import { Form, Input, Button, Radio } from "antd";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

function Register() {
  const [form] = Form.useForm();
  // const [dataUser, setDataUser] = useState({
  //   firstname: "",
  //   lastname: "",
  //   gender: "",
  //   email: "",
  //   date: "",
  //   phone: "",
  //   password: "",
  // });
  // const handleMultibleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setDataUser({ ...dataUser, [name]: value });
  // };
  // const handleSubmit = async () => {
  //   try {
  //     const data = {
  //       username: dataUser.lastname + dataUser.firstname,
  //       gender: dataUser.gender,
  //       email: dataUser.email,
  //       date: 1696164195,
  //       phone: dataUser.phone,
  //       password: dataUser.password,
  //       token: uuidv4(),
  //     };
  //     console.log("dâta", data);
  //     await fetch("https://64e35dd6bac46e480e78aabe.mockapi.io/api/v1/users", {
  //       method: "POST",
  //       headers: { 'content-type':'application/json'},
  //       body: JSON.stringify(data),
  //     }).then((res) => {
  //       if (res.ok) {
  //         console.log("dm that nghiep:)))))))");
  //         console.log(res);
          
  //         return res.json()
  //       }
  //     }).then(res=>{
  //       console.log(res);
        
  //     });
  //   } catch (error) {
  //     console.log("error: ", error);
  //   }
  // };
  return (
    <div className="bg-[#f7f7f7] flex justify-center w-full">
      <div className="w-[620px] mt-[35px] mb-[50px] p-[30px] bg-[#fff] border">
        <div className="title-register text-center text-[25px] font-bold">
          <h1>Tạo tài khoản</h1>
        </div>
        <Form method="POST ">
          <Form.Item>
            <Input
              name="firstname"
              className="border-none h-[55px] text-[#5c5c5c] font-medium bg-[#ededed]"
              // value={dataUser.firstname}
              // onChange={handleMultibleChange}
              placeholder="Họ"
            />
          </Form.Item>
          <Form.Item>
            <Input
              name="lastname"
              // value={dataUser.lastname}
              className="border-none h-[55px] text-[#5c5c5c] font-medium bg-[#ededed]"
              placeholder="Tên"
              // onChange={handleMultibleChange}
            />
          </Form.Item>
          <Form.Item>
            <Radio.Group
              name="gender"
              // onChange={handleMultibleChange} 
              // defaultValue={dataUser.gender}
            >
              <Radio value={"female"}>Nữ</Radio>
              <Radio value={"male"}>Nam</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Input
              // value={dataUser.date}
              name="date"
              className="border-none h-[55px] text-[#5c5c5c] font-medium bg-[#ededed]"
              placeholder="mm/dd/yyyy"
              // onChange={handleMultibleChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              // value={dataUser.email}
              name="email"
              className="border-none h-[55px] text-[#5c5c5c] font-medium bg-[#ededed]"
              placeholder="Email"
              // onChange={handleMultibleChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              // value={dataUser.phone}
              name="phone"
              className="border-none h-[55px] text-[#5c5c5c] font-medium bg-[#ededed]"
              placeholder="Số điện thoại"
              // onChange={handleMultibleChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              // value={dataUser.password}
              name="password"
              type="password"
              className="border-none h-[55px] text-[#5c5c5c] font-medium bg-[#ededed]"
              placeholder="Mật khẩu"
              // onChange={handleMultibleChange}
            />
          </Form.Item>
        </Form>
        <div className="text-[#9e9e9e] text-[13px]">
          This site is protected by reCAPTCHA and the Google
          <a href="" className="mx-[5px] text-[#2962ff]">
            Privacy Policy
          </a>
          and
          <a href="" className="mx-[5px] text-[#2962ff]">
            Terms of Service
          </a>{" "}
          apply.
        </div>
        <Button
          // onClick={handleSubmit}
          className="mt-[25px] flex justify-center items-center mx-auto text-[14px] font-medium px-[40px] h-[45px] rounded-none text-[#fff] bg-[#111]"
        >
          Đăng kí
        </Button>
      </div>
    </div>
  );
}

export default Register;
