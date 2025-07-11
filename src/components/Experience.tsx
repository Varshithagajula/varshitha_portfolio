
import { Briefcase, Code, Database, Globe } from "lucide-react";

const Experience = () => {
  const experienceData = {
    title: "Java Full Stack Developer",
    company: "Virtual Internship",
    duration: "2023",
    type: "Internship",
    description: "Gained comprehensive hands-on experience with full-stack Java development technologies and methodologies.",
    achievements: [
      "Gained hands-on experience with Java technologies including HTML, CSS, JavaScript, Java, Spring Boot, and MySQL",
      "Understood the interaction between front-end and back-end systems in a full stack environment",
      "Developed proficiency in database design and management using MySQL",
      "Learned modern web development practices and responsive design principles"
    ],
    technologies: [
      { name: "Java", icon: Code, color: "from-orange-400 to-red-400" },
      { name: "Spring Boot", icon: Database, color: "from-green-400 to-emerald-400" },
      { name: "MySQL", icon: Database, color: "from-blue-400 to-cyan-400" },
      { name: "Web Technologies", icon: Globe, color: "from-purple-400 to-pink-400" }
    ]
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Briefcase className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Work Experience</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 animate-slide-in-up">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-blue-400 hidden md:block"></div>
              
              <div className="relative">
                <div className="flex items-start gap-6">
                  <div className="hidden md:block">
                    <div className="w-16 h-16 rounded-xl glass border border-primary/20 flex items-center justify-center animate-pulse-glow">
                      <Briefcase className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-6">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-primary">{experienceData.title}</h3>
                        <span className="px-3 py-1 rounded-full glass border border-primary/20 text-sm font-medium">
                          {experienceData.type}
                        </span>
                      </div>
                      <p className="text-lg text-muted-foreground mb-2">{experienceData.company}</p>
                      <p className="text-sm text-muted-foreground font-space-mono">{experienceData.duration}</p>
                    </div>

                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {experienceData.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-4 text-primary">Technologies Used</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {experienceData.technologies.map((tech, index) => (
                          <div
                            key={tech.name}
                            className="glass-hover rounded-xl p-4 text-center group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tech.color} mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <tech.icon className="h-6 w-6 text-white" />
                            </div>
                            <p className="text-sm font-medium">{tech.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-primary">Key Learning Outcomes</h4>
                      <ul className="space-y-3">
                        {experienceData.achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-muted-foreground"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 animate-pulse"></div>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
