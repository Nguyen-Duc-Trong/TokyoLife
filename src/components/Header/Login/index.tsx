import React from 'react'
import { Form, Input, Button } from 'antd';
import Link from 'next/link';

function Login() {
  return (
    <div className='absolute top-0 right-0 w-[340px] bg-[#fff] shadow-lg'>

            <Form className='p-[20px]'>
                <div className='text-center border-b pb-[10px]'>
                    <h2 className='text-[18px] text-black uppercase font-bold'>Đăng nhập tài khoản</h2>
                    <p className='text-[14px]'>Nhập email và mật khẩu của bạn:</p>
                </div>
                <div className='pt-[20px]'>
                    <Form.Item>
                        <Input placeholder='Email'></Input>
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder='Mật khẩu'></Input>
                    </Form.Item>
                    <div className='text-[#9e9e9e] text-[13px]'>
                        This site is protected by reCAPTCHA and the Google <Link className='text-[#2962ff]' href="" >Privacy Policy</Link> and <Link href="" className='text-[#2962ff]'>Terms of Service</Link>
                        apply.
                    </div>
                    <Form.Item>
                        <Button className='mt-[10px] flex items-center justify-center w-full bg-[#111] text-[#fff] text-[16px] font-semibold'>Đăng nhập</Button>

                        <Button className='w-full flex items-center my-[10px] justify-center text-[#fff] font-semibold text-[16px] bg-[rgb(221,75,57)]'>
                            <svg className='w-[30px] h-[30px]' fill='#fff' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z" /></svg>
                            <span>Đăng nhập google</span>
                        </Button>


                        <Button className='w-full flex items-center justify-center text-[#fff] font-semibold text-[16px] bg-[#3B5998]'>
                            <svg fill='#fff' className='w-[25px] h-[25px]' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                            <span>Đăng nhập bằng facebook</span>
                        </Button>
                    </Form.Item>
                    <div className='flex text-[12px]'>
                        <div className='flex flex-col'>
                            <span className='text-[#677279]'>
                                Khách hàng mới?
                                <Link className='text-black' href="">Tạo tài khoản</Link>
                            </span>

                            <span className='text-[#677279]'>
                                Quên mật khẩu?
                                <Link className='text-black' href="">Khôi phục mật khẩu</Link>
                            </span>

                        </div>
                    </div>
                </div>

            </Form>
        </div>
  )
}

export default Login