import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Rocket } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MediConnect",
      subtitle: "Doctor Appointment Booking System",
      description: "A fully responsive Doctor Appointment Booking System that allows patients to book or cancel appointments with integrated online payment functionality.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js"],
      liveLink: "https://mediconnect-frontend-cn70.onrender.com/",
      github: "https://github.com/Varshithagajula/MediConnect",
      features: [
        "Responsive patient booking interface",
        "Admin panel for appointment management",
        "Integrated payment gateway",
        "Real-time appointment status updates",
        "Doctor availability management"
      ]
    },
    {
      title: "CryptoTrack",
      subtitle: "Cryptocurrency Tracker",
      description: "A lightweight web application that enables users to monitor real-time cryptocurrency data using the CoinGecko API. Built with React and Vite, the application retrieves live market information and presents key metrics such as price, market capitalization, and daily price changes in a clean and responsive interface.",
      techStack: ["React", "Vite", "CoinGecko API"],
      github: "https://github.com/Varshithagajula/CryptoTrack.git",
      features: [
        "Display list of cryptocurrencies with key metrics (price, change, market cap)",
        "Search/filter functionality",
        "Responsive layout for desktop & mobile",
        "Easy to extend with new API endpoints or UI components"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background to-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Rocket className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Projects</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {projects.map((project, projectIndex) => (
            <div key={project.title} className="glass rounded-3xl p-8 md:p-12 animate-slide-in-up" style={{ animationDelay: `${projectIndex * 0.2}s` }}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">{project.title}</h3>
                    <p className="text-xl text-muted-foreground mb-4">{project.subtitle}</p>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-primary">Tech Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-xl glass border border-primary/20 text-sm font-medium hover:border-primary/40 transition-colors duration-200"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.liveLink && (
                      <Button
                        onClick={() => window.open(project.liveLink, '_blank')}
                        className="glass-hover bg-primary/10 hover:bg-primary/20 border border-primary/20"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                    <Button
                      onClick={() => window.open(project.github, '_blank')}
                      variant="outline"
                      className="glass-hover border-primary/20 hover:border-primary/40"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub Repo
                    </Button>
                  </div>
                </div>

                <div className="lg:pl-8">
                  <div className="glass rounded-2xl p-6">
                    <h4 className="text-lg font-semibold mb-4 text-primary">Key Features</h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-muted-foreground"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 animate-pulse"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
