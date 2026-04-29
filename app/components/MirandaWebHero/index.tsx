"use client";
import { FC, useRef } from "react";
import styles from "./style.module.scss";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface Props {}

const MirandaWebHero: FC<Props> = ({}) => {
  const mouseX = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });

  const layerFurtherest = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const layerFar = useTransform(smoothX, [-0.5, 0.5], [-50, 50]);
  const layerMid = useTransform(smoothX, [-0.5, 0.5], [-80, 80]);
  const layerNear = useTransform(smoothX, [-0.5, 0.5], [-120, 120]);

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
          className={`${styles.bgElementWrapper} ${styles.folliage7}`}
          style={{ x: layerFurtherest }}
        >
          <Image
            src="/hero/folliage7.svg"
            alt="fog"
            fill
            className={styles.bgElementImg}
          />
        </motion.div>
        <motion.div
          className={`${styles.bgElementWrapper} ${styles.fog6}`}
          style={{ x: layerFar }}
        >
          <Image
            src="/hero/fog6.svg"
            alt="fog"
            fill
            className={styles.bgElementImg}
          />
        </motion.div>
        <motion.div
          className={`${styles.bgElementWrapper} ${styles.lake5}`}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        >
          <Image
            src="/hero/lake5.svg"
            alt="folliage"
            fill
            className={styles.bgElementImg}
          />
        </motion.div>
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
          <Image
            src="/hero/doe4.svg"
            alt="doe"
            height={200}
            width={200}
            className={styles.doeImg}
          ></Image>
        </motion.div>
        <motion.div
          className={`${styles.bgElementWrapper} ${styles.folliage2}`}
          style={{ x: layerNear }}
          animate={{ rotate: [0, 2, 0] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        >
          <Image
            src="/hero/folliage2.svg"
            alt="folliage"
            fill
            className={styles.bgElementImg}
          />
        </motion.div>
      </section>
    </div>
  );
};

export default MirandaWebHero;
