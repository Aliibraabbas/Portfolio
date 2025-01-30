// components/projects/ProjectList.tsx
import { useState, useEffect } from 'react';
import ProjectCard from '../../components/projects/ProjectCard';
import ProjectFilter from '../../components/projects/ProjectFilter';

// Chargement des projets depuis le fichier JSON
import projectsData from '../../app/data/projects.json';

const ProjectList = () => {
  const [projects, setProjects] = useState<any[]>(projectsData); // Liste des projets
  const [filteredProjects, setFilteredProjects] = useState<any[]>(projectsData); // Projets filtrés

  const handleFilter = (category: string, technology: string) => {
    const filtered = projects.filter(project => {
      const categoryMatch = category ? project.category === category : true;
      const techMatch = technology ? project.technologies.includes(technology) : true;
      return categoryMatch && techMatch;
    });
    setFilteredProjects(filtered);
  };

  return (
    <div className="project-list">
      <ProjectFilter onFilter={handleFilter} />
      <div className="projects">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
