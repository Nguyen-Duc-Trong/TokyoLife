import Detail from "@/components/Detail/Detail";

interface pageProps {
    params: { id: string };
  }
  
export default function Home(data: pageProps) {
    return (
        <>
           <Detail id={data} />
        </>
    )
}
