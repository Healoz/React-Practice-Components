"use client";
import { FC } from "react";
import styles from "./style.module.scss";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

/**
 * MirandaWebHero
 *
 * A full-screen parallax hero section with layered SVG elements that respond
 * to mouse movement. Each layer moves at a different depth/speed to create
 * a 3D parallax illusion. Includes a subtle floating animation on the lake layer.
 *
 * Layers (back to front):
 * - folliage7 — furthest background, minimal movement
 * - fog6       — mid-background fog, slow drift
 * - lake5      — mid layer with looping vertical float animation
 * - folliage3  — mid-foreground with embedded doe figure
 * - folliage2  — nearest foreground, strongest parallax movement
 *
 * Mouse tracking is normalised to [-0.5, 0.5] relative to the container,
 * with spring smoothing applied before being mapped to pixel offsets per layer.
 *
 * @example
 * <MirandaWebHero />
 */

interface Props {}

const MirandaWebHero: FC<Props> = ({}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const layerFurtherestX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const layerFarX = useTransform(smoothX, [-0.5, 0.5], [-50, 50]);
  const layerMidX = useTransform(smoothX, [-0.5, 0.5], [-80, 80]);
  const layerNearX = useTransform(smoothX, [-0.5, 0.5], [-200, 200]);

  const layerFurtherestY = useTransform(smoothY, [-0.5, 0.5], [-2, 2]);
  const layerFarY = useTransform(smoothY, [-0.5, 0.5], [-5, 5]);
  const layerMidY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);
  const layerNearY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.heroContainer}
        onMouseMove={handleMouseMove}
        aria-hidden="true"
      >
        <motion.div
          className={`${styles.bgElementWrapper} ${styles.folliage7}`}
          style={{ x: layerFurtherestX, y: layerFurtherestY }}
        >
          <Image
            src="/hero/folliage7.svg"
            alt=""
            fill
            className={styles.bgElementImg}
          />
        </motion.div>
        <motion.div
          className={`${styles.bgElementWrapper} ${styles.fog6}`}
          style={{ x: layerFarX, y: layerFarY }}
        >
          <Image
            src="/hero/fog6.svg"
            alt=""
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
            alt=""
            fill
            className={styles.bgElementImg}
          />
        </motion.div>
        <motion.div
          className={`${styles.bgElementWrapper} ${styles.folliage3}`}
          style={{ x: layerMidX, y: layerMidY }}
        >
          <Image
            src="/hero/folliage3.svg"
            alt=""
            fill
            className={styles.bgElementImg}
          />
          <Image
            src="/hero/doe4.svg"
            alt=""
            height={200}
            width={200}
            className={styles.doeImg}
          ></Image>
        </motion.div>
        <motion.div
          className={`${styles.bgElementWrapper} ${styles.folliage2}`}
          style={{ x: layerNearX, y: layerNearY }}
        >
          <Image
            src="/hero/folliage2.svg"
            alt=""
            fill
            className={styles.bgElementImg}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MirandaWebHero;
