import React from 'react';
import styles from "../styles/DevBanner.module.css"


export default function DevBanner() {
  return (
    <div><div className={styles.container}>
    <div className={styles.loader}></div>
    <div className={styles.loader}></div>
    <div className={styles.loader}></div>
  </div></div>
  )
}
