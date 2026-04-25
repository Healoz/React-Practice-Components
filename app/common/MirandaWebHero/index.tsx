import { FC } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {}

const MirandaWebHero: FC<Props> = ({}) => {
  return (
    <section className={styles.heroContainer}>
      {/* <Image
        src="/hero/doe.svg"
        alt="doe"
        width={800}
        height={800}
        className={styles.bgElement}
      />
      <Image
        src="/hero/folliage1.svg"
        alt="folliage"
        width={800}
        height={800}
        className={styles.bgElement}
      /> */}
      <Image
        src="/hero/folliage2.svg"
        alt="folliage"
        fill
        className={`${styles.bgElement} ${styles.folliage2}`}
      />
    </section>
  );
};

export default MirandaWebHero;
