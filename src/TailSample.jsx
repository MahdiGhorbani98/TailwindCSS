import React, { useEffect } from 'react';
import Card from './Card';

export default function TailSample() {

  useEffect(()=>{
    var menu = document.getElementById('menu')
    var navs = document.getElementById('navs')
    console.log(menu);

      menu.addEventListener('click',()=>{
        if (navs.classList.contains('hidden')){
          navs.classList.remove('hidden')
        }else{
          navs.classList.add('hidden')
        }
      })
    
    
  })
  
  return (
    <div className='font-body text-gray-500 grid md:grid-cols-3'>

      <div className='md:col-span-1 flex justify-start md:justify-end w-full'>
        <nav className='w-full'>
          <div className='font-bold p-4 uppercase text-lg border-b border-gray-100 flex justify-between md:justify-end' >
            <h1 >
              <a href="/">Food NewS</a>
            </h1>
            <svg id='menu' xmlns="http://www.w3.org/2000/svg" className="cursor-pointer md:hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>


          <ul id='navs' className='hidden md:block my-4'>
            <li className='flex justify-center md:justify-end pr-4 my-2  md:border-r-4 md:border-primary'>
              <a href="#">
                <span>Home</span>
              </a>
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </li>

            <li className='flex justify-center md:justify-end pr-4 my-2 md:border-r-4 md:border-white'>
              <a href="#">
                <span>About</span>
              </a>
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </li>

            <li className='flex justify-center md:justify-end pr-4 my-2 md:border-r-4 md:border-white'>
              <a href="#">
                <span>Contact</span>
              </a>
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </li>

          </ul>
        </nav>
      </div>
    
      <main className='bg-gray-100 p-14 md:col-span-2'>
        <div className='mb-2 flex justify-end'>
          <a className='btn ' href="#">Log in</a>
          <a className='btn' href="#">Sign up</a>
        </div>

        <header>
          <h2 className='text-7xl text-gray-600'>Recipes</h2>
          <h3 className='mt-2 text-2xl text-gray-500'>For Oliver</h3>
        </header>

        <div>
          {/* Most Popular */}
          <h4 className='border-b pb-2 border-gray-200 mt-6 text-gray-600 mb-8' >Most Popular</h4>
    
          <div className=' grid lg:grid-cols-3 gap-10'>
          {
            [0,1,2].map((item,index)=>(
              <Card key={index}/>
            ))
          }
          </div>

          {/* Most Popular */}
          <h4 className='border-b pb-2 border-gray-200 mt-16 text-gray-600 mb-8'>Most Popular</h4>

          <div className=' grid lg:grid-cols-3 gap-10'>
          {
            [0,1,2].map((item,index)=>(
              <Card key={index}/>
            ))
          }
          </div>
        </div>

        <div className='cursor-pointer  flex justify-center mt-10'>
          <div className='hover:scale-110 transition ease-out duration-300 px-4 py-2 bg-secondary-100 text-secondary-200 font-bold rounded-full uppercase border-rose-100 border'>Load more</div>
        </div>    
      </main>
    </div>
  );
}
