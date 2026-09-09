"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import Nabar from "../components/Navbar/nabar";
import Design from "../components/design/design";
import Body from "../components/body/body";
import Experiences from "../components/body/experiences";
import ViewFullResume from "../components/links/view-full-resume";
import Projects from "../components/projects/projects";
import styles from "./homepage.module.css";

const SECTION_IDS = ["top", "work", "projects", "blog"] as const;
type SectionId = (typeof SECTION_IDS)[number];

const isSectionId = (value: string): value is SectionId => {
  return SECTION_IDS.includes(value as SectionId);
};

const Homepage: NextPage = () => {
  const [activeSection, setActiveSection] = useState<SectionId>("top");
  const experiencesItems = [
    {
      year: "05/2026 — Present",
      title: "Neutronics Simulation Intern • Serva Energy",
      titleHref: "https://www.servaenergy.com/",
      body: (
        <>
        Interning at a company that aims to <span className="text-bold">cure cancer through Nuclear Physics</span>, I improved the speed of the neutron transport code by <span className="text-bold">up to 50%</span> and optimized it. I also developed materials-science workflows to <span className="text-bold">predict the melting points</span> of rare compounds such as Radium Oxide (RaO) and related compounds, evaluating phase-coexistence and interface-pinning methods alongside DFT and convex-hull analysis.
        </>
      ),
      tags: ["Neutron Transport", "Molecular Dynamics", "DFT"],
      details: [
        {
          title: "August 2025",
          text: "Investigated computational methods for predicting melting points. Initially implemented the phase-coexistence method, then transitioned to the interface-pinning method after evaluating the two approaches - still in progress, but much faster and theoretically just as accurate.",
        },
        {
          title: "July 2025",
          text: "Continued developing and maintaining the simulation software. Applied density functional theory (DFT) and convex-hull analysis to compounds with limited experimental data, generating computational estimates of material properties, including density, which would later help the company for R&D.",
        },
        {
          title: "June 2025",
          text: "Optimized several methods, reducing runtime by up to 50% for certain models. Redesigned data handling to partition workloads between memory and storage, shifting the primary bottleneck away from RAM and enabling simulations with orders of magnitude more steps.",
        },
        {
          title: "May 2025",
          text: "Joined the team and trained on the company's proprietary neutron transport simulation software, workflows and their objectives for production.",
        },
      ],
    },
    {
      year: "06/2025 — Present",
      title: "Undergraduate Research Aide • ASU",
      titleHref: "https://tjafri.com",
      body: (
        <>
          At the Sulc Lab, I develop tools for <span className="text-bold">DNA origami</span>. 
          My primary project is an <span className="text-bold">Evolutionary Model</span> (later to become a Reinforcement Learning model) 
          that redesigns and optimizes DNA structure designs and simulations. I am also building a <span className="text-bold">JavaScript tool</span> to convert complex DNA file formats (<span className="text-bold">oxDNA to sCADnano</span>) and improve the research workflow.
        </>
      ),
      tags: ["Python", "DNA Research", "HPC"],
      details: [
        {
          title: "November 2025",
          text: (
            <>Began development on a JS-based project to convert oxDNA file formats to sCADnano for software interoperability. It will also help me reduce computation on my Evolutionary Model projects.
            </>),
        },
        {
          title: "October 2025",
          text: "Spent the month reading research papers and began leveraging ASU's Sol Supercomputer (HPC) for parallelized tasks.",
        },
        {
          title: "August 2025",
          text: "Completed the first functional iteration of the Evolutionary Model and began the tuning phase. Here I reviewed lots of literature to improve physical feasibility of the model.",
        },
        {
          title: "June 2025",
          text: "Began development of the Evolutionary Model (EM) for optimizing DNA origami design paths.",
        },
      ],
    },
    {
      year: "05/2024 — 08/2025",
      title: "Mission Materials Archivist • ASU",
      body: (<>
Supported <span className="text-bold">NASA&apos;s Genesis mission</span> through ASU, focusing on 
          solar wind particle data. I designed, built and maintained a <span className="text-bold">Python-based automation system</span> to manage and process the mission&apos;s archival data, dramatically improving the team&apos;s data handling efficiency.
            
            {/* I was involved with the Genesis mission through ASU, launched by NASA, to measure solar wind particles. I also initiated and implemented a Python-based automation system for the archival process, significantly improving efficiency in handling the archival data. */}
            </>),
      tags: ["Python", "Data Processing", "RBS"],
      details: [
        {
          title: "April 2025",
          text: "Expanded role to include Rutherford Backscattering Spectrometry (RBS) data analysis, contributing to deeper scientific research.",
        },
        {
          title: "January 2025",
          text: "Maintained and managed the code, updating it to handle more complex files.",
        },
        {
          title: "September 2024",
          text: "Applied the code to thousands of data files, saving over a hundred hours for my entire team.",
        },
        {
          title: "August 2024",
          text: "Refined the processing and optimized the code to apply to a wider range.",
        },
        {
          title: "June 2024",
          text: "Created and automated the code for data processing and cleaning.",
        },
        {
          title: "May 2024",
          text: "Inventoried the flight samples, along with other samples used for related research.",
        },
      ],
    },
    {
      year: "08/2024 — 12/2024",
      title: "Instructional Aide • ASU",
      body: (
        <>
        As an Instructional Aide for Mathematics, I provided academic support to <span className="text-bold">over 100 students</span> across 5 different courses. 
        My responsibilities included proctoring exams, grading and feedback, along with in class tutoring and help.
        </>),
      tags: ["Teaching", "Presentation"],
    },
  ];

  const projectItems = [
    {
      title: "Honeywell Hacks: Ignite (Click me!)",
      meta: "Aerospace • 2025",
      titleHref: "https://www.youtube.com/watch?v=x0evNHwIjf0",
      description:
      (<>
        Our team won 4th place ($1000) at the <span className="text-bold">Honeywell & ASU hackathon</span> by redesigning a radiator for the HTF7000 turbofan engine. As one of two R&D specialists, I developed the core  <span className="text-bold">thermodynamic equations</span> and used <span className="text-bold">Python</span> to analyze and optimize our final design.
        
        {/* We won 4th place and $1000 in a 2 day engineering hackathon hosted by Honeywell & ASU. My team redesigned the existing radiator to cool down the HTF7000 turbofan engine, for a given set of parameters and constraints. (More info in our youtube video linked above.) <br />
        I was one of 2 R&D specialists of the team; my main role was building the proper equations and my teammate validated them. I then used Python to analyze and optimize our numbers.  */}
        </>),
      details: [
        {
          title: "[ 00:00 ] — The hack begins",
          text: "With no prior aerospace knowledge or experience, my teammate and I stayed up all night learning about the HTF7000 engine, which then allowed us to ideate the redesign.",
        },
        {
          title: "[ +12:00 ] — Mentorship and Refinement",
          text: "Talking to mentors, refining our ideas and ensuring we understand the intricacies of turbofan engines.",
        },
        {
          title: "[ +24:00 ] — Core R&D",
          text: "Self-teaching myself necessary thermal and fluid, deriving formulas and building the core mathematical foundation for our project, validated by my teammates.",
        },
        {
          title: "[ +36:00 ] — Python Optimization",
          text: "Writing python script to optimize our numbers and get real value for our design.",
        },
        {
          title: "[ +40:00 ] — Presentation Preparation",
          text: "Providing data to the designer for presentation, and practicing our pitch. I was the main presenter, so I practiced for a long time to ensure clarity and confidence.",
        },
        {
          title: "[ +48:00 ] — Presentation",
          text: "Final presentation. Our team was selected to give the presentation again in front of Honeywell engineers, and this is when we won 4th place!",
        },
      ],
      tags: ["Thermodynamics", "Presentation", "Python"],
  imageSrc: "/TeamWin.jpeg",
  imageAlt: "Team Honeywell Hacks presentation photo",
    },
    {
      title: "Ion Beam Analysis Lab (IBeAM)",
      meta: "Scientific Analysis • 2025",
      titleHref: "",
      description:
        (<>
        As a researcher in ASU&apos;s IBeAM Lab, I gained hands-on experience with advanced scientific analysis and lab protocols. My role spanned from <span className="text-bold">hardware maintenance</span> on the ion beam accelerator to <span className="text-bold">data analysis</span> of particle scattering, using techniques like <span className="text-bold">Rutherford Backscattering Spectrometry (RBS)</span>.   
        </>),
      details: [
      {
        title: "Lab Protocols",
        text: "I was trained in multiple lab protocols, including radiation safety and sample handling. I learned analysis techniques such as Rutherford Backscattering Spectrometry (RBS) and Particle-Induced X-ray Emission(PIXE).",
      },
      {
        title: "Hardware Maintenance",
        text: "Under supervision, I learnt to open and perform maintenance tasks on high-vacuum systems. Multiples such vacuums were used in the accelerator. I also assisted in troubleshooting the ion beam accelerator, helping disassemble components to understand its mechanics.",
      },
      {
        title: "Data Analysis",
        text: "Mastered the primary software tools for RBS data analysis, including xRUMP and SIMNRA. I later used these skills to analyze data from NASA's Genesis mission, where I used to work earlier.",
      },
      ],
      tags: ["Scientific Analysis", "Lab Hardware", "RBS"],
      imageSrc: "/ibeam.jpeg",
      imageAlt: "Close-up of a custom lighting rig on stage",
    },
    {
      title: "BeastWatch",
      meta: "AI/ML • 2025",
      titleHref: "",
      description:
        (<>
        In a 4-hour, high-pressure hackathon hosted by Voxel51, I designed and developed the core pipeline for BeastWatch, an AI-powered wildlife safety app. We built a <span className="text-bold">complete, functional demo in just 3 hours</span>. My pipeline used a Faster R-CNN to detect animals from a video feed, then fed that data into Gemini 2.0 to generate instant, real-time safety guidance.
        
        {/* As a researcher in ASU's IBeAM Lab, I gained hands-on experience with advanced scientific analysis and lab protocols. My role spanned from <span className="text-bold">hardware maintenance</span> on the ion beam accelerator to <span className="text-bold">data analysis</span> of particle scattering, using techniques like <span className="text-bold">Rutherford Backscattering Spectrometry (RBS)</span>.    */}
        </>),
      details: [
      {
        title: "[ 00:00 ] — The hack begins",
        text: "As a team of six, we brainstormed ideas, and came up with many concepts. After some discussion, we settled on BeastWatch, an AI-powered wildlife safety app.",
      },
      {
        title: "[ +1:00 ] - Role Assignment",
        text: "We split up responsibilities, and I took to building the AI pipeline. We selected the Faster R-CNN model for object detection and Gemini 2.0 for analysis and guidance generation.",
      },
      {
        title: "[ +3:00 ] - Integration and Testing",
        text: "We frantically worked to integrate the models as time grew short. I got the pipeline done, and my teammates were done fine-tuning our AI models. We integrated everything and prepared for submission.",
      },
      {
        title: "[ +4:00 ] - Presentation",
        text: "Our team successfully built and demonstrated a complete, functional product in just 4 hours, showcasing a working AI pipeline from detection to generative AI-based safety advice.",
      },
      ],
      tags: ["Python", "Computer Vision", "AI Pipeline"],
      imageSrc: "/BeastWatch.png",
      imageAlt: "BeastWatch pipeline",
    },
    // {
    //   title: "Sustainity AI",
    //   meta: "AI/ML • 2024",
    //   titleHref: "https://devpost.com/software/sustainaityai",
    //   description:
    //     (<>
    //     Our app, Sustainity, <span className="text-bold">won</span> the <span className="text-bold">AI for Change hackathon</span>. It's a mobile app that promotes sustainability by giving users daily ideas and a free AI chat. As the project's AI specialist, I was responsible for the entire LLM pipeline: I selected, fine-tuned, and optimized <span className="text-bold">TinyLLama</span> to power the chatbot.
        
    //     {/* Winner of the AI for Change hackathon, hosted by Devpost, Wolfram Alpha and more! Sustainity is a mobile app which promotes sustainability. It gives you daily ideas to be more sustainable, and you can talk to the AI for free. <br />
    //     I was responsible for picking, training and optimizing the core LLM behind this idea. I chose TinyLLama, a highly optimized chatbot. It is a perfect intermediate between extremely high-end but expensive models like ChatGPT, and the extremely fast but often inaccurate Mistral AI. */}
    //     </>),
    //   details: [
    //     {
    //       title: "[ 00:00 ] — Team Building",
    //       text: "Through Devpost, I found a teammate in Canada who was also interested in sustainability.",
    //     },
    //     {
    //       title: "[ 24:00 ] — Ideation and Conceptualization",
    //       text: "It was not the easiest to collaborate with someone in a different time zone, but we made it work. We ideated the concept and basic structure of the app.",
    //     },
    //     {
    //       title: "[ 48:00 ] — Fine-tuning and Submission",
    //       text: "Hectic as it was, I fine-tuned our LLM, integrated it with the UI made by my teammate and we uploaded our project!",
    //     },
    //   ],
    //   tags: ["Python", "AI/ML", "Sustainability"],
    //   imageSrc: "/sustainitywin.png",
    //   imageAlt: "Close-up of a custom lighting rig on stage",
    // },
    // {
    //   title: "MaxRes",
    //   meta: "AI/ML & Edge Processing • 2025",
    //   titleHref: "https://github.com/TskJafri/MaxRes",
    //   description:
    //     (<>
    //     In a Lablab.ai hackathon, I optimized a RealESRGAN (resolution increasing computer vision model) to run on edge devices with limited resources. Specifically, the model was optimized for on-board processing on Android Devices. <br />
    //     Achieved &lt; 100ms processing time using Qualcomm Neural SDK and hardware-aware back-end, making it 100x faster than other phones.
    //     {/* As my first-ever hackathon and programming project, I handled both the AI and front-end development for ScamBuster. I successfully fine-tuned <span className="text-bold">Google's BERT</span> model for scam detection and single-handedly designed and coded the <span className="text-bold">UI/UX</span> for the app and its project website.

    //     My first ever hackathon, and first project in terms of programming. I trained and fine-tuned Google's BERT, and made the UI/UX of the ScamBuster app. I also designed the website for this project.", */}
    //     </>),
    //   details: [
    //     {
    //       title: "My Role: AI & Back-End",
    //       text: "This was my first major project with Python. I researched pretrained models on HuggingFace, learned the fundamentals of fine-tuning, and successfully trained a BERT model to classify scam texts, based on datasets I found on Kaggle.",
    //     },
    //     {
    //       title: "My Role: UI/UX & Front-End",
    //       text: "While the team collaborated on the initial concept, I was responsible for translating our ideas into a functional product, coding the app's UI and building the public-facing website.",
    //     },
    //     {
    //       title: "Project Challenge: Global Team",
    //       text: "A key challenge was coordinating with two teammates across a 12+ hour time zone difference. This forced us to master asynchronous communication to successfully integrate our work.",
    //     },
    //   ],
    //   tags: ["Python", "Java", "React"],
    //   imageSrc: "/Icon@2x.png",
    //   imageAlt: "Abstract blue gradient icon",
    // },
  ];

  const blogItems = [
    {
      title: "Astronomy Club at ASU",
      meta: "Head Event Coordinator • 2024 — 2026",
      titleHref: undefined,
      details: [
        {
          title: "February 2026",
          text: (<>Organized multiple events throughout the semester teaching more about astronomy and astrophotography to students, and organizing events in collaboration with other student clubs.</>),
        },
        {
          title: "October 2025",
          text: (<>Organized multiple outreach events, inside and outside ASU, which helped generate the club over <span className="text-bold">100 new members</span> in the span of a few months.</>),
        },
        {
          title: "April 2025",
          text: (<>Helped run and organize a NASA/JAXA conference at ASU, which earned the club <span className="text-bold">$5000</span> in funding for future events!</>),
        },
        {
          title: "February 2025",
          text: (<>Re-election time. Due to time commitments, I ran and won for <span className="text-bold">Head Event Coordinator</span> for the club.</>),
        },
        {
          title: "November 2024",
          text: (<>Got elected as the <span className="text-bold">Vice President</span> for the club, and started planning, coordinating and organizing events.</>),
        },
        {
          title: "March 2024",
          text: (<>Became a telescope crew member, learnt to operate Celestrons, eVscope, Seestars, and more.</>),
        },
      ],
      description:
        "My favorite way of giving back to the community is through astronomy outreach. As the Head Event Coordinator, I organize star parties, outreach events, and more to share the wonders of astronomy with the public.",
      tags: ["Leadership", "Public Speaking", "Outreach"],
      imageSrc: "/astroclub.jpg",
      imageAlt: "Astronomy Club at ASU after NASA/JAXA conference",
    },
    {
      title: "AI Society at ASU",
      meta: "Treasurer • 2023 — 2024",
      titleHref: undefined,
      details: [],
      description:
        "My first experience in a leadership role was as the Treasurer of the AI Society at ASU. As it happened, I later came to realize that it is also the most important role in any club: managing the finances.",
      tags: ["Budgeting", "Leadership", "Operation"],
      imageSrc: "/aisociety.jpeg",
      imageAlt: "Illustrated globe representing augmented reality",
    },
    {
      title: "Volunteer",
      meta: "2023 — 2026",
      titleHref: undefined,
      details: [
        {
      title: "ISSC at ASU",
      text: "I've been a volunteer for them for over 2 years now. I mainly volunteer for events, helping ISSC set up, table, and much more, allowing them to focus on helping international students.",
      },
      {
        title: "Natural Restorations",
        text: "Intermittently volunteer with them for planting trees at the Salt River.",
      },
      ],
      description:
        (<>I actively volunteer with the <span className="text-bold">International Students & Scholars Center (ISSC)</span> at ASU and with <span className="text-bold">Natural Restorations</span> on outdoor conservation projects.</>),
      tags: ["Community Outreach", "Conservation"],
      imageSrc: "/NaturalRestorations.jpeg",
      imageAlt: "Volunteers collaborating in a workshop",
    },{
      title: "Photographer",
      meta: "Lifetime Hobby",
      titleHref: undefined,
      details: [],
      description:
        (<>In my free time, I pursue <span className="text-bold">wildlife photography</span> (also getting into Landscape & Portrait now) as a creative outlet. When stressed, you will find me near water bodies at 8am, looking for hummingbirds or any creature who dares show up! <a className={styles.subtleLink} href="https://www.instagram.com/tskjafri/" target="_blank" rel="noreferrer">You can check out my work on my instagram!</a></>),
      tags: ["Photography", "Visual Design", "Creativity"],
      imageSrc: "/photography.jpg",
      imageAlt: "Volunteers collaborating in a workshop",
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const NAV_ANCHOR_OFFSET = 120;

    const updateActiveSection = () => {
      const sections: Array<{ id: SectionId; distance: number }> = [];

      SECTION_IDS.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) {
          return;
        }
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top - NAV_ANCHOR_OFFSET);
        sections.push({ id, distance });
      });

      if (!sections.length) {
        return;
      }

      sections.sort((a, b) => a.distance - b.distance);
      const nextActive = sections[0].id;
      setActiveSection((prev) => (prev === nextActive ? prev : nextActive));
    };

    const handleScroll = () => {
      window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const scrollToHash = () => {
      const { hash } = window.location;
      if (!hash) {
        return;
      }

      const target = hash.replace(/^#/, "");
      if (!isSectionId(target)) {
        return;
      }

      if (target === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("top");
        return;
      }

      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(target);
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <div className={styles.homepage}>
      <Nabar activeSection={activeSection} />
      <div className={styles.bodyFrame}>
        <div className={styles.leftDesign}>
          <Design />
        </div>
        <section className={styles.rightTextBox}>
          <div className={styles.textInfo}>
            <div id="top" className={styles.sectionAnchor} aria-hidden="true" />
            <div className={styles.bodyIntro}>
              <Body />
            </div>
            <section
              className={`${styles.experiencesGroup} ${styles.anchorTarget}`}
              id="work"
            >
              {experiencesItems.map((item, index) => (
                <Experiences
                  key={index}
                  year={item.year}
                  title={item.title}
                  titleHref={item.titleHref}
                  body={item.body}
                  tags={item.tags}
                  details={item.details}
                />
              ))}
            </section>
            <ViewFullResume href="/Taskeen Jafri Resume.pdf" />

            <section
              className={`${styles.projectsSection} ${styles.anchorTarget}`}
              id="projects"
            >
              <h2 className={styles.sectionHeading}>Projects</h2>
              <div className={styles.projectsColumn}>
                {projectItems.map((project) => (
                  <Projects
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    imageSrc={project.imageSrc}
                    imageAlt={project.imageAlt}
                    meta={project.meta}
                    titleHref={project.titleHref}
                    details={project.details}
                  />
                ))}
              </div>
              <ViewFullResume
                className={styles.archiveLink}
                label="View Full Project Archive"
                href="/projectarchive"
              />
            </section>
            <section
              id="blog"
              className={`${styles.blogSection} ${styles.anchorTarget}`}
            >
              <h2 className={styles.sectionHeading}>Beyond Work</h2>
              <div className={styles.projectsColumn}>
                {blogItems.map((post) => (
                  <Projects
                    key={post.title}
                    title={post.title}
                    description={post.description}
                    tags={post.tags}
                    imageSrc={post.imageSrc}
                    imageAlt={post.imageAlt}
                    meta={post.meta}
                    titleHref={post.titleHref}
                    details={post.details}
                  />
                ))}
              </div>
              <div className={styles.mobileSocialRow}>
                <Image
                  className={styles.githubIcon}
                  width={48}
                  height={48}
                  sizes="100vw"
                  alt=""
                  src="/github1@2x.png"
                />
                <div className={styles.linkedin}>
                  <Image
                    className={styles.icon}
                    width={40}
                    height={40}
                    sizes="100vw"
                    alt=""
                    src="/Icon2@2x.png"
                  />
                </div>
                <div className={styles.linkedin}>
                  <Image
                    className={styles.homepageIcon}
                    width={40}
                    height={40}
                    sizes="100vw"
                    alt=""
                    src="/Icon@2x.png"
                  />
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;