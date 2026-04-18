import React, { FC } from "react";
import styles from "./style.module.scss";

interface AvatarProps {
  initials: string;
  isOnline: boolean;
  profileImgUrl?: string;
}

const index: FC<AvatarProps> = ({ initials, isOnline, profileImgUrl }) => {
  return (
    <div className={styles.avatar}>
      <div className={styles.avatarCircle}>
        <img src={profileImgUrl} alt="Profile image" />
      </div>
      <div className={styles.onlineStatus}></div>
    </div>
  );
};

export default index;
