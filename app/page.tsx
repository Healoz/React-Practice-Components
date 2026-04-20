import ProfileCardGrid from "@/app/components/ProfileCardGrid";
import styles from "./page.module.scss";
import ParallaxSections from "./components/ParallaxSections";

export default function Home() {
  return (
    <section className={styles.container}>
      <ProfileCardGrid />
      {/* <ParallaxSections /> */}
    </section>
  );
}
