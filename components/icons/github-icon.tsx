import type { NextPage } from "next";
import Image from "next/image";
import styles from "./github-icon.module.css";

export type GithubIconType = {
  className?: string;
};

const GithubIcon: NextPage<GithubIconType> = ({ className = "" }) => {
  return (
    <Image
      className={[styles.githubIcon, className].join(" ")}
      width={48}
      height={48}
      sizes="100vw"
      alt=""
      src="/github1@2x.png"
    />
  );
};

export default GithubIcon;
