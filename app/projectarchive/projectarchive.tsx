"use client";

import type { NextPage } from "next";
import { Fragment, useState } from "react";
import Nabar from "../../components/Navbar/nabar";
import ViewFullResume from "../../components/links/view-full-resume";
import AllProjects from "../../components/projectsArchiveP/all-projects";
import ProjectHeader from "../../components/Navbar/project-header";
import Inset from "../../components/projectsArchiveP/inset";
import ProjectBody from "../../components/projectsArchiveP/project-body";
import styles from "./projectarchive.module.css";
const ProjectArchive: NextPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const archiveProjects = [
    {
      year: "2025",
      title: "Ignite: Redesigning Radiator",
      madeat: "Honeywell • ASU",
      tags: ["Python", "Thermodynamics", "Hackathon"],
      link: {
        label: "Watch recap",
        href: "https://www.youtube.com/watch?v=x0evNHwIjf0",
      },
      details: [
        {
          title: "What I led",
          text: "Derived the thermodynamic equations for the HTF7000 turbofan radiator redesign and validated the model with teammates.",
        },
        {
          title: "Tools",
          text: "Built optimization scripts in Python to tune heat-transfer performance across dozens of design permutations overnight.",
        },
        {
          title: "Outcome",
          text: "Placed 4th overall and earned a $1k prize, plus an encore presentation to Honeywell engineers.",
        },
      ],
    },
    {
      year: "2025",
      title: "Ion Beam Analysis Lab (IBeAM)",
      madeat: "ASU Research Lab",
      tags: ["Scientific Analysis", "Lab Hardware", "RBS"],
      link: {}, // Or link to the lab's official page
      details: [
        {
          title: "Lab Protocols",
          text: "Trained in multiple lab protocols, including radiation safety and sample handling. I learned analysis techniques such as Rutherford Backscattering Spectrometry (RBS) and Particle-Induced X-ray Emission (PIXE).",
        },
        {
          title: "Hardware Maintenance",
          text: "Under supervision, I learned to open and perform maintenance tasks on high-vacuum systems. I also assisted in troubleshooting the ion beam accelerator, helping disassemble components to understand its mechanics.",
        },
        {
          title: "Data Analysis",
          text: "Mastered the primary software tools for RBS data analysis, including xRUMP and SIMNRA. I later used these skills to analyze data from NASA's Genesis mission.",
        },
      ],
    },
    {
      year: "2025",
      title: "MaxRes",
      madeat: "Lablab.ai Hackathon",
      tags: ["Java", "Computer Vision", "Edge Processing", "Optimization"],
      link: {
        label: "View on Github",
        href: "https://github.com/TskJafri/MaxRes",
      },
      details: [
        {
          title: "Goal",
          text: "Adapted and optimized a RealESRGAN (super-resolution) model for high-speed, low-resource inference on edge devices (Android).",
        },
        {
          title: "Tech Stack",
          text: "Used the Qualcomm Neural SDK and a hardware-aware back-end to accelerate the model.",
        },
        {
          title: "Performance",
          text: "Achieved a sub-100ms processing time to upscale images by 10x, a significant performance leap for on-device super-resolution.",
        },
      ],
    },
    {
      year: "2024",
      title: "Sustainity AI",
      madeat: "AI for Change Hackathon",
      tags: ["Python", "TinyLlama", "AI/ML"],
      link: {
        label: "View on Devpost",
        href: "https://devpost.com/software/sustainaityai",
      },
      details: [
        {
          title: "Role",
          text: "Owned the LLM pipeline end-to-end: curated datasets, fine-tuned TinyLlama, and deployed the inference stack for the mobile app.",
        },
        {
          title: "Collaboration",
          text: "Coordinated asynchronously across time zones to align AI sprints with UI milestones and hand-offs.",
        },
        {
          title: "Impact",
          text: "Won the hackathon and produced a working sustainability coach that ships daily nudges and free chat responses.",
        },
      ],
    },
    {
      year: "2023",
      title: "ScamBuster",
      madeat: "Global Team Project",
      tags: ["Python", "BERT", "React", "Design"],
      link: {
        label: "Visit project site",
        href: "https://scambuster7.wordpress.com/",
      },
      details: [
        {
          title: "AI",
          text: "Fine-tuned Google’s BERT model on Kaggle datasets to flag scam messages with production-ready accuracy.",
        },
        {
          title: "Product",
          text: "Designed and built the end-to-end UI/UX for both the web app and the public landing page.",
        },
        {
          title: "Process",
          text: "Kept a distributed team in sync across 12+ hour time differences with async updates and clear specs.",
        },
      ],
    },
    {
      year: "2023",
      title: "iGrader",
      madeat: "ASU Hackathon",
      tags: ["React-Native", "GPT-4", "Tesseract OCR"],
      link: {
        label: "Try iGrader",
        href: "https://igrader.vercel.app/",
      },
      details: [
        {
          title: "My Role",
          text: "Pitched the initial concept and led the back-end development, integrating multiple AI and OCR APIs.",
        },
        {
          title: "Tech Stack",
          text: "Used React-Native for the front-end, while the back-end analyzed rubrics with GPT-4 and extracted text using Tesseract and Nougat OCR. I tried using Flask in back-end as well, but eventually settled on JS.",
        },
        {
          title: "Key Learning",
          text: "A high-pressure, 2-day project that solidified my back-end and API integration skills. It was a challenge I'm glad I took on.",
        },
      ],
    },
    {
      year: "2023",
      title: "Handwritten Digit Classifier",
      madeat: "Personal Project",
      tags: ["CNN", "Python", "Data Science"],
      link: {
        label: "View Google Colab",
        href: "https://colab.research.google.com/drive/1NZFJdrpOiBS6qSdVUgpeXymitoH9cnuR?usp=sharing",
      },
      details: [
        {
          title: "Goal",
          text: "Built a Convolutional Neural Network (CNN) to classify MNIST handwritten digits, achieving 99.2% accuracy.",
        },
        {
          title: "Process",
          text: "Started by coding the network's layers from scratch, then progressed to using standard libraries to experiment with different optimizers (SGD, Adam) and loss functions (CrossEntropyLoss).",
        },
        {
          title: "Outcome",
          text: "This project was a deep dive into the fundamentals of CNNs. I wrote a comprehensive, step-by-step guide explaining the math and code."
        },
      ],
    },
  ];

  return (
    <div className={styles.projectarchive2Parent}>
      <main className={styles.projectarchive2}>
        <Nabar />
        <div className={styles.bodyFrame}>
          <div className={styles.textFrames}>
            <div className={styles.viewFullResumeWrapper}>
              <div className={styles.viewFullResume}>
                <ViewFullResume
                  className={styles.heroLink}
                  hoverColor="#F8B773"
                  label="← Taskeen Jafri"
                  href="/"
                />
              </div>
            </div>
            <div className={styles.allProjectsWrapper}>
              <AllProjects />
            </div>
          </div>
          <div className={styles.projectbody}>
            <ProjectHeader
              year="Year"
              project="Project"
              madeAt="Made at"
              builtWith="Built with"
              link="Link"
            />
            <Inset />
            {archiveProjects.map((project, index) => (
              <Fragment key={`${project.title}-${project.year}`}>
                <ProjectBody
                  {...project}
                  isDimmed={hoveredIndex !== null && hoveredIndex !== index}
                  onHoverChange={(isHovered) => {
                    setHoveredIndex(isHovered ? index : null);
                  }}
                />
                {index < archiveProjects.length - 1 ? <Inset /> : null}
              </Fragment>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectArchive;
