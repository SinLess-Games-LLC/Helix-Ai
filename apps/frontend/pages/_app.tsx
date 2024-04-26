import type { AppType } from 'next/app'
import { trpc } from '../utils/trpc'

const MyApp: AppType = ({ Component, pageProps }: { Component: any; pageProps: any }) => {
  return <Component {...pageProps} />
}

export default trpc.withTRPC(MyApp)
