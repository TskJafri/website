import type { NextPage } from "next";
import styles from "./body.module.css";

export type BodyType = {
  className?: string;
};

const Body: NextPage<BodyType> = ({ className = "" }) => {
  return (
    <div className={[styles.body, className].join(" ")}>
      <p className={styles.bodytext}>
        Hi! I&apos;m Taskeen Jafri, a junior at Arizona State University studying <span className="text-bold">Applied Mathematics and Physics</span> 
        with a <span className="text-bold">4.00 GPA</span>. I&apos;m fascinated by <span className="text-bold">math and physics</span>, and I tend to 
        learn anything I can get my hands on. Just as importantly, I love teaching what I learn. 
        My primary interest is using <span className="text-bold">computational methods</span> to understand the properties and behavior of matter.
      </p>
      <p className={styles.bodytext}>
        My current research focuses on <span className="text-bold">DNA origami</span>. I&apos;m developing a <span className="text-bold">general-purpose algorithm</span> that analyzes
        equilibrated DNA structures to identify their helices and infer their underlying lattice organization. Put simply, the algorithm takes a bent, 
        simulated structure and works backward to reconstruct how it is organized. I am currently preparing this work for publication. I also work in 
        computational materials science, using <span className="text-bold">DFT</span> and <span className="text-bold">molecular dynamics</span> to identify stable crystal structures and predict 
        the melting points of compounds (that may or may not be ionic).
      </p>
      <p className={styles.bodytext}>
        This website is a collection of my research, projects, writing, and highlights. I have extensive experiences span scientific software, NASA mission research, 
        engineering and AI/ML hackathons, teaching, and web development. I enjoy <span className="text-bold">collaborative, interdisciplinary work</span> and am always happy 
        to meet people interested in discussing research, exchanging ideas, or exploring new opportunities!!
      </p>
    </div>
  );
};

export default Body;
