import React, { useEffect, useRef , useState } from 'react';

import myVideo from "../assets/7804917-uhd_4096_2160_25fps.mp4"

import Navbar from '../components/Navbar';

// import '../App.css'
import { FaMouse , FaAngleDoubleDown} from 'react-icons/fa';



const HomePageHero = () => {
  return (
    <div>
        <section className="relative w-full h-screen overflow-hidden">
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
    </div>
  )
}

export default HomePageHero