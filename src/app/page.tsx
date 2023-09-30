
import Link from 'next/link'
import PageHome from '@/components/PageHome/PageHome'

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
      <PageHome/>
    </>
  )
}
