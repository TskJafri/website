import type { NextPage } from "next";
import Image from "next/image";
import styles from "./centered.module.css";

export type CenteredType = {
  className?: string;
};

const Centered: NextPage<CenteredType> = ({ className = "" }) => {
  return (
    <header className={[styles.navbarCentered, className].join(" ")}>
      <div className={styles.nameWrapper}>
        <div className={styles.name}>
          <div className={styles.icon}>
            <Image
              className={styles.favicon}
              width={32}
              height={32}
              sizes="100vw"
              alt=""
              src="/favicon@2x.png"
            />
          </div>
          <b className={styles.launchUi}>Taskeen Jafri</b>
        </div>
      </div>
      <div className={styles.navbarCenteredInner}>
        <div className={styles.menuitemParent}>
          <div className={styles.menuitem}>
            <div className={styles.navbarCenteredMenuitem}>About Me</div>
          </div>
          <div className={styles.menuitem2}>
            <div className={styles.menuitem3}>My Work</div>
            <Image
              className={styles.chevronDownIcon}
              width={12}
              height={12}
              sizes="100vw"
              alt=""
              src="/chevron-down1.svg"
            />
          </div>
          <div className={styles.menuitem2}>
            <div className={styles.navbarCenteredMenuitem}>My Projects</div>
            <Image
              className={styles.navbarCenteredChevronDownIcon}
              width={12}
              height={12}
              sizes="100vw"
              alt=""
              src="/chevron-down1.svg"
            />
          </div>
          <div className={styles.menuitem2}>
            <div className={styles.navbarCenteredMenuitem}>Beyond Work</div>
            <Image
              className={styles.navbarCenteredChevronDownIcon}
              width={12}
              height={12}
              sizes="100vw"
              alt=""
              src="/chevron-down1.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Centered;
