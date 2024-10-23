import { LoginScreen } from 'app/features/sign-in/Login'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>GeoHarvest</title>
      </Head>
      <LoginScreen />
    </>
  )
}
