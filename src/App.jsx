// import React from 'react';
// import myImage from './assets/sergey-zolkin-_UeY8aTI6d0-unsplash.jpg';
// import myVideo from './assets/7804917-uhd_4096_2160_25fps.mp4'
// import { features } from './constants/index';
// import Feature_card from './components/Feature_card';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import { motion } from 'framer-motion';
// import './app.css'

// const container = {
//   hidden: { opacity: 1, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2,
//       duration: 0.8,
//       ease: [0.42, 0, 0.58, 1],
//     },
//   },
// };

// const item = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 80,
//       damping: 12,
//       duration: 0.6,
//     },
//   },
// };


// function App() {
//   const firstGroup = features.slice(0, 2); // First two features
//   const secondGroup = features.slice(2, 4);
//   return (
//     <>
//       <Navbar />
//       {/* hero-section */}
//       <div className="relative w-full h-screen overflow-hidden">
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover object-contain"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src={myVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white p-8">
//           <h1 className="text-5xl font-bold">
//             Unlock Your Potential with Expert-Led Courses
//           </h1>
//           <p className="text-xl mt-4">
//             Learn from industry leaders and master new skills from the comfort of your home.
//           </p>
//           {/* <div className='flex text-white text-2xl mt-8 gap-5 '> */}
//           {/* <button className='text-white text-xl bg-cyan-950 p-3 font-bold hover:text-3xl'>Get Started</button> */}
//           <div className="relative inline-block mt-8">
//   <button className="rounded-slide-button relative overflow-hidden text-white text-xl bg-transparent border-2 border-cyan-950 p-4 font-bold rounded-full shadow-lg transition-transform duration-500 hover:scale-105">
//   <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transform -translate-x-full transition-all duration-500 ease-out rounded-full">&#8594;</span>
//     <span className="relative z-10 ">Get Started!</span>
//   </button>
// </div>



//           {/* </div> */}
//         </div>
//       </div>
//       {/* features-section */}
//       <div className="relative h-screen bg-cover bg-contain bg-no-repeat bg-black flex items-center justify-center"
//         style={{
//           backgroundImage: `url(${myImage})`
//         }}>
//         <div className="absolute inset-0 backdrop-blur-sm"></div>
//         <div className="relative h-full w-full z-10 text-white text-center p-3 gap-5 flex items-center justify-center flex-col">
//           <h1 className="text-6xl">Features</h1>
//           <motion.div
//             className="h-4/5 w-3/4 flex justify-center bg-transparent items-center flex-col gap-8"
//             variants={container}
//             initial="hidden"
//             whileInView="visible"  // Triggers the animation when in view
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             {/* First row: First two features */}
//             <div className="flex justify-center items-center">
//               {firstGroup.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/2"
//                   variants={item}
//                 >
//                   <Feature_card
//                     feature={feature}
//                     position={index % 2 === 0 ? 'forthfeature' : 'bottom-left'}
//                   />
//                 </motion.div>
//               ))}
//             </div>

//             {/* Second row: Next two features */}
//             <div className="flex justify-center">
//               {secondGroup.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/2"
//                   variants={item}
//                 >
//                   <Feature_card
//                     feature={feature}
//                     position={index % 2 === 0 ? 'top-right' : 'top-left'}
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//       {/* Footer Section */}
//       <Footer />

//     </>
//   );
// }

// export default App;


import React, { useEffect, useRef , useState } from 'react';
import myImage from './assets/sergey-zolkin-_UeY8aTI6d0-unsplash.jpg';
import myVideo from './assets/7804917-uhd_4096_2160_25fps.mp4'
import { features } from './constants/index';
import Feature_card from './components/Feature_card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import './App.css'
import { FaMouse , FaAngleDoubleDown} from 'react-icons/fa';

// import "./custom.css"
// import {
//   Animator,
//   Fade,
//   FadeIn,
//   MoveIn,
//   MoveOut,
//   ScrollContainer,
//   ScrollPage,
//   Sticky,
//   StickyIn,
//   ZoomIn,
//   batch,
// } from "react-scroll-motion";



