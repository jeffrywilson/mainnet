import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import "regenerator-runtime/runtime"

import '../styles/global.css';
import { DAppProvider } from "@usedapp/core";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  const config = {
  }

  return (
    <DAppProvider config={config}>
      {getLayout(<Component {...pageProps} />)}
    </DAppProvider>
  );
}