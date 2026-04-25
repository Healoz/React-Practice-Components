"use client";
import React from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Nav = () => {
  const pathName = usePathname();
  const router = useRouter();

  const components = [
    { name: "Parallax Sections", url: "/parallax-sections" },
    { name: "Profile Card", url: "/profile-card" },
    { name: "Movie Search", url: "/movie-search" },
    { name: "Miranda Web Hero", url: "/miranda-web-hero" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(e.target.value);
  };

  return (
    <nav className={styles.container}>
      <div className={styles.header}>
        <h1>PRACTICE COMPONENTS</h1>
        <h4 className={styles.subHeading}>
          A random assortment of components for practicing.
        </h4>
      </div>
      <select
        className={styles.componentDropdown}
        value={pathName}
        onChange={handleChange}
      >
        {components.map((component) => (
          <option value={component.url} key={component.url}>
            {component.name}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default Nav;
