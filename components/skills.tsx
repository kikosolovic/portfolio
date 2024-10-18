import React from "react";
import { FaCode, FaDatabase, FaServer, FaCogs } from "react-icons/fa";

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 mr-2 text-blue-500" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: FaCode,
      skills: ["JavaScript", "Python", "Java", "C++", "TypeScript"],
    },
    {
      title: "Web Technologies",
      icon: FaServer,
      skills: [
        "HTML5",
        "CSS3",
        "React",
        "Node.js",
        "Express.js",
        "RESTful APIs",
      ],
    },
    {
      title: "Databases",
      icon: FaDatabase,
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
    },
    {
      title: "Tools & Others",
      icon: FaCogs,
      skills: ["Git", "Docker", "AWS", "Agile/Scrum", "Unit Testing", "CI/CD"],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
