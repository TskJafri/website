"use client";

import type { NextPage } from "next";
import { useState, type ReactNode } from "react";
import styles from "./experiences.module.css";
import Tags from "../projects/tags/tags";

export type ExperiencesType = {
  className?: string;
  year?: string;
  title?: string;
  titleHref?: string;
  body?: ReactNode;
  tags?: string[];
  details?: Array<{
    title: string;
    text: string | ReactNode;
  }>;
};

const Experiences: NextPage<ExperiencesType> = ({
  className = "",
  year,
  title,
  titleHref,
  body,
  tags = [],
  details = [],
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    if (details.length === 0) {
      return;
    }
    setIsExpanded((prev) => !prev);
  };

  return (
    <article
      className={[styles.experienceCard, className].join(" ")}
      onClick={toggleExpanded}
      role={details.length > 0 ? "button" : undefined}
      tabIndex={details.length > 0 ? 0 : undefined}
      onKeyDown={(event) => {
        if (!details.length) {
          return;
        }
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleExpanded();
        }
      }}
      aria-expanded={details.length > 0 ? isExpanded : undefined}
      data-has-details={details.length > 0}
    >
      <header className={styles.header}>
        <span className={styles.year}>{year}</span>
        <h3 className={styles.title}>
          {titleHref ? (
            <a
              href={titleHref}
              className={styles.titleLink}
              onClick={(event) => event.stopPropagation()}
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
      </header>
  <p className={styles.description}>{body}</p>
      {details.length > 0 ? (
        <div
          className={styles.details}
          data-expanded={isExpanded}
          onClick={(event) => event.stopPropagation()}
        >
          {details.map((item, index) => (
            <div key={`${item.title}-${index}`} className={styles.detailItem}>
              <div className={styles.detailHeading}>
                <span className={styles.bullet} aria-hidden="true" />
                <h4 className={styles.detailTitle}>{item.title}</h4>
              </div>
              <p className={styles.detailText}>{item.text}</p>
            </div>
          ))}
        </div>
      ) : null}
      {tags.length > 0 ? (
        <div className={styles.tagsRow}>
          {tags.map((tag, index) => (
            <Tags key={`${tag}-${index}`} label={tag} />
          ))}
        </div>
      ) : null}
    </article>
  );
};

export default Experiences;
