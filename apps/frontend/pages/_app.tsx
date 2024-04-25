import type { AppType } from 'next/app'
import { trpc } from '../utils/trpc'
import { FeatBitProvider } from '@helix/helix-utilities'

FeatBitProvider.start()

const MyApp: AppType = ({ Component, pageProps }: { Component: any; pageProps: any }) => {
  return <Component {...pageProps} />
}

export default trpc.withTRPC(MyApp)
