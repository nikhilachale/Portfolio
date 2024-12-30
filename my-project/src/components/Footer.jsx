import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'



function Footer() {
  useGSAP(()=>{
    gsap.from(".name",{
      y:100,
      duration:1,
      loop:true,
      delay:3
    })
  
  })
  return (
    <div>
      <div className="bg-black flex justify-center p-1 mt-1 ">
        <h2 className='name text-3xl text-white'>
            NIKHIL ACHALE
        </h2>
      </div>
    </div>
  )
}

export default Footer
