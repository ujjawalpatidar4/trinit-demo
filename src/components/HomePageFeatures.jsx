import React, { useEffect, useRef , useState } from 'react';
import myImage from '../assets/sergey-zolkin-_UeY8aTI6d0-unsplash.jpg';

import { features } from '../constants/index';
import Feature_card from '../components/Feature_card';
import Footer from '../components/Footer';

import { motion } from 'framer-motion';
// import '../App.css'


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
  

const HomePageFeatures = () => {
  return (
    <div>
        <section className="relative h-screen bg-cover bg-no-repeat bg-black flex items-center justify-center"
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
    </div>
  )
}

export default HomePageFeatures