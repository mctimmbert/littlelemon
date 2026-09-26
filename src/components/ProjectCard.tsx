import type { Project } from "../data/ProjectData";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card">
      <a href={project.link} className="project-card-link">
        <img className="project-card-image" src={project.image} alt={project.alt} />

        <div className="project-card-text">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      </a>
    </article>
  );
}

export default ProjectCard;
