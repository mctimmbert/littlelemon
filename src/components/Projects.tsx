import { projects } from "../data/ProjectData.tsx";
import ProjectCard from "./ProjectCard.tsx";

function ProjectsSection() {
  return (
    <section>
      <div className="container">
        <div className="projects-section">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
