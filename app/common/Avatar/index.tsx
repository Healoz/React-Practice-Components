import React, { FC } from "react";
import styles from "./style.module.scss";

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
  return (
    <div className={styles.avatar}>
      <div className={styles.avatarCircle}>
        {/* TODO: conditionally render img or initials based on profileImgUrl */}
        {/* TODO: add alt text fallback if profileImgUrl is broken */}
        <img src={profileImgUrl} alt="Profile image" />
      </div>
      {/* TODO: style onlineStatus dot — green when isOnline, grey when offline */}
      <div className={styles.onlineStatus}></div>
    </div>
  );
};

export default index;
