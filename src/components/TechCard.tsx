import React from "react";
import styles from "../styles/TechCard.module.css"
import Image, { StaticImageData } from "next/image";

export default function TechCard(props:{title:string,images?:StaticImageData[]}) {
  return (
    <div className={styles.card}>
      <h2 className="display-6">{props.title}
      <div className="d-flex justify-content-evenly mt-3" >
        {props.images?.map((image,i)=>(
          <Image
          key={image+""+i}
          src={image}
          alt={image+""}
          width={"50"}
          height={"50"}
          />
        ))}
      </div>
      </h2>
      

    </div>
  );
}
