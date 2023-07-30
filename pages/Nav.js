import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Modal from './Modal';
import Loginform from './Loginform';
import Signup from './Signup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '@/styles/Courses.module.css'
const Nav = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
//   const [authToken, setAuthToken] = useState('');

 

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleToggleModal1 = () => {
    setShowModal1(!showModal1);
  };

  return (
    <>
      <div id='main'>
        <nav className='nav1'><div id='icon'>
          <h2 className={styles.h2} data-text="Coding_Q">Coding_Q</h2>
        </div>
          <ul className='ml-14'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/About'>About</Link>
            </li>
            {/* <li>
              <Link href='/Courses'>Courses</Link>
            </li> */}
           

            <button className='btn space' onClick={handleToggleModal}>
              Login
            </button>
            {showModal && (
              <Modal onClose={handleToggleModal}>
                <Loginform />
              </Modal>
            )}

            <button className='btn space' onClick={handleToggleModal1}>
              Sign-up
            </button>
            {showModal1 && (
              <Modal onClose={handleToggleModal1}>
                <Signup />
              </Modal>
            )}
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

