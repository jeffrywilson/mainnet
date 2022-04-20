import Head from 'next/head';
import { AppConfig } from 'utils/AppConfig';
import { Meta } from 'components/layout/Meta';
import { Navbar } from 'components/navigation/Navbar';
import { Background } from 'components/background/Background';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

type ILayoutProps = {
  children?: ReactNode
}

export default function Layout({ children }: ILayoutProps) {
  const router = useRouter()

  let bgImg = "";
  switch (router.pathname) {
    case '/': bgImg = "bg-mobile tablet1:bg-hero"; break;
    case '/acquire': bgImg = "bg-acquire_mobile tablet1:bg-acquire_desktop"; break;
    default: bgImg = "bg-mobile tablet1:bg-hero";
  }
  return (
    <>
      <Head>
        <Meta title={AppConfig.title} description={AppConfig.description} />
      </Head>
      <Background image={bgImg}>
        <Navbar />
        <main className='pb-[30px]'>
          {children}
        </main>
      </Background>
    </>
  )
}