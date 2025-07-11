import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Rocket } from "lucide-react";

const Projects = () => {
  const project = {
    title: "MediConnect",
    subtitle: "Doctor Appointment Booking System",
    description: "A fully responsive Doctor Appointment Booking System that allows patients to book or cancel appointments with integrated online payment functionality.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    links: {
      patientFrontend: "https://mediconnect-frontend-cn70.onrender.com/",
      adminPanel: "https://mediconnect-admin-zfq6.onrender.com/admin", 
      backendAPI: "https://mediconnect-backend-lq1k.onrender.com/",
      github: "https://github.com/Varshithagajula/MediConnect"
    },
    features: [
      "Responsive patient booking interface",
      "Admin panel for appointment management",
      "Integrated payment gateway",
      "Real-time appointment status updates",
      "Doctor availability management"
    ]
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background to-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Rocket className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Featured Project</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 animate-slide-in-up">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-primary font-space-mono text-sm">FEATURED PROJECT</span>
                  </div>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button
                    onClick={() => window.open(project.links.patientFrontend, '_blank')}
                    className="glass-hover bg-primary/10 hover:bg-primary/20 border border-primary/20"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Patient Frontend
                  </Button>
                  <Button
                    onClick={() => window.open(project.links.adminPanel, '_blank')}
                    variant="outline"
                    className="glass-hover border-primary/20 hover:border-primary/40"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Admin Panel
                  </Button>
                  <Button
                    onClick={() => window.open(project.links.backendAPI, '_blank')}
                    variant="outline"
                    className="glass-hover border-primary/20 hover:border-primary/40"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Backend API
                  </Button>
                  <Button
                    onClick={() => window.open(project.links.github, '_blank')}
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
