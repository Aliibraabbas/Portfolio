// app/projects/page.tsx
import Link from 'next/link';
import { projects } from '@/app/constants/project';

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link href={`/projects/${project.id}`}>
              <button>See Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
