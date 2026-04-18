import React, { FC } from "react";
import Avatar from "@/app/common/Avatar";
import styles from "./style.module.scss";

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
  return (
    <div className={styles.profileCard}>
      <Avatar initials="LE" isOnline={true} profileImgUrl={profileImgUrl} />
      <h3>Firstname Lastname</h3>
      <p className={styles.role}>Role name</p>
      <p className={styles.bio}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias neque
        maxime excepturi natus fuga at earum sed, quibusdam voluptas labore
        harum nemo doloremque nesciunt unde et ratione consequatur in similique
        nostrum aliquid obcaecati. Necessitatibus nisi ab quis et esse incidunt?
      </p>
    </div>
  );
};

export default index;
