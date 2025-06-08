import React from "react";

import styles from "./Title.module.css";
import { Link } from "react-router-dom";

export const Title = (): React.JSX.Element => {
  return (
    <Link to="/" className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.block}>Cabinet d&apos;avocat</span>
        <span className={styles.block}>QUINTARD-PLAYE - JUILLAN</span>
      </h1>
    </Link>
  );
};
