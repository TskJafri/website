"use client";

import type { NextPage } from "next";
import { useState, type KeyboardEvent, type ReactNode } from "react";
import styles from "./project-body.module.css";

type ProjectDetail = {
  title?: string;
  text: ReactNode;
};

type ProjectLink = {
  label: string;
  href?: string;
};

export type ProjectBodyType = {
  className?: string;
  year?: string;
  title?: string;
  madeat?: string;
  link?: ProjectLink;
  tags?: string[];
  details?: ProjectDetail[];
  isDimmed?: boolean;
  onHoverChange?: (isHovered: boolean) => void;
};

const ProjectBody: NextPage<ProjectBodyType> = ({
  className = "",
  year,
  title,
  madeat,
  link,
  tags = [],
  details = [],
  isDimmed = false,
  onHoverChange,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDetails = details.length > 0;

  const toggleExpanded = () => {
    if (!hasDetails) {
      return;
    }
    setIsExpanded((prev) => !prev);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!hasDetails) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleExpanded();
    }
  };

  return (
    <article
      className=
        {[
          styles.projectRow,
          className,
          isDimmed ? styles.dimmed : "",
        ]
          .filter(Boolean)
          .join(" ")}
      data-has-details={hasDetails}
      data-expanded={hasDetails ? String(isExpanded) : undefined}
      onClick={toggleExpanded}
      role={hasDetails ? "button" : undefined}
      tabIndex={hasDetails ? 0 : undefined}
      onKeyDown={handleKeyDown}
      aria-expanded={hasDetails ? isExpanded : undefined}
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
    >
      <div className={styles.rowHeader}>
        <div className={styles.columnYear}>
          <span className={styles.columnText}>{year}</span>
        </div>
        <div className={styles.columnProject}>
          <span className={styles.projectTitle}>{title}</span>
        </div>
        <div className={styles.columnMadeAt}>
          <span className={styles.columnText}>{madeat}</span>
        </div>
        <div className={styles.columnTags}>
          {tags.map((tag, index) => (
            <span key={`${tag}-${index}`} className={styles.tagPill}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.columnLink}>
          {link ? (
            <a
              href={link.href}
              className={styles.projectLink}
              target={link.href ? "_blank" : undefined}
              rel={link.href ? "noreferrer" : undefined}
              onClick={(event) => event.stopPropagation()}
            >
              {link.label}
            </a>
          ) : null}
        </div>
      </div>
      {hasDetails ? (
        <div
          className={styles.projectDetails}
          data-expanded={isExpanded}
          onClick={(event) => event.stopPropagation()}
        >
          <ul className={styles.detailList}>
            {details.map((item, index) => (
              <li
                key={`${item.title ?? "detail"}-${index}`}
                className={styles.detailItem}
              >
                <div className={styles.detailHeading}>
                  <span className={styles.bullet} aria-hidden="true" />
                  {item.title ? (
                    <span className={styles.detailTitle}>{item.title}</span>
                  ) : null}
                </div>
                <span className={styles.detailText}>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
};

export default ProjectBody;
