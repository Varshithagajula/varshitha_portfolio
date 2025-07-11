
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="glass border-t border-primary/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Gajula Lakshmi Naga Varshitha. Built with React, TypeScript & Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground mt-2 font-space-mono">
            &lt;/&gt; with 💚 by Varshitha
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
