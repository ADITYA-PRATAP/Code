import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PicCards from './Piccards'
import Number from './Number'
import Footer from './Footer'
import Nav2 from './Nav2'
import Demo from './Demo'

const Home = () => {


  return (
    <>
      <Head>
        {/* Add necessary meta tags, title, etc. */}
      </Head>

      <section className={styles.main}>
        <Nav2></Nav2>
      </section>

      <section>
        <PicCards></PicCards>
      </section>

      <section className='mt-0'>
        <Number></Number>
      </section>

      <section>
        <Demo></Demo>
      </section>

      <section>
        <Footer></Footer>
      </section>
    </>
  )
}

export default Home
