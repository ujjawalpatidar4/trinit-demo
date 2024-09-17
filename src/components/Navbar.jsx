import React from 'react';
// import logo from '../assets/Study.jpg'
import vslogo from "../assets/vslogo.png"

function Navbar() {
  return (
    <nav className="bg-transparent py-4 flex p-3 h-16 m-5 justify-between px-10  items-center">
        <div className='flex gap-5 items-center'>
            <img src={vslogo} alt="Logo" className='h-12 w-12 rounded-full' />
            <h2 className='text-5xl text-white'>TriniT.ai</h2>
        </div>
      <ul className="text-md flex justify-center">
        <li className="mr-6">
          <a href="#" className="text-gray-200 hover:text-gray-400">
            Home
          </a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-gray-200 hover:text-gray-400">
            About
          </a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-gray-200 hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
      <div>

      </div>
      {/* <div className='flex gap-3 text-white'>
        <button className='hover:text-zinc-400'>Login</button>
        <button className='bg-black h-10 w-20 rounded-sm hover:bg-white hover:text-black'>Register</button>
      </div> */}
    </nav>
  );
}

export default Navbar;