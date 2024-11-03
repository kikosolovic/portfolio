"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFileDownload, FaGithub } from "react-icons/fa";
import ImageSlider from "@/components/ImageSlider";

import ProjectData from "@/public/Data";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  console.log(id);
  const project = ProjectData[id];

  return (
    <div id="." className="min-h-screen bg-background">
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          src={project.mainImage}
          alt={project.title}
          fill
          className="opacity-80 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
          priority
        />
        <div className=" absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-transparent to-black/70">
          <h1 className="text-7xl font-extrabold text-white drop-shadow-lg animate-fadeIn text-white">
            {project.title}
          </h1>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 space-y-12">
        <section className="mb-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Project Description</h2>
          {project.text.split(";").map((section, index) => (
            <div key={index}>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {section}
              </p>
              <br />
            </div>
          ))}
        </section>
        <section className="mb-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Final Takeaway</h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {project.takeaway}
          </p>
        </section>
        {!(!project.githublink && !project.downloadLink) ? (
          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-6"> Resources</h2>
            <div className="flex justify-center space-x-6">
              {!project.downloadLink ? (
                ""
              ) : (
                <a
                  href={project.downloadLink}
                  download="docs"
                  className="flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 shadow-lg transition-transform transform hover:scale-105"
                >
                  <FaFileDownload className="mr-2 h-5 w-5" />
                  Download Files
                </a>
              )}
              {!project.githublink ? (
                ""
              ) : (
                <Link
                  target="_blank"
                  href={project.githublink}
                  className="flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90 shadow-lg transition-transform transform hover:scale-105"
                >
                  <FaGithub className="mr-2 h-5 w-5" />
                  View on GitHub
                </Link>
              )}
            </div>
          </section>
        ) : (
          ""
        )}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-center">Gallery</h2>
          <div className="max-w-8xl mx-auto">
            <ImageSlider images={project.images} projectname={project.title} />
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
