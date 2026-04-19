"use client";
import styles from "./style.module.scss";
import ProfileCard from "../ProfileCard";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};

const index = () => {
  return (
    <motion.div
      className={styles.profileCardGrid}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div variants={item}>
        <ProfileCard
          name="Lauren Easter"
          role="Developer"
          bio="Passionate Frontend Developer with 2+ years of experience creating thoughtful, efficient, and user-friendly software solutions. I help teams build effective online presence with emphasis on design and develop front-end solutions that enhance existing processes. I thrive on solving technical challenges while learning new skills, focusing on clean, intuitive interfaces that make work easier."
          initials="LE"
          isOnline={true}
          profileImgUrl="https://media.licdn.com/dms/image/v2/D4D03AQHzexL_gjJseA/profile-displayphoto-shrink_800_800/B4DZZvt4zSGgAc-/0/1745631023011?e=1778112000&v=beta&t=6hzFHX3Rf3eDdFTVYkRH1S7W5vjcrboiuxfyYH4nW08"
        ></ProfileCard>
      </motion.div>

      <motion.div variants={item}>
        <ProfileCard
          name="Bob Developer"
          role="Software Engineer"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non pharetra libero. Proin facilisis viverra nibh vitae consequat. Fusce felis justo, sodales at leo ornare."
          initials="BD"
          isOnline={true}
          profileImgUrl="https://images.unsplash.com/photo-15313875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></ProfileCard>
      </motion.div>

      <motion.div variants={item}>
        <ProfileCard
          name="Shy Guy"
          role="Software Engineer"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non pharetra libero. Proin facilisis viverra nibh vitae consequat. Fusce felis justo, sodales at leo ornare."
          initials="SG"
          isOnline={false}
        ></ProfileCard>
      </motion.div>

      <motion.div variants={item}>
        <ProfileCard
          name="Scaredy Cat"
          role="Software Engineer"
          bio="Passionate Frontend Developer with 2+ years of experience creating thoughtful, efficient, and user-friendly software solutions. I help teams build effective online presence with emphasis on design and develop front-end solutions that enhance existing processes. I thrive on solving technical challenges while learning new skills, focusing on clean, intuitive interfaces that make work easier."
          initials="SC"
          isOnline={true}
          profileImgUrl="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></ProfileCard>
      </motion.div>
    </motion.div>
  );
};

export default index;
