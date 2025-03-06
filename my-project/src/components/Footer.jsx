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
  <h2 className="name text-xl md:text-xl lg:text-xl tracking-widest bg-gradient-to-r from-neutral-500 to-neutral-100 bg-clip-text text-transparent">
    NIKHIL ACHALE
  </h2>
</footer>
  );
}

export default Footer;