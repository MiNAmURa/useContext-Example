import Head from 'next/head'

import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href={'./context'} className={'btn btn-info my-3'}>
        前往Context範例頁
      </Link>
      <br />
      <Link href={'./reducer/PickANumber'} className={'btn btn-info'}>
        前往Reducer範例頁
      </Link>
    </>
  )
}
