import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'

const index = () => {
  return (
    <>
    <Head>
      <title>SHT's Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <Navbar/>
    <Header/>
    </>
  )
}

export default index
