"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import pic from "../image2.png";
interface skilllevrl {
  skill: string;
  level: number;
}

const SkillBar = ({ skill, level }: skilllevrl) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-blue-700 dark:text-white">
        {skill}
      </span>
      <span className="text-sm font-medium text-blue-700 dark:text-white">
        {level}%
      </span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

export default function About() {
  const [activeTab, setActiveTab] = useState("about");

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 70 },
  ];

  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-br from-grey-50 to-red-100 dark:from-gray-800 dark:to-red-20 round"
    >
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 p-8">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  className="rounded-full shadow-lg ring-4 ring-blue-500 dark:ring-blue-400"
                  src={pic}
                  alt="John Doe"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">
                Kristian SoLoVic
              </h2>
              <h3 className="text-xl text-center text-blue-600 dark:text-blue-400 mb-4">
                Full Stack Developer
              </h3>
              <div className="flex justify-center space-x-4 mb-6">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <div className="flex mb-6">
                <button
                  className={`mr-4 pb-2 ${
                    activeTab === "about"
                      ? "border-b-2 border-blue-500 text-blue-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("about")}
                >
                  About Me
                </button>
                <button
                  className={`pb-2 ${
                    activeTab === "skills"
                      ? "border-b-2 border-blue-500 text-blue-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("skills")}
                >
                  Skills
                </button>
              </div>
              {activeTab === "about" ? (
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta odio aperiam nostrum vero labore rerum consequatur
                    voluptas perspiciatis consequuntur modi, minus fuga,
                    molestias quae inventore exercitationem ipsum optio ex
                    delectus?
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Expedita impedit explicabo doloribus excepturi voluptates
                    cupiditate vitae rem atque, recusandae placeat inventore qui
                    quam repudiandae nihil eveniet, architecto quo facere
                    necessitatibus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Exercitationem, incidunt dolores maxime accusamus delectus
                    quam hic nihil ut expedita sint enim odio repudiandae, ad
                    magnam officiis blanditiis! Ratione, saepe perferendis.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <SkillBar
                      key={index}
                      skill={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
