import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1eH2T1KU3DT1KJJO4kHjzpvXacxi-PuKZ/view?usp=sharing', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden tech-grid">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 opacity-20 font-space-mono text-sm animate-code-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          >
            {['</>', '{}', '[]', '()', '&&', '||', '=>'][Math.floor(Math.random() * 7)]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="glass rounded-3xl p-12 max-w-4xl mx-auto animate-slide-in-up">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient animate-float">
              GAJULA LAKSHMI NAGA
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-float">
              VARSHITHA
            </h1>
            <div className="text-2xl md:text-3xl font-light text-muted-foreground mb-8">
              <span className="font-space-mono text-primary">&lt;</span>
              Full-Stack Developer
              <span className="font-space-mono text-primary">/&gt;</span>
            </div>
          </div>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions with modern technologies. 
            Specialized in MERN stack development with a focus on user experience and performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="glass-hover border-primary/20 text-lg px-8 py-3 bg-primary/10 hover:bg-primary/20"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button
              onClick={downloadResume}
              variant="outline"
              size="lg"
              className="glass-hover border-primary/20 text-lg px-8 py-3 hover:border-primary/40"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float text-primary/30">
        <div className="text-6xl font-space-mono">{"{}"}</div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float text-primary/30" style={{animationDelay: '2s'}}>
        <div className="text-6xl font-space-mono">{"</>"}</div>
      </div>
    </section>
  );
};

export default Hero;
