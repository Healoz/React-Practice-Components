import React, { FC } from "react";
import Avatar from "@/app/common/Avatar";
import styles from "./style.module.scss";

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
  return (
    <div className={styles.profileCard}>
      <Avatar
        initials={initials}
        isOnline={true}
        profileImgUrl={profileImgUrl}
      />
      <h3>{name}</h3>
      <p className={styles.role}>{role}</p>
      <p className={styles.bio}>{bio}</p>
    </div>
  );
};

export default index;
