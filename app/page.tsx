// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import {
//   LuPieChart,
//   LuNewspaper,
//   LuCode,
//   LuAlertTriangle,
// } from "react-icons/lu";
import About from "@/components/About";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
// import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="container md-flex mx-auto px-4">
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      {/* <Contact></Contact> */}
    </div>
  );
}
