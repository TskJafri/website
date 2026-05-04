import type { NextPage } from "next";
import Image from "next/image";
import styles from "./linkedin.module.css";

export type LinkedinType = {
  className?: string;
};

const Linkedin: NextPage<LinkedinType> = ({ className = "" }) => {
  return (
    <div className={[styles.linkedin, className].join(" ")}>
      <Image
        className={styles.icon}
        fill
        sizes="48px"
        alt=""
        src="/Icon2@2x.png"
      />
    </div>
  );
};

export default Linkedin;
