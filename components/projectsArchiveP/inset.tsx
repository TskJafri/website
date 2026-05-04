import type { NextPage } from "next";
import styles from "./inset.module.css";

export type InsetType = {
  className?: string;
};

const Inset: NextPage<InsetType> = ({ className = "" }) => {
  return (
    <div className={[styles.horizontalinset, className].join(" ")}>
      <div className={styles.divider} />
    </div>
  );
};

export default Inset;
