import type { NextPage } from "next";
import styles from "./all-projects.module.css";

export type AllProjectsType = {
  className?: string;
};

const AllProjects: NextPage<AllProjectsType> = ({ className = "" }) => {
  return (
    <h1 className={[styles.allProjects, className].join(" ")}>All Projects</h1>
  );
};

export default AllProjects;
