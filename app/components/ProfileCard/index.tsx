"use client";
import React, { FC, useState } from "react";
import Avatar from "@/app/common/Avatar";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

/**
 * ProfileCard
 *
 * Displays a user's profile information including their avatar,
 * name, role, and bio.
 *
 * @param name - Full name of the user
 * @param role - Job title or role
 * @param bio - Short description
 * @param initials - Fallback text for avatar when no image is provided
 * @param isOnline - Controls the online status indicator
 * @param profileImgUrl - Optional profile image URL
 *
 * @example
 * <ProfileCard
 *   name="Lauren Easter"
 *   role="Developer"
 *   bio="Building things daily"
 *   initials="LE"
 *   isOnline={true}
 * />
 */

interface ProfileCardProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
  isOnline: boolean;
  profileImgUrl?: string;
}

const index: FC<ProfileCardProps> = ({
  name,
  role,
  bio,
  initials,
  isOnline,
  profileImgUrl,
}) => {
  const words = name.split(" ");

  const [rotation, setRotation] = useState(0);

  return (
    <motion.div
      className={styles.profileCard}
      onHoverStart={() => setRotation(Math.random() > 0.5 ? 1 : -1)}
      whileHover={{ y: -8, rotate: rotation }}
      transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
    >
      <Avatar
        initials={initials}
        isOnline={isOnline}
        profileImgUrl={profileImgUrl}
      />
      <h3 className={styles.name}>
        {words.map((word, i) => (
          <span key={i} className={styles.wordWrapper}>
            <motion.span
              className={styles.word}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h3>
      <p className={styles.role}>{role}</p>
      <p className={styles.bio}>{bio}</p>
    </motion.div>
  );
};

export default index;
