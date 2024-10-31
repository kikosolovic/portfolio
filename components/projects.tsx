import React from "react";
import ProjectData from "../public/Data";
interface Project {
  title: string;
  description: string;
  technologies: string[];
  projectId: number;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  projectId,
}: Project) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded"
        >
          {tech}
        </span>
      ))}
    </div>
    <a
      href={"/project/" + projectId + "/#."}
      className="text-blue-500 hover:text-blue-700 font-medium"
      target="_self"
      rel="noopener noreferrer"
    >
      View Project
    </a>
  </div>
);

const Projects = () => {
  const projects: Project[] = ProjectData.map((project, index) => ({
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    projectId: index,
  }));
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
