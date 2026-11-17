"use client";

import { motion } from "motion/react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "@/constants/projects-redesign";

export default function ProjectsRedesign() {
  return (
    <section id="projects" className="dossier-section dossier-projects">
      <div className="dossier-rail">
        <div className="section-heading"><p className="mono-label">Selected work</p><h2>Projects with a point of view.</h2><p>Systems built to make hard technical workflows observable, useful, and easier to operate.</p></div>
        <div className="project-list">
          {projects.map((project, index) => {
            return <motion.article key={project.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.04, ease: [0.32, 0.72, 0, 1] }} className={index === 0 ? "project-row project-featured" : "project-row"}>
              <div className="project-number">0{index + 1}</div>
              <div className="project-body">
                <div className="project-title-line"><h3>{project.title}</h3><span className="project-type">{project.type}</span></div>
                <p>{project.description}</p>
                <p className="project-detail">{project.detail}</p>
                <div className="project-meta">{project.techStack.map((tech) => <span key={tech.name}>{tech.name}</span>)}</div>
                <div className="project-links">
                  {project.githubLink && <a href={project.githubLink} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> Source <FiArrowUpRight aria-hidden="true" /></a>}
                  {project.liveLink && <a href={project.liveLink} target="_blank" rel="noreferrer">Live demo <FiArrowUpRight aria-hidden="true" /></a>}
                </div>
              </div>
            </motion.article>;
          })}
        </div>
        <div className="section-index"><span>03</span><span>Projects</span></div>
      </div>
    </section>
  );
}
