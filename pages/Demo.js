import React from 'react'
import styles from '@/styles/Number.module.css';
import Java from './Cards/Java';
import Cplusplus from './Cards/Cplusplus';
import Python from './Cards/Python';

const Demo = () => {
  return (
    <section  className={styles.main4}>
    <h1 className={styles.font}>Our Courses</h1>
    
    <div className={styles.card_Insider}>
    <div className={styles.child}>
      <div className='ml-2 inline-block'><Java/></div>
      <div className='ml-20 inline-block'><Cplusplus/></div>
      </div>
      <div className={styles.child}>
      <div className='ml-20 '><Python/></div>
      </div>
    </div>
      
    </section>
  )
}

export default Demo
