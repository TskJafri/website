import type { NextPage } from "next";
import styles from "./project-header.module.css";

export type ProjectHeaderType = {
  className?: string;
  year?: string;
  project?: string;
  madeAt?: string;
  builtWith?: string;
  link?: string;
};

const ProjectHeader: NextPage<ProjectHeaderType> = ({
  className = "",
  year,
  project,
  madeAt,
  builtWith,
  link,
}) => {
  return (
    <div className={[styles.projectheader, className].join(" ")}>
      <span className={styles.columnYear}>{year}</span>
      <span className={styles.columnProject}>{project}</span>
      <span className={styles.columnMadeAt}>{madeAt}</span>
      <span className={styles.columnBuiltWith}>{builtWith}</span>
      <span className={styles.columnLink}>{link}</span>
    </div>
  );
};

export default ProjectHeader;
