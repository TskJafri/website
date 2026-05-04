"use client";
import type { NextPage } from "next";
import { useState, type KeyboardEvent, type ReactNode } from "react";
import Image1 from "./image1/image1";
import Tags from "./tags/tags";
import styles from "./projects.module.css";

export type ProjectsType = {
  className?: string;
  title: string;
  description: ReactNode;
  tags: string[];
  imageSrc: string;
  imageAlt?: string;
  meta?: string;
  titleHref?: string;
  details?: Array<{
    title: string;
    text: string | ReactNode;
  }>;
};

const Projects: NextPage<ProjectsType> = ({
  className = "",
  title,
  description,
  tags,
  imageSrc,
  imageAlt = "",
  meta,
  titleHref,
  details = [],
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
      className={[styles.projects, className].join(" ")}
      onClick={toggleExpanded}
      role={hasDetails ? "button" : undefined}
      tabIndex={hasDetails ? 0 : undefined}
      onKeyDown={handleKeyDown}
      aria-expanded={hasDetails ? isExpanded : undefined}
      data-has-details={hasDetails}
    >
      <div className={styles.imageWrapper}>
        <Image1 className={styles.image} imageSrc={imageSrc} imageAlt={imageAlt} />
      </div>
      <section className={styles.content}>
        {meta ? <p className={styles.meta}>{meta}</p> : null}
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
        <p className={styles.description}>{description}</p>
        {hasDetails ? (
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
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <Tags key={`${tag}-${index}`} label={tag} />
          ))}
        </div>
      </section>
    </article>
  );
};

export default Projects;