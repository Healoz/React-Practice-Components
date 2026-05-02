"use client";
import React, { FC, useState } from "react";
import styles from "./style.module.scss";

interface Props {}

const PlantCard: FC<Props> = ({}) => {
  return (
    <article className={styles.plantCard}>
      <div className={styles.plantInfo}>
        <h3>Monstera</h3>
        <p>Every 7 days</p>
        <div className={styles.plantImage}></div>
      </div>
    </article>
  );
};

export default PlantCard;
