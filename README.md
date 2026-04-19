# React Practice Components

A growing collection of React components built for daily coding practice.
Built with **Next.js**, **TypeScript**, and **Sass**.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

## Table of Contents

- [ProfileCard](#profilecard)
- [Avatar](#avatar)
- [ParallaxSections](#parallaxsections)

## Components

### ProfileCard

![ProfileCard Component](public/screenshots/profile-card.png)

Displays a user profile with avatar, name, role, and bio.

| Prop          | Type    | Required | Description             |
| ------------- | ------- | -------- | ----------------------- |
| name          | string  | ✓        | Full name               |
| role          | string  | ✓        | Job title               |
| bio           | string  | ✓        | Short bio               |
| initials      | string  | ✓        | Avatar fallback text    |
| isOnline      | boolean | ✓        | Online status indicator |
| profileImgUrl | string  | —        | Optional profile image  |

---

### Avatar

![Avatar Component](public/screenshots/avatar.png)

Circular avatar with online status indicator. Shows image or initials fallback.

| Prop          | Type    | Required | Description                |
| ------------- | ------- | -------- | -------------------------- |
| initials      | string  | ✓        | Fallback text e.g. "LE"    |
| isOnline      | boolean | ✓        | Controls status dot colour |
| profileImgUrl | string  | —        | Optional profile image URL |

---

### ParallaxSections

![ParallaxSections Component](public/screenshots/parallax-sections.png)

A scroll-driven parallax container with two animated sections. Tracks scroll progress across the full container height and applies inverse scale and rotation transforms to each section, creating a stacked card parallax effect.

Built with **Framer Motion**. Based on a [tutorial by Olivier Larose](https://www.youtube.com/watch?v=nZ2LDB7Q7Rk).

| Section  | Scroll behaviour                     |
| -------- | ------------------------------------ |
| Section1 | Scale 1 → 0.8, Rotation 0deg → -5deg |
| Section2 | Scale 0.8 → 1, Rotation -5deg → 0deg |

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Framer Motion](https://www.framer.com/motion/)
