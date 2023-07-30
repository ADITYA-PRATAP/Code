import React from 'react'
import { HiHome } from 'react-icons/hi'
import { AiOutlineUser } from 'react-icons/ai'
import { MdOutlineContactMail } from 'react-icons/md'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import styles from '@/styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Home<HiHome className={styles.s} /></a>
      </Link>
      <Link href="/About">
        <a>About<AiOutlineUser className={styles.s} /></a>
      </Link>
      <Link href="/Mycourses">
        <a>Courses<BiBook className={styles.s} /></a>
      </Link>
      <Link href="/Contact">
        <a>Contact<MdOutlineContactMail className={styles.s} /></a>
      </Link>
    </nav>
  )
}

export default Nav
