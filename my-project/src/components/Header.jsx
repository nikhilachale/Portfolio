import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import React from 'react'



function Header() {

    const portref = useRef(null); 
    const contref = useRef(null); 
    useGSAP(()=>{
      gsap.from([portref.current,contref.current],{
        y:-50,
        duration:.5,
        delay:.5,
        ease:"back.out(1)"
      })
    })

  return (
    <nav className="bg-black shadow-lg border-b border-neutral-800/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

        <h1 ref={portref} className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent tracking-tight">
  Portfolio
</h1>


       {/*  <div  ref={contref} className="hidden md:flex md:items-center md:space-x-8">
            <a href="#" className="text-white text-lg hover:text-blue-200">
              About Me
            </a>
            <a href="#" className="text-white text-lg hover:text-blue-200">
              Contact
            </a>
            <a href="#" className="text-white text-lg hover:text-blue-200">
              Stack
            </a>
          </div> 

          */}

          {/* Mobile Menu (Optional) */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header