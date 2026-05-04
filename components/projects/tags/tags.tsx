"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./tags.module.css";

export type TagsType = {
  className?: string;
  label?: string;
  tagsBorder?: CSSProperties["border"];
};

const Tags: NextPage<TagsType> = ({
  className = "",
  label = "Tag",
  tagsBorder,
}) => {
  const tagsStyle: CSSProperties = useMemo(() => {
    return {
      border: tagsBorder,
    };
  }, [tagsBorder]);

  return (
    <div className={[styles.tags, className].join(" ")} style={tagsStyle}>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default Tags;