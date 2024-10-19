// 'use client';
// import Image from "next/image";
// import Link from "next/link";
// import { FaFileDownload, FaGithub } from "react-icons/fa";
// import ImageSlider from "@/components/ImageSlider";

// import pic from "../../../vector-art-project-svg-eps-862423341.jpg";
// import ima from "../../../image6.png";
// import ima2 from "../../../image2.jpg";

// // Dummy data (replace with actual data fetching in a real application)
// const projectData = {
//   id: "1",
//   title: "COol shit",
//   description:
//     "This is a fantastic project that showcases various technologies and innovative solutions. It demonstrates the power of modern web development and the capabilities of our team.",
//   mainImage: pic,
//   images: [ima, ima2],
//   downloadLink: "/path-to-downloadable-file.zip",
//   githubLink: "https://github.com/username/project-repo",
// };

// export default function ProjectPage({ params }: { params: { id: string } }) {
//   const project = projectData;

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <div className="relative h-[400px] w-full overflow-hidden">
//         <Image
//           src={project.mainImage}
//           alt={project.title}
//           fill
//           className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
//           priority
//         />
//         <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-transparent to-black/70 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
//           <h1 className="text-5xl font-extrabold text-white drop-shadow-lg animate-fadeIn">
//             {project.title}
//           </h1>
//         </div>
//       </div>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-8 space-y-12">
//         {/* Project Description */}
//         <section className="mb-8 text-center">
//           <h2 className="text-3xl font-semibold mb-4">Project Description</h2>
//           <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
//             {project.description}
//           </p>
//         </section>

//         {/* Project Resources */}
//         <section className="text-center">
//           <h2 className="text-3xl font-semibold mb-6">Project Resources</h2>
//           <div className="flex justify-center space-x-6">
//             <Link
//               href={project.downloadLink}
//               className="flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 shadow-lg transition-transform transform hover:scale-105"
//             >
//               <FaFileDownload className="mr-2 h-5 w-5" />
//               Download Files
//             </Link>
//             <Link
//               href={project.githubLink}
//               className="flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90 shadow-lg transition-transform transform hover:scale-105"
//             >
//               <FaGithub className="mr-2 h-5 w-5" />
//               View on GitHub
//             </Link>
//           </div>
//         </section>

//         {/* Project Gallery */}
//         <section>
//           <h2 className="text-3xl font-semibold mb-4 text-center">
//             Project Gallery
//           </h2>
//           <div className="max-w-4xl mx-auto">
//             <ImageSlider images={project.images} />
//           </div>
//         </section>
//       </main>

//       {/* Custom CSS Animations */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 1.5s ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFileDownload, FaGithub, FaHome } from "react-icons/fa";
import ImageSlider from "@/components/ImageSlider";

import pic from "../../../vector-art-project-svg-eps-862423341.jpg";
import ima from "../../../image6.png";
import ima2 from "../../../image2.jpg";
// import HomeButton from "@/components/ui/HomeButton";
// import SliderPro from "@/components/ui/SliderPro";

// Dummy data (replace with actual data fetching in a real application)
const projectData = {
  id: "1",
  title: "COol shit",
  description:
    "This is a fantastic project that showcases various technologies and innovative solutions. It demonstrates the power of modern web development and the capabilities of our team.",
  mainImage: pic,
  images: [ima, ima2],
  downloadLink: "/path-to-downloadable-file.zip",
  githubLink: "https://github.com/username/project-repo",
};

// { params }: { params: { id: string } }
export default function ProjectPage() {
  const project = projectData;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          src={project.mainImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-transparent to-black/70">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg animate-fadeIn">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Project Description */}
        <section className="mb-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Project Description</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {project.description}
          </p>
        </section>

        {/* Project Resources */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Project Resources</h2>
          <div className="flex justify-center space-x-6">
            <Link
              href={project.downloadLink}
              className="flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 shadow-lg transition-transform transform hover:scale-105"
            >
              <FaFileDownload className="mr-2 h-5 w-5" />
              Download Files
            </Link>
            <Link
              href={project.githubLink}
              className="flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90 shadow-lg transition-transform transform hover:scale-105"
            >
              <FaGithub className="mr-2 h-5 w-5" />
              View on GitHub
            </Link>
          </div>
        </section>

        {/* Project Gallery */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Project Gallery
          </h2>
          <div className="max-w-4xl mx-auto">
            <ImageSlider images={project.images} />
          </div>
        </section>
      </main>
      <div className="flex justify-center space-x-6">
        <Link
          href={"/"}
          className="flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 shadow-lg transition-transform transform hover:scale-105"
        >
          <FaHome className="mr-2 h-5 w-5" />
          Home
        </Link>
      </div>

      {/* Custom CSS Animations */}
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
      {/* <SliderPro></SliderPro> */}
    </div>
  );
}
