import React from 'react'
import styles from '@/styles/Courses.module.css';

// import { MdOutlineWebAsset } from "react-icons/md";
import Modal from './Modal2';
import React1 from './Mycourses/React1';
import Node from './Mycourses/Node';
import Link from 'next/link';

import {HiHome} from 'react-icons/hi'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineContactMail} from 'react-icons/md'
import {BiBook} from 'react-icons/bi'


import { useState } from 'react';
import Footer1 from './Footer1';
import Angular from './Mycourses/Angular';
import Flutter from './Mycourses/Flutter';
import ReactNative from './Mycourses/ReactNative';
import Dbms from './Mycourses/Dbms';
import Dsa from './Mycourses/Dsa';
import CPlus from './Mycourses/CPlus';
import JavaV from './Mycourses/JavaV';
import Python from './Mycourses/Python';


const Mycourses = () => {
  const [showModal, setShowModal] = useState(true);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  //this below modal is for web devlopment
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);
  const [showModal8, setShowModal8] = useState(false);
  const [showModal9, setShowModal9] = useState(false);
  const [showModal10, setShowModal10] = useState(false);
  const [showModal11, setShowModal11] = useState(false);
  const [showModal12, setShowModal12] = useState(false);
  const [showModal13, setShowModal13] = useState(false);
  const [showModal14, setShowModal14] = useState(false);



  const handleToggleModal = () => {
    setShowModal5(!showModal5);

  };
  const handleToggleModal1 = () => {
    setShowModal6(!showModal6);

  };
  const handleToggleModal2 = () => {
    setShowModal7(!showModal7);

  };
  const handleToggleModal3 = () => {
    setShowModal8(!showModal8);
  };
  const handleToggleModal4 = () => {
    setShowModal9(!showModal9);
  };
  const handleToggleModal5 = () => {
    setShowModal10(!showModal10);
  };
  const handleToggleModal6= () => {
    setShowModal11(!showModal11);
  };
  const handleToggleModal7 = () => {
    setShowModal12(!showModal12);
  };
  const handleToggleModal8 = () => {
    setShowModal13(!showModal13);
  };
  const handleToggleModal9 = () => {
    setShowModal14(!showModal14);
  };

  
 



  const handle1 = () => {
    setShowModal(true);
    setShowModal1(false);
    setShowModal2(false);
    setShowModal3(false);
    setShowModal4(false);
  }
  const handle2 = () => {
    setShowModal(false);
    setShowModal1(true);
    setShowModal2(false);
    setShowModal3(false);
    setShowModal4(false);
  }
  const handle3 = () => {
    setShowModal(false);
    setShowModal1(false);
    setShowModal2(true);
    setShowModal3(false);
    setShowModal4(false);
  }
  const handle4 = () => {
    setShowModal(false);
    setShowModal1(false);
    setShowModal2(false);
    setShowModal3(true);
    setShowModal4(false);
  }
  const handle5 = () => {
    setShowModal(false);
    setShowModal1(false);
    setShowModal2(false);
    setShowModal3(false);
    setShowModal4(true);
  }


const [Enroll,setEnroll]=useState(false);
const [Enroll1,setEnroll1]=useState(false);
const [Enroll2,setEnroll2]=useState(false);
const [Enroll3,setEnroll3]=useState(false);
const [Enroll4,setEnroll4]=useState(false);
const [Enroll5,setEnroll5]=useState(false);
const [Enroll6,setEnroll6]=useState(false);
const [Enroll7,setEnroll7]=useState(false);
const [Enroll8,setEnroll8]=useState(false);
const [Enroll9,setEnroll9]=useState(false);
const [Enroll10,setEnroll10]=useState(false);
const [Enroll11,setEnroll11]=useState(false);
const [Enroll12,setEnroll12]=useState(false);
const [Enroll13,setEnroll13]=useState(false);
const [Enroll14,setEnroll14]=useState(false);
const [Enroll15,setEnroll15]=useState(false);


