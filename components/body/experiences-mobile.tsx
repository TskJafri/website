import type { NextPage } from "next";
import styles from "./experiences-mobile.module.css";

export type ExperiencesMobileType = {
  className?: string;
  year?: string;
  title?: string;
  body?: string;
  python?: string;
};

const ExperiencesMobile: NextPage<ExperiencesMobileType> = ({
  className = "",
  year,
  title,
  body,
  python,
}) => {
  return (
    <div className={[styles.experiencesmobile, className].join(" ")}>
      <div className={styles.presentWrapper}>
        <div className={styles.present}>{year}</div>
      </div>
      <div className={styles.experiencesmobileInner}>
        <div className={styles.undergraduateResearchAideAWrapper}>
          <div className={styles.undergraduateResearchAide}>{title}</div>
        </div>
      </div>
      <div className={styles.experiencesmobileChild}>
        <div className={styles.drivenByAPassionForAiAndWrapper}>
          <div className={styles.drivenByA}>{body}</div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.tagsParent}>
          <div className={styles.tags}>
            <div className={styles.python}>{python}</div>
          </div>
          <div className={styles.tags}>
            <div className={styles.python}>Python</div>
          </div>
          <div className={styles.tags}>
            <div className={styles.python}>Python</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesMobile;
