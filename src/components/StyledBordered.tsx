import React from 'react';
import styles from "../styles/StyledBordered.module.css"

export default function StyledBordered({children}:{children:JSX.Element}) {
  return (
    <button className={styles.button} >{children}</button>
  );
}
