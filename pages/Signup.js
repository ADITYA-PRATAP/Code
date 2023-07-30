import React from 'react'
import styles from '@/styles/Login.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Signup = () => {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", location: "" });//geolocation for hit through api thats why


    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();//sinthetic event hota h
        // const {name,email,password,location} = user
        console.log(JSON.stringify(
            {
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                location: credentials.location
            }))
        // const {name,password,email,location}=credentials;

        const response = await fetch("http://localhost:5000/createuser", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',

            },
            body: JSON.stringify(
                {
                    name: credentials.name, email: credentials.email,
                    password: credentials.password, location: credentials.location
                }
            )


        });
        const data = await response.json()
        if (!data.success) {
            window.alert("invalid enteries")
            console.log("invalid entry")
        }
        else {
            alert("successfully register")
            router.push('/Home')
            console.log("succefully register")
        }



    }
 


    const onchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })

    }






    return (
        <>
            <div className={styles.container}>
                <img src='images/illustration.png' alt='login' className={styles.img} data-aos="zoom-out-left" data-aos-duration="2000"/>
                <div className={styles.background}>
                    <div className={styles.shape}></div>
                    <div className={styles.shape}></div>
                </div>
                <form className={styles.form}  method='post' onSubmit={handleSubmit}>
                    <h3>Signup Here</h3>

                    <label className={styles.label} htmlFor="username">Name</label>
                    <input className={styles.input} type="text" placeholder="Name" id="username" name='name' value={credentials.name} onChange={onchange} />

                    <label className={styles.label} htmlFor="password">Email</label>
                    <input className={styles.input} type="email" placeholder="Email" id="password" name='email' value={credentials.email} onChange={onchange} />

                    <label className={styles.label} htmlFor="password">Password</label>
                    <input className={styles.input} type="password" placeholder="Password" id="password" name='password' value={credentials.password} onChange={onchange} />

                    <label className={styles.label} htmlFor="password">Location</label>
                    <input className={styles.input} type="text" placeholder="Location" id="password" name='location' value={credentials.location} onChange={onchange} />

                    <button className={styles.button} type='submit'>Signup</button>                 
                    
                </form>
            </div>
        </>
    )
}

export default Signup
