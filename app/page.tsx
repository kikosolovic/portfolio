import About from "@/components/About";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="container md-flex mx-auto px-4">
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}
