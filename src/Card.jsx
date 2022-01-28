import React from 'react';
import img from './assets/stew.jpg'

export default function Card() {
  return (
  <div className='card relative'> 
    <img className='object-cover w-full h-32 sm:h-48' src={img} alt="img"/>
    <div className='p-4'>
      <span className='block font-bold'>5 Bean Chili Stew</span>
      <span className='text-gray-400 text-sm'>Recipe by Mario</span>
    </div>
    <div className='flex items-center justify-center bg-secondary-100 rounded-full ml-2 mt-2 absolute top-0 px-2 py-2 text-sm' >
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
         30 min</div>
  </div>
  );
}
