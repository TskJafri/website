import type { NextPage } from "next";
import styles from "./body.module.css";

export type BodyType = {
  className?: string;
};

const Body: NextPage<BodyType> = ({ className = "" }) => {
  return (
    <div className={[styles.body, className].join(" ")}>
      <p className={styles.bodytext}>
        Hi! I'm Taskeen Jafri. I'm crazy about <span className="text-bold">math and physics</span>, and I 
        learn whatever I can get my hands on. Most of all, I love to teach what I learn. I'm a <span className="text-bold">4.00 GPA</span> junior in  <span className="text-bold">Applied Mathematics & physics</span> at Arizona State University (ASU). I am also a
        part of the  <span className="text-bold">Astronomy Club at ASU</span>, where I coordinate the events, and organize star
        parties, talks, outreach and many more fun things.
      </p>
      <p className={styles.bodytext}>
        This website is a collection of my work, projects, highlights, my thoughts, and much more.
        Feel free to explore, look around, and please, contact me if you want to talk! I love
        meeting new people and learning about new opportunities. I <span className="text-bold">love working in teams</span>; I've
        been a part of many competitions, with diverse experience, such as in Engineering
        Hackathons, AI/ML Hackathons, space research, and web development.
      </p>
      <p className={styles.bodytext}>
        My <span className="text-bold">goal is to become a researcher</span>. 
    In my time so far at ASU, I've worked in a wide variety of fields and found a 
    special connection with <span className="text-bold">Computational Sciences</span>. 
    My most recent work is in <span className="text-bold">DNA Origami</span>, 
    where I am working on an Evolutionary model (later to be made a <span className="text-bold">Reinforcement Learning model</span>) to optimize 
    designing and simulation of such structures. Driven by a passion for AI and ML, 
    I aspire to leverage my knowledge and skills to make a significant 
    impact in the field, while continuously learning and growing along the way.
      </p>
    </div>
  );
};

export default Body;
