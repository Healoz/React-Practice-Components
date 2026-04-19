"use client";
import { FC, useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Avatar
 *
 * Displays a circular avatar with an online status indicator.
 * Shows a profile image if provided, otherwise falls back to initials.
 *
 * @param initials - Fallback text shown when no image is provided (e.g. "LE")
 * @param isOnline - Controls the colour of the status dot (green/grey)
 * @param profileImgUrl - Optional profile image URL
 *
 * @example
 * // With image
 * <Avatar initials="LE" isOnline={true} profileImgUrl="https://..." />
 *
 * // Initials fallback
 * <Avatar initials="LE" isOnline={false} />
 */

interface AvatarProps {
  initials: string;
  isOnline: boolean;
  profileImgUrl?: string;
}

const index: FC<AvatarProps> = ({ initials, isOnline, profileImgUrl }) => {
  const [imgError, setImgError] = useState(false);
  const showImage = profileImgUrl && !imgError;

  return (
    <motion.div
      className={styles.avatar}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.avatarCircle}>
        {showImage ? (
          <div className={styles.imgFallback}>
            <Image
              src={profileImgUrl}
              alt="Profile image"
              fill
              onError={() => setImgError(true)}
            />
          </div>
        ) : (
          <h4 className={styles.initials}>{initials}</h4>
        )}
      </div>
      <div
        className={`${styles.onlineStatus} ${!isOnline ? styles.statusIsOffline : ""}`}
      >
        {!isOnline && <p className={styles.offlineSymbol}>x</p>}
      </div>
    </motion.div>
  );
};

export default index;
