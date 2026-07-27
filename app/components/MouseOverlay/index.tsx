"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import {
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

// Inspired by: https://neuemontreal.com/?utm_source=extension&utm_medium=click&utm_campaign=muzli

const MouseOverlay = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 8);
      mouseY.set(e.clientY - 8);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);
  return (
    <section className={styles.wrapper}>
      <motion.div
        className={styles.overlay}
        style={{ x: mouseX, y: mouseY }}
        animate={{ scale: hovered ? 8 : 1 }}
      ></motion.div>
      <h2>This is a heading</h2>
      <p
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero labore
        molestiae, qui alias voluptatum explicabo unde quod iure maiores ab.
        Nihil, dolore impedit. Laborum maxime, ut impedit error asperiores omnis
        fuga blanditiis laboriosam ad, ea consequatur natus, voluptates iusto
        soluta placeat ducimus non reprehenderit optio? Blanditiis deleniti iure
        et assumenda soluta. Incidunt doloribus vitae ex ab fugit aut labore
        iusto magnam debitis maiores. A alias reiciendis vero fugiat debitis
        quibusdam perferendis ex. Aperiam omnis porro nulla qui rem maiores
        asperiores nisi eveniet in ea quia vel nobis doloremque, eaque esse
        ipsum sunt vero amet. Veniam quibusdam cum facilis, tempora expedita
        nulla repellat odio ad natus eos cumque illo. Quidem, minima officiis
        sequi et libero ad, eos autem quaerat ratione facilis laboriosam! Odio
        quam non vero quisquam recusandae? Vitae ullam expedita cumque sunt
        perspiciatis accusamus aspernatur, enim labore assumenda excepturi
        voluptates sapiente optio nesciunt quibusdam quas recusandae asperiores
        quis officia numquam ipsa esse harum! Asperiores ut natus dolorum ipsam
        molestiae dolores, veniam animi qui cupiditate eligendi sint ipsum
        voluptates quas laborum maxime similique, praesentium vel adipisci illum
        assumenda? Doloremque nemo ipsam, sit totam libero eum quasi repudiandae
        accusantium neque distinctio sapiente laudantium omnis, sunt soluta
        minima. Quam neque, repudiandae cum deleniti dolorum facere, quia maxime
        possimus debitis inventore rerum praesentium dolores, omnis odio ab
        cupiditate esse placeat fugiat. Atque ullam temporibus omnis placeat
        ratione enim, eos perspiciatis provident blanditiis asperiores?
        Similique necessitatibus id nostrum. Deserunt tempora quidem sint
        reiciendis unde. Adipisci eaque est sapiente ratione fuga cum? Impedit
        quibusdam suscipit in.
      </p>
    </section>
  );
};

export default MouseOverlay;
