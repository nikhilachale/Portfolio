import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

function Footer() {
  useGSAP(() => {
    gsap.from(".name", {
      y: 100,
     
      duration:1,
      loop:true,
      delay:3
    });
  });

  return (
    <footer className="bg-black flex justify-center items-center p-6 mt-1">
      <h2 className="name text-3xl md:text-4xl lg:text-5xl text-white  tracking-widest">
        NIKHIL ACHALE
      </h2>
    </footer>
  );
}

export default Footer;