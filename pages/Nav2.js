import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Modal from './Modal';
import Loginform from './Loginform';
import Signup from './Signup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';

import styles from '@/styles/Courses.module.css';

const Nav = (props) => {
    const router =useRouter();
  useEffect(() => {
    AOS.init();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [authToken, setAuthToken] = useState('');

 

  const handleToggleModal = () => {
    setShowModal(!showModal);
    router.push('/');
  };

  

  return (
    <>
      <div id='main'>
        <nav className='nav1'>
          <div id='icon'><h2 className={styles.h2} data-text="Coding_Q">Coding_Q</h2></div>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/Demo'>About</Link>
            </li>
            
           
              <li>
                <Link href='/Mycourses'>My Courses</Link>
              </li>
          

            <button className='btn space' onClick={handleToggleModal}>
              Logout
            </button>
           
          </ul>
        </nav>
        <div className='text1'>
          <button className='glowing-btn'>
            <span className='glowing-txt'>
              C<span className='faulty-letter'>O</span>DINGQ
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;

