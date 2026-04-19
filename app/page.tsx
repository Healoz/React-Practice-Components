import ProfileCard from "@/app/components/ProfileCard";
import ProfileCardGrid from "@/app/components/ProfileCardGrid";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <section className={styles.container}>
      <h1>Practice Components</h1>
      <p>Profile Card</p>
      <ProfileCardGrid />
    </section>
  );
}
