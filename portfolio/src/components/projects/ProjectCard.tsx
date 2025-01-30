// components/projects/ProjectCard.tsx
import React from "react";
import Link from "next/link";

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <Link href={`/projects/${project.id}`} className="project-link">
        See Details
      </Link>
    </div>
  );
};

export default ProjectCard;
