"use client";
import React, { FC, useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";

interface Props {}

const PlantCard: FC<Props> = ({}) => {
  return (
    <article className={styles.plantCard}>
      <div className={styles.plantInfo}>
        <div className={styles.plantImgContainer}>
          <Image
            src="https://images.unsplash.com/photo-1519336056116-bc0f1771dec8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height={300}
            width={100}
            alt="Image of plant"
          />
        </div>
        <div>
          <h3>Monstera</h3>
          <p>Every 7 days</p>
        </div>
      </div>
    </article>
  );
};

export default PlantCard;
