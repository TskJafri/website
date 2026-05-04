import type { NextPage } from "next";
import Image from "next/image";
import styles from "./instagram.module.css";

export type InstagramType = {
  className?: string;
};

const Instagram: NextPage<InstagramType> = ({ className = "" }) => {
  return (
    <div className={[styles.instagram, className].join(" ")}>
      <Image
        className={styles.icon}
        width={40}
        height={40}
        sizes="100vw"
        alt=""
        src="/Icon@2x.png"
      />
    </div>
  );
};

export default Instagram;
