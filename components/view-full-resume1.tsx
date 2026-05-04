import type { NextPage } from "next";
import styles from "./view-full-resume1.module.css";

export type ViewFullResume1Type = {
  className?: string;
};

const ViewFullResume1: NextPage<ViewFullResume1Type> = ({ className = "" }) => {
  return (
    <div
      className={[styles.viewFullResume, className].join(" ")}
    >{`View Full Resume `}</div>
  );
};

export default ViewFullResume1;
