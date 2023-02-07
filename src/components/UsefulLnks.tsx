import Image from 'next/image';
import React from 'react';

import FacebookLogo from "../../public/facebook.png";
import WhatsappLogo from "../../public/whatsapp.png";
// import TwitterLogo from "../../public/twitter.png";
import LinkedinLogo from "../../public/linkedin.png";
import YoutubeLogo from "../../public/youtube.png";
import Logo from "../../public/BrandLogo.png";
import Link from 'next/link';



export default function UsefulLinks() {
  return (
    <div style={{height:"450px",width:300,padding:30}} className='text-light '>
        
        <p className='lead'>Links </p>
        
        <Link className="lead" href={"/about"}>About Us</Link>
        <br/>
        <Link className="lead" href={"/team"}>Our Team</Link>
        <br/>
        <Link className="lead" href={"/testimonials"}>Testimonials</Link>
        <br/>
        <Link className="lead" href={"/pricing"}>Pricing</Link>
        <br/>
        <Link className="lead" href={"/"}>Home</Link>

    </div>
  )
}
