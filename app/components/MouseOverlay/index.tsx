"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import {
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

// Inspired by: https://neuemontreal.com/?utm_source=extension&utm_medium=click&utm_campaign=muzli

const MouseOverlay = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 32);
      mouseY.set(e.clientY - 32);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);
  return (
    <section className={styles.wrapper}>
      <motion.div
        className={styles.overlay}
        style={{ x: mouseX, y: mouseY }}
      ></motion.div>
    </section>
  );
};

export default MouseOverlay;
