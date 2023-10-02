interface pageProps {
    params: { id: string };
  }
  
export default function Home(data: pageProps) {
    return (
        <>
            <div className='bg-white text-center  '>
                Detail
            </div>
        </>
    )
}
