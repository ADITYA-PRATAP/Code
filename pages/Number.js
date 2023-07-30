import React from 'react'
import { useState,useEffect } from 'react';
import styles from '@/styles/Number.module.css';
// import Java from '../Cards/Java';
// import Cplusplus from '../Cards/Cplusplus';
// import Python from '../Cards/Python';
// import Demo from './Demo';


const Number = () => {
    const [count, setCount] = useState(1);
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);
    const [count3, setCount3] = useState(1);
    const [count4, setCount4] = useState(1);
    const [startCounting,setStartCounting]=useState(false);

    useEffect(()=>{
        const interval =setInterval(()=>{
        if(count<110){
            setCount(prevCount=>prevCount+1);
        }
        else{
            clearInterval(interval);
        }
        },100);
        return()=>{
            clearInterval(interval);
        }
    },[count]);
    useEffect(()=>{
        const interval =setInterval(()=>{
        if(count1<50){
            setCount1(prevCount=>prevCount+1);
        }
        else{
            clearInterval(interval);
        }
        },100);
        return()=>{
            clearInterval(interval);
        }
    },[count1]);
    useEffect(()=>{
        const interval =setInterval(()=>{
        if(count2<10){
            setCount2(prevCount=>prevCount+1);
        }
        else{
            clearInterval(interval);
        }
        },500);
        return()=>{
            clearInterval(interval);
        }
    },[count2]);
    useEffect(()=>{
        const interval =setInterval(()=>{
        if(count3<20){
            setCount3(prevCount=>prevCount+1);
        }
        else{
            clearInterval(interval);
        }
        },300);
        return()=>{
            clearInterval(interval);
        }
    },[count3]);
    useEffect(()=>{
        const interval =setInterval(()=>{
        if(count4<300){
            setCount4(prevCount=>prevCount+1);
        }
        else{
            clearInterval(interval);
        }
        },20);
        return()=>{
            clearInterval(interval);
        }
    },[count4]);

    useEffect(()=>{

        const handleScroll = () => {
            if (window.scrollY <= 0 && !startCounting) {
              setStartCounting(true);
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, [startCounting]);
    


  return (
    <section className={styles.main3}>
    <div className={styles.heading}>
    <div className={styles.text} ><p>{count}+</p><p className='text-3xl  text-black font-thin' >Views</p></div>
    <div className={styles.text}><p className='ml-9 '>{count1}+</p><p className='text-3xl  text-black font-thin'>Courses </p></div>
    <div className={styles.text}><p className='ml-2'>{count2}+</p><p className='text-3xl  text-black font-thin'>Tie ups </p></div>
    <div className={styles.text}><p className='ml-20 ' >{count3}+</p><p className='text-3xl text-black font-thin'>Certificates delivered</p></div>
    <div className={styles.text}><p className='ml-2'>{count4}+</p><p className='text-3xl  text-black font-thin'>Student</p></div>
    <img src='images/for3.png' className={styles.img}></img>
    </div>
    
    </section>

  )
}

export default Number
