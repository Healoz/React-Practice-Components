"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

// Inspired by: https://neuemontreal.com/?utm_source=extension&utm_medium=click&utm_campaign=muzli

const BentoLayout = () => {
  const scrollContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainer,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);
  return (
    <section>
      <div className={styles.bentoLayoutScroll} ref={scrollContainer}>
        <div className={styles.bentoGridWrapper}>
          <motion.div className={styles.bentoGrid} style={{ x }}></motion.div>
        </div>
      </div>
      <div className={styles.section2}></div>
    </section>
  );
};

export default BentoLayout;
