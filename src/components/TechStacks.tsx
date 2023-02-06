import React from 'react'
import TechCard from './TechCard'

import NextLogo from "../../public/Next-Js.svg"
import ReactLogo from "../../public/React.png"
import SqlLogo from "../../public/SQL.png";
import NodeLogo from "../../public/nodejs.png";
import WordpressLogo from "../../public/wordpress.png"
import PlayStoreLogo from "../../public/play-store.png"
import AppStoreLogo from "../../public/app-store.png";

export default function TechStacks() {
  return (
    <div className='pb-20 bg-dark text-light ' >
        <h1 className='d-flex justify-content-center display-6'>
        <u>Tech-Stacks</u>
        </h1>
        <div className=' d-flex bg-dark text-light flex-row  justify-content-around flex-wrap'>

        <TechCard images={[NextLogo,ReactLogo,SqlLogo,NodeLogo]} title='Web Development' />
        <TechCard images={[PlayStoreLogo,AppStoreLogo]} title='Native App Development' />
        <TechCard images={[NextLogo,PlayStoreLogo,AppStoreLogo,NodeLogo]} title='Web and Mobile App' />
        <TechCard images={[SqlLogo,WordpressLogo]} title='WordPress Development'/>

        </div>

    </div>
  )
}
