"use client";

import type { NextPage } from "next";
import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./nabar.module.css";

export type NabarType = {
  className?: string;
  activeSection?: string;
};

const Nabar: NextPage<NabarType> = ({ className = "", activeSection }) => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = useCallback((target: string) => {
    if (typeof window === "undefined") {
      return;
    }

    const nextHash = `#${target}`;

    if (target === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", nextHash);
    }
  }, []);

  const handleNavigation = useCallback(
    (target: string) => {
      if (pathname === "/") {
        scrollToSection(target);
        return;
      }

      const hash = target === "top" ? "#top" : `#${target}`;
      router.push(`/${hash}`, { scroll: false });
    },
    [pathname, router, scrollToSection]
  );

  const navItems = [
    {
      label: "About Me",
      target: "top",
      wrapperClass: styles.menuitem,
    },
    {
      label: "My Work",
      target: "work",
      wrapperClass: styles.menuitem2,
      textClass: styles.menuitem3,
    },
    {
      label: "My Projects",
      target: "projects",
      wrapperClass: styles.menuitem2,
    },
    {
      label: "Beyond Work",
      target: "blog",
      wrapperClass: styles.menuitem2,
    },
    {
      label: "My Resume",
      href: "/TaskeenJafriResume.pdf",
      wrapperClass: styles.menuitem2,
    },
  ];

  return (
    <header className={[styles.nabar, className].join(" ")}>
      {/*
        DELETE THIS ENTIRE BLOCK TO REMOVE YOUR NAME AND THE ICON
      <div className={styles.name}>
        <b className={styles.launchUi}>Taskeen Jafri</b>
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
      </div>
      */}

      {/* This menu part remains */}
      <div className={styles.menuitemParent}>
        {navItems.map(({ label, target, href, wrapperClass, textClass }) => {
          const isActive = activeSection === target;
          const itemClassName = [
            wrapperClass,
            styles.navItem,
            isActive ? styles.activeNavItem : "",
          ]
            .filter(Boolean)
            .join(" ");
          const textClassName = [styles.nabarMenuitem, textClass]
            .filter(Boolean)
            .join(" ");

          if (href) {
            return (
              <a
                key={href}
                className={itemClassName}
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <span className={textClassName}>{label}</span>
              </a>
            );
          }

          if (!target) {
            return null;
          }

          return (
            <div
              key={target}
              className={itemClassName}
              role="link"
              tabIndex={0}
              aria-current={isActive ? "page" : undefined}
              onClick={() => handleNavigation(target)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleNavigation(target);
                }
              }}
            >
              <span className={textClassName}>{label}</span>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Nabar;
