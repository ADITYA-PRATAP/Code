import React from 'react'
import styles from '@/styles/Card.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




const Piccards = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className={styles.main1} >
      <img src='images/for3.png ' className={styles.img}></img>
      <div className={styles.font}><h1><b>Our Expert Mentors</b></h1></div>
      <div className={styles.scrollcontainer}>
      <div className={styles.scrollcontent}>

      <div className={styles.card1} data-aos="flip-left"
     
     data-aos-duration="2000" >
        <div className={styles.cards}> 
        <img src='images/aditya2.png'  className={styles.aditya_image}></img>        
        </div>  
        <h1 className='ml-20 mt-8   text-gray-600 text-2xl name'>Aditya Pratap</h1>
        </div>
      <div className={styles.card1} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <div className={styles.cards}> 
        <img src='images/Shivam.png'  className={styles.Shivam_image}></img>        
        </div>  
        <h1 className='ml-20 mt-8   text-gray-600 text-2xl name'>Shivam Jha</h1>
        </div>
      <div className={styles.card1} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <div className={styles.cards}> 
        <img src='images/aman.png'  className={styles.aman_image}></img>        
        </div>  
        <h1 className='ml-20 mt-8   text-gray-600 text-2xl name'>Aman Singh</h1>
        </div>
      
      <div className={styles.card1} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <div className={styles.cards}> 
        <img src='images/faishal.png'  className={styles.faishal_image}></img>        
        </div>  
        <h1 className='ml-20 mt-8   text-gray-600 text-2xl name'>Faishal Saif</h1>
        </div>
        <div className={styles.card1} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <div className={styles.cards}> 
        <img src='images/abhay1.png'  className={styles.abhay_image}></img>        
        </div>  
        <h1 className='ml-20 mt-8   text-gray-600 text-2xl name' >Abhay Singh</h1>
        </div>
      <div className={styles.card1} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <div className={styles.cards}> 
        <img src='images/aditya2.png'  className={styles.aditya_image}></img>        
        </div>  
        <h1 className='ml-20 mt-8   text-gray-600 text-2xl name'>Aditya Pratap</h1>
        </div>

      </div>    
      </div>
      </section>     
    </>


  )
}

export default Piccards
