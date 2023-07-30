import React, { useState } from 'react'
import styles from '@/styles/React.module.css'  

  



const ReactNative = () => {
  const [src1, setSrc1] = useState('https://www.youtube.com/embed/6l8RWV8D-Yo')

  const arr = ['https://www.youtube.com/embed/6l8RWV8D-Yo','https://www.youtube.com/embed/hdd6SsssfOM', 'https://www.youtube.com/embed/RxPF47orKzo', 'https://www.youtube.com/embed/309beMyhXtg']
  
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
            <img src="/images/react.png" alt="Avatar" className={styles.avatar} />
          </div>
          <h1  className={styles.h}>React Course Full Video </h1> 
          
          <div className={styles.child2} >
            <img src="/images/quiz.png" alt="Avatar" className={styles.avatar} onClick={handle1} />
          </div>
          <h1 className={styles.h}>Projects Quiz </h1>
          
          <div className={styles.child2} >
            <img src="/images/todo.jpg" alt="Avatar" className={styles.avatar} onClick={handle2} />
          </div>
          <h1 className={styles.h}>Projects Todo List</h1>
          <div className={styles.child2} >
            <img src="/images/travel.jpg" alt="Avatar" className={styles.avatar} onClick={handle3} />
          </div>
          <h1 className={styles.h}>Projects Travel Website</h1>
          </div>
        <div className='child1'>
        <iframe width="942" height="630" src={src1} title="10-Hour React Tutorial 2023 - Zero to Advanced | Learn React JS in Hindi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


          

        </div>
      </div>
    </>
  )
}

export default ReactNative
