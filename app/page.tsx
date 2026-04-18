import ProfileCard from "@/app/components/ProfileCard";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <section className={styles.container}>
      <h1>Practice Components</h1>
      <ProfileCard
        name="Lauren Easter"
        role="Developer"
        bio="I am a cool developer"
        initials="LE"
        isOnline={false}
        profileImgUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></ProfileCard>
    </section>
  );
}