const handleEnroll=()=>{
  setEnroll(true);
}
const handleEnroll1=()=>{
  setEnroll1(true);
}
const handleEnroll2=()=>{
  setEnroll2(true);
}
const handleEnroll3=()=>{
  setEnroll3(true);
}
const handleEnroll4=()=>{
  setEnroll4(true);
}
const handleEnroll5=()=>{
  setEnroll5(true);
}
const handleEnroll6=()=>{
  setEnroll6(true);
}
const handleEnroll7=()=>{
  setEnroll7(true);
}
const handleEnroll8=()=>{
  setEnroll8(true);
}
const handleEnroll9=()=>{
  setEnroll9(true);
}
const handleEnroll10=()=>{
  setEnroll10(true);
}
const handleEnroll11=()=>{
  setEnroll11(true);
}
const handleEnroll12=()=>{
  setEnroll12(true);
}
const handleEnroll13=()=>{
  setEnroll13(true);
}
const handleEnroll14=()=>{
  setEnroll14(true);
}
const handleEnroll15=()=>{
  setEnroll15(true);
}





  return (
    <>
      <section className={styles.background}>
      <nav className={styles.nav}>
    <Link href="/" >Home<HiHome className={styles.s}/></Link>
    <Link href="/About">About<AiOutlineUser className={styles.s}/></Link>  
    
    <Link href="/Contact">Contact<MdOutlineContactMail className={styles.s}/></Link>
    </nav>
      
     
        <div className={styles.parent}>
          <div className={styles.text}>
            <h1 className={styles.font}>Learn With |</h1><h2 className={styles.font3} data-text="Coding_Q">Coding_Q</h2><br></br>
            <h2 className={styles.font2}>
              The Ultimate Guide To Ace<br></br>
              SDE Interviews.</h2>
          </div>
          <div className={styles.container}>
            <img src='images/for2.png' className={styles.img}></img>
          </div>
        </div>
      </section>


      <section className={styles.background1}>

        <div className={styles.courses} onClick={handle1}>
          <img src='images/webdev1.png' className={styles.img1}></img>
          <h1 className={styles.h3}>Web Devlopment</h1>

        </div>

        <div className={styles.courses} onClick={handle2}>
          <img src='images/appdevolpment.png' className={styles.img2}></img>
          <h1 className={styles.h3}>App Devlopment</h1>
        </div>
        <div className={styles.courses} onClick={handle3}>
          <img src='images/DBMSI.png' className={styles.img4}></img>
          <h1 className={styles.h3}>DBMS</h1>
        </div>
        <div className={styles.courses} onClick={handle4}>
          <img src='images/PROB.png' className={styles.img2}></img>
          <h1 className={styles.h3}>Problem Solving</h1>
        </div>
        <div className={styles.courses} onClick={handle5}>
          <img src='images/PROG.png' className={styles.img2}></img>
          <h1 className={styles.h3}>Languages</h1>
        </div>
        {showModal ? <section className={styles.modal}>
          <div className={styles.Card}>
            
            <img src='images/react.jpeg' className={styles.cardImg}>
              
            </img>
            
            <h1 className={styles.h}>ReactJS
            
            </h1>
            <p className={styles.p}>React is a JavaScript-based UI development library. Facebook and an open-source developer community run it.</p>
           
            <div className={styles.button} onClick={handleEnroll3}>Enroll Now
            {
              Enroll3?<img src='images/tick.png' className={styles.imgtick}></img>:" "
            }
            </div>
            <div className={styles.button} onClick={handleToggleModal1}>Watch Videos</div>
            {showModal6 && (
              <Modal onClose={handleToggleModal1}>

                <React1 />
              </Modal>
            )}

          </div>
          <div className={styles.Card}>
            <img src='images/node.png' className={styles.cardImg4}></img>
            <h1 className={styles.h}>NodeJS</h1>
            <p className={styles.p}>Node.js is a JavaScript runtime environment that runs on the V8 engine and executes JavaScript </p>
            
            <div className={styles.button} onClick={handleEnroll}>Enroll Now
            {
              Enroll?<img src='images/tick.png' className={styles.imgtick}></img>:" "
            }



             </div>
            <div className={styles.button} onClick={handleToggleModal}>Watch Videos</div>
            {showModal5 && (
              <Modal onClose={handleToggleModal}>
                <Node />

              </Modal>
            )}






          </div>
          <div className={styles.Card}>
            <img src='images/angular.png' className={styles.cardImg4}></img>
            <h1 className={styles.h}>AngularJS</h1>
            <p className={styles.p}>AngularJS is a JavaScript-based open-source front-end web framework and also developing single-page applications.</p>
            <div className={styles.button} onClick={handleEnroll1}>Enroll Now
            {
              Enroll1?<img src='images/tick.png' className={styles.imgtick}></img>:" "
            }
            
            
            </div>
            <div className={styles.button} onClick={handleToggleModal2}>Watch Videos</div>
            {showModal7 && (
              <Modal onClose={handleToggleModal2}>
                <Angular />

              </Modal>
            )}





          </div>

        </section> : " "}
        {showModal1 ? <section className={styles.modal}>
          <div className={styles.Card}>
            <img src='images/unity.jpg' className={styles.cardImg}></img>
            <h1 className={styles.h}>Unity</h1>
            <p className={styles.p}>Unity is a cross-platform game engine developed by Unity Technologies, Worldwide Developers Conference as a Mac OS X-exclusive game engine.</p>
            <div className={styles.button} onClick={handleEnroll2}>Enroll Now
            {
              Enroll2?<img src='images/tick.png' className={styles.imgtick}></img>:" "
            }
            
            
            </div>
            <div className={styles.button} ><Link href="https://unity.com/">Reading</Link></div>

          </div>
          <div className={styles.Card}>
            <img src='images/flutter.png' className={styles.cardImg4}></img>
            <h1 className={styles.h}>Flutter</h1>
            <div className={styles.p}><p >Flutter is an open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows.</p></div>
            <div className={styles.button} onClick={handleEnroll4}>Enroll Now
            
            {
              Enroll4?<img src='images/tick.png' className={styles.imgtick}></img>:" "
            }
            </div>
            <div className={styles.button} onClick={handleToggleModal3}>Watch Videos</div>
            {showModal8 && (
              <Modal onClose={handleToggleModal3}>
                <Flutter />

              </Modal>
            )}
          </div>
          <div className={styles.Card}>
            <img src='images/reactNative.jpg' className={styles.cardImg4}></img>
            <h1 className={styles.h}>React Native</h1>
            <div className={styles.p}>
              <p>React Native is an open-source UI software framework created by Meta Platforms,Inc. It is used to develop applications for Android, Android TV, iOS     </p>
            </div>
            <div className={styles.button} onClick={handleEnroll5}>Enroll Now
            {
              Enroll5?<img src='images/tick.png' className={styles.imgtick}></img>:" "
            }
            
            
            </div>
            <div className={styles.button} onClick={handleToggleModal4}>Watch Videos</div>
            {showModal9 && (
              <Modal onClose={handleToggleModal4}>
                <ReactNative />

              </Modal>
            )}

          </div>



        </section> : " "}
        {showModal2 ? <section className={styles.modal}>
          <div className={styles.Card}>
            <img src='images/DBMS.png' className={styles.cardImg}></img>
            <h1 className={styles.h}>DBMS</h1>
            <p className={styles.p}>A database management system is a software package designed to define, manipulate, retrieve and manage data in a database database management systemsignificant ways</p>
            <div className={styles.button}onClick={handleEnroll6}>
            Enroll Now
          {
              Enroll6?<img src='images/tick.png' className={styles.imgtick}></img>:" "
          }
            
            
            </div>
            <div className={styles.button}  onClick={handleToggleModal5}>Watch Videos</div>
            {showModal10 && (
              <Modal onClose={handleToggleModal5}>
                <Dbms />
              </Modal>
            )}

          </div>

          <div className={styles.Card}>
            <img src='images/sql.jpg' className={styles.cardImg}></img>
            <h1 className={styles.h}>No SQl</h1>
            <p className={styles.p}>NoSQL is a non-relational database management systems, different from traditional relational database management systems in some significant ways.</p>
            <div className={styles.button} onClick={handleEnroll7}>Enroll Now

            {
              Enroll7?<img src='images/tick.png' className={styles.imgtick}></img>:" "
            }
            </div>
            <div className={styles.button}><Link href="https://www.mongodb.com/document-databases">Reading</Link></div>
          </div>
          <div className={styles.Card}>
            <img src='images/amazon.png' className={styles.cardImg2}></img>
            <h1 className={styles.h}>Amazon Aurora</h1>
            <p className={styles.p}>Amazon Aurora is a relational database service developed and offered by Amazon Web Services beginning in October 2014.Aurora is available as part .</p>
            <div className={styles.button}  onClick={handleEnroll8}                 >Enroll Now
            {
              Enroll8?<img src='images/tick.png' className={styles.imgtick}></img>:" "
            }
            </div>
            <div className={styles.button}><Link href="https://docs.aws.amazon.com/vsts/index.html">Reading</Link></div>
          </div>









        </section> : " "}
        {showModal3 ? <section className={styles.modal}>

          <div className={styles.Card}>
            <img src='images/leetcode.png' className={styles.cardImg4}></img>
            <h1 className={styles.h}>LeetCode Question</h1>
            <p className={styles.p}>This platform offers a range of essential problems for practice, as well as the latest questions being asked by top-tier companies.</p>
            <div className={styles.button} onClick={handleEnroll10}>Enroll Now
            {
              Enroll10?<img src='images/tick.png' className={styles.imgtick}></img>:" "
            }
            </div>
            <div className={styles.button}><Link href="https://leetcode.com">Try it</Link></div>
          </div>
          <div className={styles.Card}>
            <img src='images/DSA.jpg' className={styles.cardImg4}></img>
            <h1 className={styles.h}>DSA</h1>
            <p className={styles.p}>This platform offers a range of essential problems for practice, as well as the latest questions being asked by top-tier companies.</p>
            <div className={styles.button} onClick={handleEnroll11}>Enroll Now
            {
              Enroll11?<img src='images/tick.png' className={styles.imgtick}></img>:" "
            }
            </div>
            <div className={styles.button} onClick={handleToggleModal6}>Watch Videos</div>

            {showModal11 && (
              <Modal onClose={handleToggleModal6}>
                <Dsa />
              </Modal>
            )}






          </div>
          <div className={styles.Card}>
            <img src='images/codeforces.jpg' className={styles.cardImg4}></img>
            <h1 className={styles.h}>CodeForces</h1>
            <p className={styles.p}>This platform offers a range of essential problems for practice, as well as the latest questions being asked by top-tier companies.</p>
            <div className={styles.button} onClick={handleEnroll12}>Enroll Now
            {
              Enroll12?<img src='images/tick.png' className={styles.imgtick}></img>:" "
            }
            </div>
            <div className={styles.button}><Link href="https://codeforces.com">Try it</Link></div>
          </div>


        </section> : " "}

        {showModal4 ? <section className={styles.modal}>
          <div className={styles.Card}>
            <img src='images/Java.jpg' className={styles.cardImg4}></img>
            <h1 className={styles.h}>Java</h1>
            <p className={styles.p}>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>
            <div className={styles.button} onClick={handleEnroll13}>Enroll Now
            
            {
              Enroll13?<img src='images/tick.png' className={styles.imgtick}></img>:" "
            }
            </div>
            <div className={styles.button} onClick={handleToggleModal7}>Watch Videos
            </div>
            {
              showModal12 && (
                <Modal onClose={handleToggleModal7}>
                <JavaV/>
                 
                </Modal>
            )}
          </div>
          <div className={styles.Card}>
            <img src='images/python.png' className={styles.cardImg4}></img>
            <h1 className={styles.h}>Python</h1>
            <p className={styles.p}>Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its.</p>
            <div className={styles.button} onClick={handleEnroll14}>Enroll Now
            {
              Enroll14?<img src='images/tick.png' className={styles.imgtick}></img>:" "
            }
            </div>
            <div className={styles.button} onClick={handleToggleModal8}>Watch Videos</div>
            {
              showModal13 && (
                <Modal onClose={handleToggleModal8}>
                  <Python/>
                </Modal>
              )
              }




            
            
            
            
          </div>
          <div className={styles.Card}>
            <img src='images/cplus.png' className={styles.cardImg4}></img>
            <h1 className={styles.h}>C++</h1>
            <p className={styles.p}>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".</p>
            <div className={styles.button} onClick={handleEnroll15}>Enroll Now
            {
              Enroll15?<img src='images/tick.png' className={styles.imgtick}></img>:" "
            }
            </div>

            <div className={styles.button} onClick={handleToggleModal9}>Watch Videos </div>
            {
              showModal14 && (
                <Modal onClose={handleToggleModal9}>

                 <CPlus></CPlus>
                </Modal>
              )
            }

            
            
           
          </div>
        </section> : " "}
        <Footer1 />
     
      </section>




    </>
  )
}

export default Mycourses
