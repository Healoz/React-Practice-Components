"use client";
import { FC, useRef } from "react";
import styles from "./style.module.scss";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface Props {}

const MirandaWebHero: FC<Props> = ({}) => {
  const mouseX = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });

  const layerMid = useTransform(smoothX, [-0.5, 0.5], [-60, 60]);
  const layerNear = useTransform(smoothX, [-0.5, 0.5], [-100, 100]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    mouseX.set(x);
    console.log("x position: ", x);
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.heroContainer} onMouseMove={handleMouseMove}>
        <motion.div
          className={`${styles.bgElementWrapper} ${styles.folliage3}`}
          style={{ x: layerMid }}
        >
          <Image
            src="/hero/folliage3.svg"
            alt="folliage"
            fill
            className={styles.bgElementImg}
          />
        </motion.div>
        <motion.div
          className={`${styles.bgElementWrapper} ${styles.folliage2}`}
          style={{ x: layerNear }}
        >
          <Image
            src="/hero/folliage2.svg"
            alt="folliage"
            fill
            className={styles.bgElementImg}
          />
        </motion.div>
        <motion.div
          className={`${styles.bgElementWrapper} ${styles.folliage1}`}
        >
          <Image
            src="/hero/folliage1.svg"
            alt="folliage"
            height={500}
            width={400}
            className={styles.bgElementImg}
          />
        </motion.div>
      </section>
    </div>
  );
};

export default MirandaWebHero;
