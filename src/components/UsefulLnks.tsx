import Image from 'next/image';
import React from 'react';

import FacebookLogo from "../../public/facebook.png";
import WhatsappLogo from "../../public/whatsapp.png";
// import TwitterLogo from "../../public/twitter.png";
import LinkedinLogo from "../../public/linkedin.png";
import YoutubeLogo from "../../public/youtube.png";
import Logo from "../../public/BrandLogo.png";



export default function UsefulLinks() {
  return (
    <div style={{height:"450px",width:300,padding:30}} className='text-light '>
        
        <p className='lead'>Links </p>
        
        <p className='lead' >About Us</p>
        <p className='lead' >Our Team</p>
        <p className='lead' >Services</p>
        <p className='lead' >Pricing</p>
    </div>
  )
}
