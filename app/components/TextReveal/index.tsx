"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

// Inspired by: https://pxpush.com/?utm_source=extension&utm_medium=click&utm_campaign=muzli

// Design plan:

interface SplitTextProps {
  text: string;
  index: number;
}

const SplitText: FC<SplitTextProps> = ({ text, index }) => {
  const letters = text.split("");
  const letterCount = text.length;
  const scrollContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollContainer,
    offset: ["start end", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(index, ": ", latest);
  });

  const highlightedCount = useTransform(
    scrollYProgress,
    [0, 1],
    [0, letterCount],
  );

  return (
    <p ref={scrollContainer}>
      {letters.map((letter, i) => {
        const backgroundColor = useTransform(highlightedCount, (latest) =>
          i <= latest ? "blue" : "transparent",
        );
        return (
          <motion.span key={i} style={{ backgroundColor }}>
            {letter}
          </motion.span>
        );
      })}
    </p>
  );
};

const TextReveal = () => {
  return (
    <section className={styles.textReveal}>
      <div className={styles.wrapper}>
        <SplitText
          text="Do you need top-tier creative talent without the headaches? Design is
          crucial for communication, brand identity, and user experience,
          directly affecting your success. However, finding the right design
          solution can be challenging. Full-time designers are costly,
          freelancers unreliable, and typical agencies might not match your pace
          or pricing needs."
          index={1}
        />

        <SplitText text="There’s a better way." index={2} />
        <SplitText
          text="PX PUSH is the creative backbone for startups and established
          companies. Our team of seasoned designers, strategists, and writers
          integrates with yours, offering unlimited design at predictable costs.
          Our model is simple and flexible; request design, set priorities, we
          execute."
          index={3}
        />

        <SplitText
          text="We offer top-tier creative talent without the headaches. Our team of
          senior designers, strategists, and copywriters becomes yours—minus the
          bloated costs and unpredictability. We’re flexible, reliable, and
          fully integrated with your team, delivering high-quality design at a
          fraction of the price."
          index={4}
        />

        <SplitText
          text="It’s like having a world-class design crew on demand, starting at
          $4,000/mo."
          index={5}
        />
      </div>
    </section>
  );
};

export default TextReveal;
