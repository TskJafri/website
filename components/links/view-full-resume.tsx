'use client';

import Link from "next/link";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./view-full-resume.module.css";

export type ViewFullResumeType = {
  className?: string;
  label?: string;
  href?: string;
  hoverColor?: string;
};

const ViewFullResume: NextPage<ViewFullResumeType> = ({
  className = "",
  label = "View Full Resume",
  href,
  hoverColor = "#F8B773",
}) => {
  const combinedClassName = [styles.viewFullResume, className].join(" ");

  const styleWithHover = useMemo(() => {
    return {
      "--hover-color": hoverColor,
    } as CSSProperties;
  }, [hoverColor]);

  const content = <span className={styles.viewFullResume2}>{label}</span>;

  if (href) {
    return (
      <Link href={href} className={combinedClassName} style={styleWithHover}>
        {content}
      </Link>
    );
  }

  return (
    <div className={combinedClassName} style={styleWithHover}>
      {content}
    </div>
  );
};

export default ViewFullResume;
