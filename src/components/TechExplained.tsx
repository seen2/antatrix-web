import React from 'react';
import Image, { StaticImageData } from "next/image";


import WebDevBanner from "../../public/WebDev.jpg";
import AppDevBanner from "../../public/AppDev.jpg";
import StyledBordered from './StyledBordered';
// import SolutionsBanner from "../../public/Solutions.jpg";


export default function TechExplained(props: { title: string, content?: string, price?: number, image?: StaticImageData,feaures:string[] }) {
  return (
    <div className='container' >
      <div className="d-flex justify-content-center" >
        <StyledBordered><h2 className='h2 text-center text-info'>{props.title || "Web Development"}</h2></StyledBordered>
      </div>
      <br />
      <div className="d-flex flex-row flex-wrap justify-content-around rounded">
        <Image
          src={props.image || WebDevBanner}
          className="img-fluid"

          // unoptimized
          quality={90}
          alt="Picture of the author"
        />
        <p style={{ margin: "3%" }} className="lead">
          {props.content}
        </p>

      </div>
        <StyledBordered><h3 className="h6 text-success">RS-{props.price || "NA"}</h3></StyledBordered>
        <br/>
        <br/>


      <p className="text-muted">
        NOTE: All prices are excluding any taxes applicable by state or central government.
         Further Customization or enhancement will increase the cost and reducing the feature will reduce cost.
      </p>
        <div className="d-flex flex-row flex-wrap justify-content-around">
          {props.feaures.map((feature,index)=>(<p key={index+feature+""} className="h3 text-center"><li>{feature}</li></p>))}
        
        </div>
      <u>All rights reserved @2023 Antatrix</u>

      <hr />
    </div>
  )
}
