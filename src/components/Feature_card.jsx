import { color } from 'framer-motion';
import React from 'react';

const Feature_card = ({ feature, position }) => {
  let hoverClasses = '';
  switch (position) {
    case 'forthfeature':
      hoverClasses = ' hover:border-b-2 hover:border-r-2';
      break;
    case 'thirdfeature':
      hoverClasses = ' hover:border-b-2 hover:border-l-2';
      break;
    case 'secondfeature':
      hoverClasses = ' hover:border-t-2 hover:border-r-2';
      break;
    case 'firstfeature':
      hoverClasses = ' hover:border-t-2 hover:border-l-2';
      break;
    default:
      hoverClasses = '';
  }
  return (
    <div
      className={`relative ${hoverClasses} flex flex-col items-center justify-center p-5 hover:bg-white/10 border-x-2 boder-y-4 rounded-md h-94`}
    >
      <div className="absolute inset-0 z-0 rounded-lg"></div>
      <div className="relative z-10 flex flex-col gap-5">
        <img
          className="mb-4 h-10 w-10 rounded-full"
          src={feature.icon}
          alt={feature.text}
        />
        <h5 className="text-xl" style={{color:"#2b49b5"}}>{feature.text}</h5>
      </div>
      <p className="text-md ml-16 mt-5 text-justify text-white">
        {feature.description}
      </p>
    </div>
  );
};


export default Feature_card;