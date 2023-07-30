import React, { useState } from 'react'
import styles from '@/styles/React.module.css'  

  

const Flutter = () => {
  const [src1, setSrc1] = useState('https://www.youtube.com/embed/j-LOab_PzzU')

  const arr = ['https://www.youtube.com/embed/j-LOab_PzzU','https://www.youtube.com/embed/K4P5DZ9TRns', 'https://www.youtube.com/embed/ZWyeW6VWJC8']
  
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
            <img src="/images/flutter.png" alt="Avatar" className={styles.avatar} />
          </div>
          <h1  className={styles.h}>Flutter Course Full Video </h1> 
          
          <div className={styles.child2} >
            <img src="/images/todo.jpg" alt="Avatar" className={styles.avatar} onClick={handle1} />
          </div>
          <h1 className={styles.h}>Projects TODO App <p>(Using Flutter)</p> </h1>
          
          <div className={styles.child2} >
            <img src="/images/tic.jpg" alt="Avatar" className={styles.avatar} onClick={handle2} />
          </div>
          <h1 className={styles.h}>Projects Tic Tac Toe</h1>
          
          </div>
        <div className='child1'>
        <iframe width="942" height="630" src={src1} title="10-Hour React Tutorial 2023 - Zero to Advanced | Learn React JS in Hindi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


          

        </div>
      </div>
    </>
  )
}

export default Flutter
