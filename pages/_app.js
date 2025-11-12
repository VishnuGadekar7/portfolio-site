import '../styles/globals.css'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from '../components/Loader'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps, router }) {
  const nextRouter = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    nextRouter.events.on('routeChangeStart', handleStart)
    nextRouter.events.on('routeChangeComplete', handleComplete)
    nextRouter.events.on('routeChangeError', handleComplete)

    return () => {
      nextRouter.events.off('routeChangeStart', handleStart)
      nextRouter.events.off('routeChangeComplete', handleComplete)
      nextRouter.events.off('routeChangeError', handleComplete)
    }
  }, [nextRouter.events])

  return (
    <>
      <Loader loading={loading} />
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}
