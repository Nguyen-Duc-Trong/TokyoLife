
import Link from 'next/link'

export default function Home() {
  const data = [
    {
      title : "chong nang",
      data2 : [
        {
          title: "ao khoac"
        },
        {
          title: "chan vay"
        },
        {
          title: "ao dep"
        }
      ]
    },
    {
      title : "bo quan ao",
      data2 : [
        {
          title: "ao 1"
        },
        {
          title: "ao 2"
        },
        {
          title: "ao dep"
        }
      ]
    }
  ]
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
