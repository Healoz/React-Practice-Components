"use client";
import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

// Inspired by: https://www.meech213.com/photo/elle

const ScrollImage = () => {
  const scrollAreaRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollAreaRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  return (
    <div className={styles.scrollArea} ref={scrollAreaRef}>
      <section className={styles.section}>
        <div className={styles.imgsContainer}>
          <motion.div className={styles.scrollingImgsWrapper} style={{ y }}>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ScrollImage;
