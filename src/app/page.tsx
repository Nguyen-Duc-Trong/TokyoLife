
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='bg-white text-center  '>
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
