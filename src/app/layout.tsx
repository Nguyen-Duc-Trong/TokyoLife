"use client"
import Header from '@/components/Header/Header';
import './globals.css'
import { usePathname } from "next/navigation";
import { useState } from 'react';
import Loading from '@/components/Loading/Loading';
import Footer from '@/components/Footer/Footer';
import { Providers } from '@/redux/Provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  return (
    <html lang="en">
      <head>
        <title>tokyoLife - Thời trang thông minh & hàng tiêu dùng nhật bản chính hãng</title>
        <link type="image/png" href="https://file.hstatic.net/200000532555/file/logo_bong_hoa_45c8e9e2088448ad89c72b0377a245a2.png" rel="icon"></link>
      </head>
      <body >
        <div className='min-h-[100vh] bg-[#F7F7F7] '>
          <Providers>
            {
              pathname != "/404"
                ?
                <>
                  <Header />
                  {children}
                  <Footer />
                </>

                :
                <>
                  {isLoading ? <Loading /> : { children }}
                </>

            }
          </Providers>
        </div>
      </body>
    </html>
  )
}
