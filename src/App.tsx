import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { SwitchDark } from "./components/ui/switchdark";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "./components/ui/badge";
import { ProjectsSection } from "./components/custom/projectsSection";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-background text-foreground">
        <header className="flex justify-between bg-muted px-10 py-4 items-center">
          <span className="font-bold text-2xl">Portfolio</span>
          <nav>
            <SwitchDark
              checked={darkMode}
              onCheckedChange={setDarkMode}
              thumbContent={
                darkMode ? (
                  <Moon className="size-4 text-primary" />
                ) : (
                  <Sun className="size-4 text-muted-foreground" />
                )
              }
            />
          </nav>
        </header>
        <main>
          {/* Hero Section */}
          <section className="flex justify-center items-center gap-14 h-auto py-10">
            {/* Profile Picture */}
            <img src="/profile(1).jpg" alt="Gabriel Mercês" className="w-80 h-80 rounded-full" />
            {/* Presentation */}
            <div className="flex flex-col gap-4 items-center text-center">
              <hgroup>
                <h1 className="text-7xl font-bold">Gabriel Mercês</h1>
                <h2 className="text-muted-foreground">Frontend Developer</h2>
              </hgroup>
              <p>I'm a frontend developer with a passion for creating user-friendly and visually appealing interfaces.</p>
              <div className="flex gap-2 justify-center">
                <Button>Download CV</Button>
                <Button>GitHub</Button>
              </div>
            </div>
          </section>
          {/* Projects Section */}
          <ProjectsSection/>
        </main>
        <footer className="py-6 text-center text-muted-foreground border-t mt-10">
          <p>© 2025 Gabriel Mercês. Built with React, Vite and Shadcn</p>
        </footer>
      </div>
    </div>
  )
}

export default App