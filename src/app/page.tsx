
import Link from 'next/link'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default function Home() {
  return (
    <>
      <div className=' text-center  '>
        <Link href={"/blog/blog-all"} >log</Link>
        <br />
        <Link href={"/account"} >account</Link>
        <br />
        <Link href={"/detail"} >detail</Link>
        <br />
        <Link href={"/account/register"} >register</Link>
      </div>
    </>
  )
}
