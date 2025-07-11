
import { Code, Database, Server, Globe, GitBranch, Cloud } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "Java", "Spring Boot"],
      color: "from-green-400 to-emerald-400"
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MongoDB", "MySQL"],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Languages",
      icon: Code,
      skills: ["Java", "Python"],
      color: "from-orange-400 to-red-400"
    },
    {
      title: "Tools & Others",
      icon: GitBranch,
      skills: ["Git", "GitHub"],
      color: "from-yellow-400 to-orange-400"
    },
    {
      title: "Cloud",
      icon: Cloud,
      skills: ["Google Cloud Basics"],
      color: "from-indigo-400 to-purple-400"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Technical Skills</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass-hover rounded-2xl p-6 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
