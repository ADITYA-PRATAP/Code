import Head from 'next/head'
import Image from 'next/image'
import { Inter, Source_Serif_4 } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import PicCards from './Piccards'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Number from './Number'
import Footer from './Footer'
import Nav from './Nav'





const inter = Inter({ subsets: ['latin'] })

export default function Home() {



  const router = useRouter();

  return (
    <>
      <section className='main'>
        <Nav></Nav>
      </section>
      <section>
        <PicCards></PicCards>
      </section>
      <section>
        <Number></Number>
      </section>
      <section>
        <Footer></Footer>
      </section>

    </>
  )
}

