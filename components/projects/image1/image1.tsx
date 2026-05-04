import type { NextPage } from "next";
import Image from "next/image";
import styles from "./image1.module.css";

export type Image1Type = {
  className?: string;
  imageSrc: string;
  imageAlt?: string;
};

const Image1: NextPage<Image1Type> = ({
  className = "",
  imageSrc,
  imageAlt = "",
}) => {
  return (
    <div className={[styles.image, className].join(" ")}>
      <Image
        className={styles.icon}
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 960px) 100vw, 200px"
      />
    </div>
  );
};

export default Image1;