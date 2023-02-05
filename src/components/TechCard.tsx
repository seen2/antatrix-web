import React from "react";
import styles from "../styles/TechCard.module.css"

export default function TechCard(props:{title:string,images?:string[]}) {
  return (
    <div className={styles.card}>
      <h2>{props.title}</h2>

    </div>
  );
}
