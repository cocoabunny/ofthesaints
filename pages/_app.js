import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

console.log('tech spree omg');
export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}