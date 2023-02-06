import Image from 'next/image';
import React from 'react';

import FacebookLogo from "../../public/facebook.png";
import WhatsappLogo from "../../public/whatsapp.png";
// import TwitterLogo from "../../public/twitter.png";
import LinkedinLogo from "../../public/linkedin.png";
import YoutubeLogo from "../../public/youtube.png";
import Logo from "../../public/BrandLogo.png";



export default function DigitalContactView() {
  return (
    <div style={{height:"450px",width:300,padding:30}} className='text-light '>
        <Image
        src={Logo}
        alt="Picture of the author"
        width={"100"}
        height={"50"}
        />
        <p className='lead'><u>Sector-62, Noida, IN </u> </p>
        <p className='lead' >Links</p>
        <div className="d-flex justify-content-evenly">
        <Image
          src={FacebookLogo}
          alt={"Facebook"}
          width={"50"}
          height={"50"}
          />
          <Image
          src={WhatsappLogo}
          alt={"Facebook"}
          width={"50"}
          height={"50"}
          />
          <Image
          src={YoutubeLogo}
          alt={"Facebook"}
          width={"50"}
          height={"50"}
          />
          <Image
          src={LinkedinLogo}
          alt={"Facebook"}
          width={"50"}
          height={"50"}
          />
        </div>
        <p className='lead' >About Us</p>
    </div>
  )
}
