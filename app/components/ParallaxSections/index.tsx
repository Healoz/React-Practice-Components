"use client";
import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

/**
 * ParallaxSections
 *
 * A scroll-driven parallax container with two animated sections.
 * Tracks scroll progress across the full container and applies
 * inverse scale and rotation transforms to each section,
 * creating a stacked parallax effect.
 *
 * Built with Framer Motion.
 *
 * Based on a tutorial by Olivier Larose:
 * @see https://www.youtube.com/watch?v=nZ2LDB7Q7Rk
 */

/**
 * SectionProps
 *
 * @param scrollYProgress - Framer Motion value (0–1) representing
 * scroll progress through the parent container
 */

/**
 * Section1
 *
 * The first parallax section. As the user scrolls down:
 * - Scale transitions from 1 → 0.8
 * - Rotation transitions from 0deg → -5deg
 *
 * @param scrollYProgress - Scroll progress from parent
 */

/**
 * Section2
 *
 * The second parallax section. Animates inversely to Section1:
 * - Scale transitions from 0.8 → 1
 * - Rotation transitions from -5deg → 0deg
 *
 * @param scrollYProgress - Scroll progress from parent
 */

const ParallaxSections = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {}, []);

  return (
    <div className={styles.parallaxSections} ref={container}>
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </div>
  );
};

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const Section1 = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.section className={styles.section1} style={{ scale, rotate }}>
      <h2>SECTION 1</h2>
    </motion.section>
  );
};

const Section2 = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);
  return (
    <motion.section className={styles.section2} style={{ scale, rotate }}>
      <h2>SECTION 2</h2>
    </motion.section>
  );
};

export default ParallaxSections;
