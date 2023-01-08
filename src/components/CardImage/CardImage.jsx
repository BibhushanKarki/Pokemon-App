import React from "react";

import pokeball from "../../assets/pokeball.svg";
import styles from "./CardImage.module.scss";

export const CardImage = ({ sprite }) => {
  if (!sprite) {
    return (
      <img className={styles.image} src={pokeball} alt="unknown pokemon" />
    );
  }

  return <img className={styles.image} src={sprite} alt="pokemon" />;
};
