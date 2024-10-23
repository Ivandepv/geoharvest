import { HomeScreen } from 'app/features/home/home'
import Head from 'next/head'

export default function Page() {
    return (
        <>
            <Head>
                <title>GeoHarvest</title>
            </Head>
            <HomeScreen />
        </>
    )
}
