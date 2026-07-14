"use client";
import React, { FC, useRef } from "react";
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

interface LetterProps {
  letter: string;
  index: number;
  total: number;
  scrollProgress: MotionValue<number>;
}

interface SplitTextProps {
  text: string;
  scrollProgress: MotionValue<number>;
}

const Letter: FC<LetterProps> = ({ letter, index, total, scrollProgress }) => {
  const start = index / total;
  const end = start + 1 / total;

  const opacity = useTransform(scrollProgress, [start, end], [0.15, 1]);

  return (
    <motion.span style={{ opacity }}>
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
};

const SplitText: FC<SplitTextProps> = ({ text, scrollProgress }) => {
  const letters = text.split("");

  return (
    <p>
      {letters.map((letter, index) => (
        <Letter
          key={index}
          letter={letter}
          index={index}
          total={letters.length}
          scrollProgress={scrollProgress}
        />
      ))}
    </p>
  );
};

const TextReveal = () => {
  const scrollContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainer,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (scrollYProgress) => {
    console.log(scrollYProgress);
  });

  return (
    <section className={styles.textReveal} ref={scrollContainer}>
      <div className={styles.wrapper}>
        <SplitText
          text="Do you need top-tier creative talent without the headaches? Design is
          crucial for communication, brand identity, and user experience,
          directly affecting your success. However, finding the right design
          solution can be challenging. Full-time designers are costly,
          freelancers unreliable, and typical agencies might not match your pace
          or pricing needs."
          scrollProgress={scrollYProgress}
        />

        {/* <SplitText text="There’s a better way." index={2} />
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
        /> */}
      </div>
    </section>
  );
};

export default TextReveal;
