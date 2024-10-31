import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
export default function Footer() {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/kikosolovic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <LuGithub />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kristi%C3%A1n-solovic-7b026232b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <LuLinkedin />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:kisolovic@gmail.com"
            className="text-muted-foreground hover:text-primary"
          >
            <LuMail />
            <span className="sr-only">Email</span>
          </a>
        </div>
        <p className="text-center mt-4 text-sm text-muted-foreground">
          © 2024 Kristian Solovic. No rights reserved.
        </p>
      </div>
    </footer>
  );
}
