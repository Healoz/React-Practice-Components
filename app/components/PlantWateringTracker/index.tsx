import React, { FC } from "react";
import styles from "./style.module.scss";
import PlantCard from "../PlantCard";

interface Props {}

const PlantWateringTracker: FC<Props> = ({}) => {
  return (
    <section className={styles.plantCardGrid}>
      <PlantCard />
      <PlantCard />
      <PlantCard />
      <PlantCard />
      <PlantCard />
    </section>
  );
};

export default PlantWateringTracker;
