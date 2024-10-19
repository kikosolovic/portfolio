import React from "react";
interface Project {
  title: string;
  description: string;
  technologies: string[];
}

const ProjectCard = ({ title, description, technologies }: Project) => (
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
      // href={link}
      href="/project/1"
      className="text-blue-500 hover:text-blue-700 font-medium"
      target="_self"
      rel="noopener noreferrer"
    >
      View Project
    </a>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Task Manager App",
      description:
        "A full-stack web application for managing tasks and to-do lists.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/yourusername/task-manager",
    },
    {
      title: "Weather Forecast Dashboard",
      description:
        "A responsive web app that displays weather forecasts using a third-party API.",
      technologies: ["JavaScript", "HTML", "CSS", "OpenWeatherMap API"],
      link: "https://github.com/yourusername/weather-dashboard",
    },
    {
      title: "E-commerce Platform",
      description:
        "An online shopping platform with user authentication and payment integration.",
      technologies: ["React", "Redux", "Node.js", "PostgreSQL", "Stripe API"],
      link: "https://github.com/yourusername/ecommerce-platform",
    },
  ];

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
