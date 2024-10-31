interface Project {
  title: string;
  mainImage: string;
  description: string;
  text: string;
  technologies: string[];
  images: string[];
  githublink: string;
  downloadLink: string;
}

const ProjectData: Project[] = [
  {
    title: "Sonar - 3D graphing of lake bed",
    mainImage: "/image2.jpg",
    description:
      "Building device for recording data points and a python script for plotting graphs",
    text: "This is a project not text",
    technologies: [
      "Python",
      "Raspberry Pi",
      "GPS",
      "Ultrasonic transducer",
      "Pyplot",
      "Numpy",
      "Matplotlib",
    ],
    images: [
      "/image2.jpg",
      "/image6.png",
      "/image2.jpg",
      "/image6.png",
      "/image2.jpg",
      "/image6.png",
      "/image2.jpg",
      "/image6.png",
    ],
    githublink: "https://github.com",
    downloadLink: "https://github.com",
  },
  {
    title: "Autonomous Cricket Farm",
    mainImage: "/image6.png",
    description: "Farming crickets for protein production",
    text: "This is a project text",
    technologies: ["Raspberry Pi", "Various sensors"],
    images: ["/image6.png", "/image2.jpg"],
    githublink: "https://github.com",
    downloadLink: "https://github.com",
  },
  {
    title: "ML AAPL stock prediction model",
    mainImage: "/image2.jpg",
    description: "Predicting future price movements based on historical data",
    text: "This is a project text",
    technologies: ["Python", "Tensorflow", "Numpy"],
    images: ["/image2.jpg", "/image2.jpg"],
    githublink: "https://github.com",
    downloadLink: "https://github.com",
  },
  {
    title: "Portfolio Website",
    mainImage: "/image2.jpg",
    description:
      "Website for showcasing my projects and skills, hosting on VPS and Nginx",
    text: "This is a project text",
    technologies: ["Next.js", "Docker", "Nginx", "Oracle cloud"],
    images: ["/image2.jpg", "/image2.jpg"],
    githublink: "https://github.com",
    downloadLink: "https://github.com",
  },
  {
    title: "Selenium Instagram Scraper",
    mainImage: "/image2.jpg",
    description: "Gathering data from Instagram",
    text: "This is a project text",
    technologies: ["Selenium"],
    images: ["/image2.jpg", "/image2.jpg"],
    githublink: "https://github.com",
    downloadLink: "https://github.com",
  },
  {
    title: "Blog app",
    mainImage: "/image2.jpg",
    description: "Web application for managing blog posts",
    text: "This is a project text",
    technologies: ["ASP.NET", "C#", "SQL Server"],
    images: ["/image2.jpg", "/image2.jpg"],
    githublink: "https://github.com",
    downloadLink: "https://github.com",
  },
  {
    title: "Chat app",
    mainImage: "/image2.jpg",
    description: "Web application simulating multiple chat rooms",
    text: "This is a project text",
    technologies: ["Angular", "JSX", "SQL Server"],
    images: ["/image2.jpg", "/image2.jpg"],
    githublink: "https://github.com",
    downloadLink: "https://github.com",
  },
  {
    title: "Scala Api calls",
    mainImage: "/image2.jpg",
    description: "External API calls in Scala and creation of api endpoints",
    text: "This is a project text",
    technologies: ["Scala", "Rest-Api", "Jet Brains IDE"],
    images: ["/image2.jpg", "/image2.jpg"],
    githublink: "https://github.com",
    downloadLink: "https://github.com",
  },
  {
    title: "Store app",
    mainImage: "/image2.jpg",
    description: "Simple store app with shopping cart functionality",
    text: "This is a project text",
    technologies: ["Scala"],
    images: ["/image2.jpg", "/image2.jpg"],
    githublink: "https://github.com",
    downloadLink: "https://github.com",
  },
  {
    title: "School system",
    mainImage: "/image2.jpg",
    description: "Simple store app with shopping cart functionality",
    text: "This is a project text",
    technologies: ["Angular"],
    images: ["/image2.jpg", "/image2.jpg"],
    githublink: "https://github.com",
    downloadLink: "https://github.com",
  },
];
export default ProjectData;
