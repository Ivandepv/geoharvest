import { ResultsScreen } from 'app/features/results/results'
import Head from 'next/head'

export default function Page() {
    return (
        <>
            <Head>
                <title>GeoHarvest</title>
            </Head>
            <ResultsScreen />
        </>
    )
}
