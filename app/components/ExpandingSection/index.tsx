"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

// Inspired by: https://neuemontreal.com/?utm_source=extension&utm_medium=click&utm_campaign=muzli

const ExpandingSection = () => {
  const sections = [
    {
      title: "Hairline",
      subtitle: "Montréal's green crown",
      number: 1,
      desc: "Rising at the heart of the city, Mont-Royal is Montréal's defining landmark. Designed by Frederick Law Olmsted, the park spans over 200 hectares of forested trails, meadows, and lookouts. At the summit, the iconic belvedere offers a sweeping panorama of the skyline and the St. Lawrence River. In winter, locals gather to skate, ski and toboggan. In summer, the mountain pulses with picnics and tam-tams. It is not just a park, it is the lungs and soul of the city.",
    },
    {
      title: "Old Stones",
      subtitle: "Cobblestones and centuries",
      number: 2,
      desc: "Tucked along the riverbank, Vieux-Montréal preserves centuries of cobblestone streets and stone facades. The district traces its roots to the 17th century, when fur traders and settlers first carved a foothold here. Notre-Dame Basilica anchors the quarter with its soaring blue ceiling and gilded altar. Horse-drawn carriages still clatter past converted warehouses now filled with bistros and galleries. By night, the old port glows with lantern light. It is a living museum where history refuses to fade.",
    },
    {
      title: "Market Pulse",
      subtitle: "The city's pantry",
      number: 3,
      desc: "Jean-Talon Market has fed Montréal since 1933, sprawling across an entire city block in Little Italy. Vendors stack crates of Quebec strawberries, maple syrup, and wheels of local cheese beneath an open-air canopy. The air carries garlic, fresh bread, and the chatter of dozens of languages. Chefs and grandmothers alike haggle over the same baskets of heirloom tomatoes. Surrounding cafes spill onto the sidewalk for espresso breaks. It is the city's pantry and its town square in one.",
    },
    {
      title: "Underground City",
      subtitle: "A second city below",
      number: 4,
      desc: "Beneath downtown Montréal lies RÉSO, the largest underground complex on earth, stretching over 32 kilometers. Office towers, metro stations, hotels, and shopping concourses connect without ever stepping outside. The network swelled over decades as a direct answer to brutal winters. Commuters flow through tunnels lined with boutiques, food courts, and art installations. Some residents claim they can go weeks without touching daylight. It is a city mirrored beneath itself, humming all winter long.",
    },
    {
      title: "Neon Nights",
      subtitle: "The Main never sleeps",
      number: 5,
      desc: "Saint-Laurent Boulevard splits the city in two and never quite sleeps. Known locally as 'The Main,' it has welcomed waves of immigrants who left their mark in delis, tattoo parlors, and late-night diners. Neon signs flicker above bars that have outlasted a century of trends. On weekends, the strip becomes a slow river of foot traffic between Mile End and the Plateau. Street art covers the alley walls in shifting layers of color. It is the artery where Montréal's many cultures collide and mix.",
    },
    {
      title: "River's Edge",
      subtitle: "Industry turned parkland",
      number: 6,
      desc: "The Lachine Canal once powered the city's industrial boom, its locks hauling grain ships past mills and factories. Today the waterway is a ribbon of parkland, traced by a bike path that runs unbroken for miles. Cyclists and rollerbladers share the route with kayakers gliding below. Old brick warehouses have been reborn as lofts and breweries along the banks. At sunset, the water turns copper beneath the Mercier Bridge. It is a quiet rewrite of a once-roaring industrial past.",
    },
    {
      title: "Festival Ground",
      subtitle: "A stage that never folds",
      number: 7,
      desc: "Quartier des Spectacles transforms into an open-air stage for much of the year, anchored by the Place des Festivals. The Montréal International Jazz Festival alone draws over a million visitors to its free outdoor concerts. Come winter, the same plazas glow with light installations and ice sculptures. Massive screens and speaker towers rise and vanish with the seasons. Locals plan entire summers around the festival calendar posted on lamppost banners. It is a neighborhood built to perform.",
    },
    {
      title: "Island Escape",
      subtitle: "Built for a world's fair",
      number: 8,
      desc: "Parc Jean-Drapeau spreads across two islands in the St. Lawrence, built largely for Expo 67's world's fair. La Ronde amusement park still rattles with roller coasters on Île Sainte-Hélène each summer. Île Notre-Dame, partly man-made from excavated metro tunnel rock, now hosts the Circuit Gilles Villeneuve for the Canadian Grand Prix. Beaches, beer gardens, and the Biosphère museum fill the spaces between. Fireworks competitions light up the river most July nights. It is the city's playground, floating just offshore.",
    },
    {
      title: "Brick Lanes",
      subtitle: "Staircases and slow streets",
      number: 9,
      desc: "The Plateau-Mont-Royal is famous for its winding exterior staircases, a quirk born from tight 19th-century building codes. Triplexes in red brick and pastel siding line streets shaded by mature maples. Ruelles vertes, converted back alleys, host community gardens and mural projects. Cafés on Avenue du Mont-Royal fill with students and writers from dawn until well past midnight. Bicycles outnumber cars on most residential blocks. It is a neighborhood designed for slow, deliberate wandering.",
    },
    {
      title: "Harbor Light",
      subtitle: "Where ships once docked",
      number: 10,
      desc: "The Old Port stretches along the waterfront where transatlantic ships once docked by the hundreds. A restored clock tower still marks the hours over the promenade. Cyclists, street performers, and ice cream stands now fill the space once ruled by cranes and cargo. In winter, the basin freezes into one of the city's largest outdoor skating rinks. Ferries depart from here toward the South Shore and the islands beyond. It is the threshold where Montréal first met the wider world.",
    },
    {
      title: "Sugar Shack",
      subtitle: "Spring's sweetest ritual",
      number: 11,
      desc: "Just beyond the city's edge, the sugar shacks of Quebec mark the arrival of spring with maple syrup season. Steam rises from evaporators as sap boils down inside wooden cabins tucked into maple groves. Families gather for sugar pie, tourtière, and syrup poured straight onto snow to harden into taffy. Fiddles and accordions often strike up between courses at long communal tables. The tradition stretches back to Indigenous tapping methods adopted by early settlers. It is a seasonal ritual that pulls Montréal back to its rural roots.",
    },
  ];

  const numOfSections = sections.length;
  const parentContainer = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [highlightedSection, setHighlightedSection] = useState(1);

  useEffect(() => {
    handleWindowResize();
  }, [parentContainer]);

  function handleWindowResize() {
    if (!parentContainer.current) return;
    setParentWidth(parentContainer.current.getBoundingClientRect().width);
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
  }, []);
  return (
    <div
      className={styles.expandingSections}
      ref={parentContainer}
      onMouseLeave={() => setHighlightedSection(1)}
    >
      {sections.map((section) => (
        <motion.div
          key={section.number}
          className={styles.section}
          animate={{
            width:
              highlightedSection === section.number
                ? (parentWidth / (numOfSections + 3)) * 4
                : parentWidth / (numOfSections + 3),
          }}
          transition={{ type: "spring", stiffness: 30, damping: 15 }}
          onMouseOver={() => setHighlightedSection(section.number)}
        ></motion.div>
      ))}
    </div>
  );
};

export default ExpandingSection;