const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      duration: 0.6,
    },
  },
};


function App() {
  // const sec1ref = useRef(null);
  // const sec2ref = useRef(null);
  // // const [isScrolling , setisScrolling] = useState(false);

  // const handleScroll = () =>{
  //   const sec1height = sec1ref.current.offsetHeight;
  //   const scrollPosition = window.scrollY;

  //   if(scrollPosition>=sec1height * 0.8){
  //     window.scrollTo({
  //       top:sec1height,
  //       behavior:"smooth"
  //     });
  //   }

  //   // if(!isScrolling && window.scrollY>0){
  //   //   sec2ref.current.scrollIntoView({behavior:"smooth"});
  //   //   setisScrolling(true);
  //   //   setTimeout(()=>setisScrolling(false,1000));
  //   // }
  // };

  // useEffect(()=>{
  //   window.addEventListener("scroll",handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll",handleScroll);
  //   };
  // },[]);

  // useEffect(()=>{
  //   const handleScroll = ()=>{
  //     const screen2 = document.querySelector(".screen2");
  //     if(window.scrollY>0){
  //       screen2.classList.add("slide-in");
  //     }else{
  //       screen2.classList.remove("slide-in");
  //     }
  //   }
  //     window.addEventListener("scroll",handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll",handleScroll);
  //     }
  // },[]);
  // console.log
  
  return (
    <>
      

      {/* hero-section */}
      
      <section className="screen1 relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover "
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative">
          <Navbar />
        </div>
        <div className="relative z-10 h-screen flex flex-col justify-center items-center text-center text-white p-8">
          <h1 className="text-5xl font-bold">
            Unlock Your Potential with Expert-Led Courses
          </h1>
          <p className="text-xl mt-4">
            Learn from industry leaders and master new skills from the comfort of your home.
          </p>
          {/* <div className='flex text-white text-2xl mt-8 gap-5 '> */}
          {/* <button className='text-white text-xl bg-cyan-950 p-3 font-bold hover:text-3xl'>Get Started</button> */}
          <div className="relative inline-block mt-8" style={{marginBottom:"7rem"}}>
            <button className="rounded-slide-button relative overflow-hidden text-white text-xl bg-transparent border-2 border-cyan-950 p-4 font-bold rounded-full shadow-lg transition-transform duration-500 hover:scale-105">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transform -translate-x-full transition-all duration-500 ease-out rounded-full">&#8594;</span>
            <span className="relative z-10 ">Get Started!</span>
            </button>
          </div>

          <div className=" z-10 flex justify-center items-center text-center text-white p-8 gap-2">
            <FaMouse/>
            <p>Scroll Down</p>
            <FaAngleDoubleDown/>
        </div>


        </div>
      </section>
      {/* features-section */}
      <section className="screen2 relative h-screen bg-cover bg-no-repeat bg-black flex items-center justify-center translate-y-full will-change-transform transition-transform duration-[1000ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          backgroundImage: `url(${myImage})`
        }}>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="relative h-full w-full z-10 text-white text-center p-5 flex items-center justify-center flex-col" style={{gap:"3.25rem"}}>
          <h1 className="text-6xl">Features</h1>
          <motion.div
            className=" flex justify-center bg-transparent items-center"
            variants={container}
            initial="hidden"
            whileInView="visible"  // Triggers the animation when in view
            viewport={{ once: true, amount: 0.2 }}
          >
              <div className="grid grid-cols-4 gap-6 p-10 h-120">
              {features.map((feature, index) => (
                <motion.div
                key={index}
                variants={item}
               >
                <Feature_card
                  key={index}
                  feature={feature}
                  position={index === 0 ? 'firstfeature' : index === 1 ? 'secondfeature' : index === 2 ? 'thirdfeature' : 'forthfeature'}
                />
                </motion.div>
              ))}
              </div>
          </motion.div>
          <div className="relative w-full ">
            <Footer />
          </div>
        </div>
        
      </section>
      
    </>
  );
}

export default App;
