import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Feed from '../Components/Feed'
import Sidebar from '../Components/Sidebar'

import Widgets from '../Components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter 2.0</title>
      </Head>

        <main className='grid grid-cols-9'>
        <Sidebar />

        <Feed />

        <Widgets />


        </main>
    </div>
  )
}

export default Home


