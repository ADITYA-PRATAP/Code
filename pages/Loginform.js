
import React from 'react';
import { useState } from 'react';
import {useRouter} from 'next/router';
import styles from '@/styles/Login.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Loginform() {

  useEffect(() => {
    AOS.init();
  }, []);
  
  const [credentials, setcredentials] = useState({ email: "", password: "" });//geolocation for hit through api thats why


  const router=useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();//sinthetic event hota h
    // const {name,email,password,location} = user
    console.log(JSON.stringify(
      {        
        email: credentials.email,
        password: credentials.password,
        
      }))
    // const {name,password,email,location}=credentials;

    const response = await fetch("https://gh-q76i.onrender.com/loginuser", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(
        {
          email: credentials.email,
          password: credentials.password
        }
      )


    });

    const data = await response.json()
    if (!data.success) {
      window.alert("invalid enteries")
      console.log("invalid entry")
    }
    if(data.success){
      // localStorage.setItem("authToken",data.authToken);
      console.log(localStorage.getItem("authToken"));
      // Swal.fire(
      //   'Good job!',
      //   'You clicked the button!',
      //   'success'
      // )
      alert("login successfull");
     
      localStorage.setItem("authToken",data.authToken);
      console.log(localStorage.getItem("authToken"));
      router.push('/Home')      
      console.log("succefully register");
    }
 


  }
  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })

} 

  return (
    <>
    <div className={styles.container}  >
    <img src='images/illustration.png' alt='login' className={styles.img} data-aos="zoom-out-left" data-aos-duration="2000"/>
    <div className={styles.background} >
      <div className={styles.shape}></div>
      <div className={styles.shape}></div>
    </div>
    
    <form className={styles.form} action="/loginuser" method='post' onSubmit={handleSubmit} >
      <h3>Login Here</h3>

      <label className={styles.label}htmlFor="username">Username</label>
      <input className={styles.input} type="text" placeholder="Email or Phone" id="username"   name='email' value={credentials.email} onChange={onchange} />

      <label className={styles.label} htmlFor="password">Password</label>
      <input className={styles.input} type="password" placeholder="Password" id="password"   name='password' value={credentials.password} onChange={onchange} />

      <button className={styles.button} type='submit'>Log In</button>
      <div className={styles.social}>
        <div className={`${styles.go} ${styles.socialItem}`}>
          <i className="fab fa-google"></i> Google
        </div>
        <div className={`${styles.fb} ${styles.socialItem}`}>
          <i className="fab fa-facebook"></i> Facebook
        </div>
      </div>
    </form>
    </div>
   
    </>
  );
};


