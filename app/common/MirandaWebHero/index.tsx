import { FC } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {}

const MirandaWebHero: FC<Props> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.heroContainer}>
        <Image
          src="/hero/folliage2.svg"
          alt="folliage"
          fill
          className={`${styles.bgElement} ${styles.folliage2}`}
          style={{ objectFit: "fill" }}
        />
      </section>
    </div>
  );
};

export default MirandaWebHero;
