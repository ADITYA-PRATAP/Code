import React, { useState } from 'react'
import styles from '@/styles/React.module.css'  

  

const   Python = () => {
  const [src1, setSrc1] = useState('https://www.youtube.com/embed/gfDE2a7MKjA')

  const arr = ['https://www.youtube.com/embed/gfDE2a7MKjA','https://www.youtube.com/embed/s_8b5iq4Rvk', 'https://www.youtube.com/embed/A6464U4bPPQ']
  
  const handle = () => {
    setSrc1(arr[0]);
  }
  const handle1 = () => {
    setSrc1(arr[1]);   

  }
  const handle2 = () => {
    setSrc1(arr[2]);   

  }

  



  return (
    <>
      <div className={styles.parent}>
        <div className={styles.child1}> 
            
          <div className={styles.child2} onClick={handle} >
            <img src="/images/python.png" alt="Avatar" className={styles.avatar} />
          </div>
          <h1  className={styles.h}>Python Course Full Video 2Hours </h1> 
          <div className={styles.child2} onClick={handle1} >
            <img src="/images/jar.jpg" alt="Avatar" className={styles.avatar} />
          </div>
          <h1  className={styles.h}>Jarvis personal AI project using Python </h1> 
          <div className={styles.child2} onClick={handle2} >
            <img src="/images/attend.jpg" alt="Avatar" className={styles.avatar} />
          </div>
          <h1  className={styles.h}>Automate Attendance  Project using Python</h1> 
          
          
          
          
          
          
          </div>
        <div className='child1'>
        <iframe width="942" height="630" src={src1} title="10-Hour React Tutorial 2023 - Zero to Advanced | Learn React JS in Hindi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>


          

        </div>
      </div>
    </>
  )
}

export default Python

