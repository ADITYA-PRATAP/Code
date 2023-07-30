import React, { useState } from 'react'
import styles from '@/styles/React.module.css'  

  

const   JavaV= () => {
  const [src1, setSrc1] = useState('https://www.youtube.com/embed/UmnCZ7-9yDY')

  const arr = ['https://www.youtube.com/embed/UmnCZ7-9yDY','https://www.youtube.com/embed/28OwNO-yjvk?list=PL0zysOflRCemLgOlgbhivNZIIypAkL1T8', 'https://www.youtube.com/embed/pMR_48AF-A0?list=PL_6klLfS1WqE1-_MJgZiJqAaccjLGHh0H']
  
  const handle = () => {
    setSrc1(arr[0]);
  }
  const handle1 = () => {
    setSrc1(arr[1]);
    console.log(arr[1]);   

  }
  const handle2 = () => {
    setSrc1(arr[2]);   

  }

  return (
    <>
      <div className={styles.parent}>
        <div className={styles.child1}> 
            
          <div className={styles.child2} onClick={handle} >
            <img src="/images/java.jpg" alt="Avatar" className={styles.avatar} />
          </div>
          <h1  className={styles.h}>JAVA Course Full Video 2Hours </h1> 
          <div className={styles.child2} onClick={handle1} >
            <img src="/images/BANK.jpg" alt="Avatar" className={styles.avatar} />
          </div>
          <h1  className={styles.h}>Bank project using java </h1> 
          <div className={styles.child2} onClick={handle2} >
            <img src="/images/clocl.jpg" alt="Avatar" className={styles.avatar} />
          </div>
          <h1  className={styles.h}>Bank project using java </h1> 
          
          
          
          
          
          
          </div>
        <div className='child1'>
        <iframe width="942" height="630" src={src1} title="10-Hour React Tutorial 2023 - Zero to Advanced | Learn React JS in Hindi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>


          

        </div>
      </div>
    </>
  )
}

export default JavaV

