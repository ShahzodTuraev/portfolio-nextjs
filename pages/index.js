import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Career from '@/components/Career'
import Footer from '@/components/Footer'

const index = () => {
  return (
    <>
    <Head>
      <title>SHT's Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <Navbar/>
    <Header/>
    <About/>
    <Skills/>
    <Projects/>
    <Career/>
    <Footer/>
    </>
  )
}

export default index
