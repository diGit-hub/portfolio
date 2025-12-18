import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { SwitchDark } from "./components/ui/switchdark";
import { ProjectsSection } from "./components/custom/projectsSection";
import Background from "@/components/custom/background";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Background />
      <div className="relative min-h-screen text-foreground">
        <header className="flex justify-between bg-muted/60 backdrop-blur-md border-b border-white/10 px-10 py-4 items-center sticky top-0 z-50">
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
          <div className="bg-background/40 backdrop-blur-sm py-10">
          {/* Hero Section */}
          <section className="flex justify-center items-center gap-14 h-auto py-20">
            {/* Profile Picture */}
            <img src="/profile.jpg" alt="Gabriel Mercês" className="w-80 h-80 rounded-full shadow-2xl border-4 border-white/10" />

            {/* Presentation */}
            <div className="flex flex-col gap-4 items-center text-center max-w-lg">
              <hgroup>
                <h1 className="text-7xl font-bold tracking-tight">Gabriel Mercês</h1>
                <h2 className="text-muted-foreground text-xl">Frontend Developer</h2>
              </hgroup>
              <p className="text-lg">I'm a frontend developer with a passion for creating user-friendly and visually appealing interfaces.</p>
              <div className="flex gap-2 justify-center mt-4">
                <Button className="shadow-lg">Download CV</Button>
                <Button variant="outline" className="bg-background/50 backdrop-blur-sm">GitHub</Button>
              </div>
            </div>
          </section>

          {/* Projects Section */}
            <ProjectsSection />
          </div>
        </main>

        <footer className="py-6 text-center text-muted-foreground border-t border-white/10 mt-10 bg-muted/60 backdrop-blur-md">
          <p>© 2025 Gabriel Mercês. Built with React, Vite and Shadcn</p>
        </footer>
      </div>
    </div>
  )
}

export default App