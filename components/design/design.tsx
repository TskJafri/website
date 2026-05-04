"use client";
import type { NextPage } from "next";
import type { ReactNode } from "react";
import Linkedin from "../icons/linkedin";
import GithubIcon from "../icons/github-icon";
import Instagram from "../icons/instagram";
import styles from "./design.module.css";

export type DesignType = {
  className?: string;
};

const highlights: ReactNode[] = [
  <>Undergraduate researcher in Sulc Lab focusing on computational methods in DNA nanotechnology.</>,
  <>4th place + $1000 winner in Honeywell Hacks for redesigning a turbofan radiator.</>,
  <>
    <u>4x Dean&apos;s List</u> honoree for academic excellence in Applied Mathematics.
  </>,
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/tjafri/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: "https://github.com/TskJafri",
    label: "GitHub",
    Icon: GithubIcon,
  },
  {
    href: "https://www.instagram.com/tskjafri/",
    label: "Instagram",
    Icon: Instagram,
    title: "My Photography",
  },
];

const Design: NextPage<DesignType> = ({ className = "" }) => {
  return (
    <div className={[styles.design, className].join(" ")}>
      <h2 className={styles.yourName}>Taskeen Jafri</h2>
      <p className={styles.tagline}>Designer, researcher, and systems thinker.</p>
      <section className={styles.highlightSection}>
        <h3 className={styles.highlightTitle}>Highlights</h3>
        <ul className={styles.highlightList}>
          {highlights.map((item, index) => (
            <li key={index} className={styles.highlightItem}>
              <span className={styles.highlightBullet} aria-hidden="true" />
              <span className={styles.highlightCopy}>{item}</span>
            </li>
          ))}
        </ul>
      </section>
      <div className={styles.socialRow}>
        {socialLinks.map(({ href, label, Icon, title }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className={styles.socialLink}
            title={title}
          >
            <Icon className={styles.socialIcon} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Design;