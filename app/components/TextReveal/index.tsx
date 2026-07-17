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
  return <motion.span>{letter === " " ? "\u00A0" : letter}</motion.span>;
};

const SplitText: FC<SplitTextProps> = ({ text, scrollProgress }) => {
  const words = text.split(" ");

  return (
    <p>
      {words.map((word, wordIndex) => {
        const letters = word.split("");
        return (
          <React.Fragment key={wordIndex}>
            <span className={styles.word}>
              {letters.map((letter, letterIndex) => (
                <Letter
                  key={letterIndex}
                  letter={letter}
                  index={letterIndex}
                  total={letters.length}
                  scrollProgress={scrollProgress}
                />
              ))}
            </span>
            {wordIndex < words.length - 1 && " "}
          </React.Fragment>
        );
      })}
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
    console.log("scrolled: ", scrollYProgress);
  });

  return (
    <section className={styles.textReveal} ref={scrollContainer}>
      <div className={`${styles.gradientOverlay}`}></div>
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

        {/* <SplitText
          text="There’s a better way."
          scrollProgress={scrollYProgress}
        />
        <SplitText
          text="PX PUSH is the creative backbone for startups and established
          companies. Our team of seasoned designers, strategists, and writers
          integrates with yours, offering unlimited design at predictable costs.
          Our model is simple and flexible; request design, set priorities, we
          execute."
          scrollProgress={scrollYProgress}
        />

        <SplitText
          text="We offer top-tier creative talent without the headaches. Our team of
          senior designers, strategists, and copywriters becomes yours—minus the
          bloated costs and unpredictability. We’re flexible, reliable, and
          fully integrated with your team, delivering high-quality design at a
          fraction of the price."
          scrollProgress={scrollYProgress}
        />

        <SplitText
          text="It’s like having a world-class design crew on demand, starting at
          $4,000/mo."
          scrollProgress={scrollYProgress}
        /> */}
      </div>
    </section>
  );
};

export default TextReveal;
