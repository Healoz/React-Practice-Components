import ProfileCardGrid from "@/app/components/ProfileCardGrid";
import styles from "./page.module.scss";
import ParallaxSections from "./components/ParallaxSections";

export default function Home() {
  return (
    <section className={styles.container}>
      <h1>PRACTICE COMPONENTS</h1>
      <h4 className={styles.subHeading}>
        A random assortment of components for practicing.
      </h4>
      {/* <h3 className={styles.componentName}>PROFILE CARD</h3> */}
      <h3 className={styles.componentName}>PARALLAX SECTION</h3>
      {/* <ProfileCardGrid /> */}
      <ParallaxSections />
    </section>
  );
}
