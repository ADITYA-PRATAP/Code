import React, { useState } from 'react'
import styles from '@/styles/React.module.css'  

  

const Angular = () => {
  const [src1, setSrc1] = useState('https://www.youtube.com/embed/6zv1PTuqIIc')

  const arr = ['https://www.youtube.com/embed/6zv1PTuqIIc','https://www.youtube.com/embed/adaRRTIiwWk', 'https://www.youtube.com/embed/8VbR_kSy7Wc', 'https://www.youtube.com/embed/309beMyhXtg']
  
  const handle = () => {
    setSrc1(arr[0]);
  }
  const handle1 = () => {
    setSrc1(arr[1]);   

  }
  const handle2 = () => {
    setSrc1(arr[2]);   

  }
  const handle3 = () => {
    setSrc1(arr[3]);   

  }
  const handle4 = () => {
    setSrc1(arr[4]);   

  }

  



  return (
    <>
      <div className={styles.parent}>
        <div className={styles.child1}> 
            
          <div className={styles.child2} onClick={handle} >
            <img src="/images/angular.png" alt="Avatar" className={styles.avatar} />
          </div>
          <h1  className={styles.h}>AngularJS Course Full Video </h1> 
          
          <div className={styles.child2} >
            <img src="/images/Ecom.jpg" alt="Avatar" className={styles.avatar} onClick={handle1} />
          </div>
          <h1 className={styles.h}>Projects Ecommerce </h1>
          
          <div className={styles.child2} >
            <img src="/images/calculator.png" alt="Avatar" className={styles.avatar} onClick={handle2} />
          </div>
          <h1 className={styles.h}>Projects Calculator</h1>
          
          </div>
        <div className='child1'>
        <iframe width="942" height="630" src={src1} title="10-Hour React Tutorial 2023 - Zero to Advanced | Learn React JS in Hindi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


          

        </div>
      </div>
    </>
  )
}

export default Angular
