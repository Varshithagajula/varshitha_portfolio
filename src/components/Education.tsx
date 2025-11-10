
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "VVIT College",
      duration: "2022 – 2026",
      grade: "CGPA: 9.21",
      status: "Current",
      icon: GraduationCap,
      color: "from-blue-400 to-cyan-400"
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College",
      duration: "2020 – 2022",
      grade: "98.3%",
      status: "Completed",
      icon: BookOpen,
      color: "from-green-400 to-emerald-400"
    },
    {
      degree: "SSC",
      institution: "Teja High School",
      duration: "2019 – 2020",
      grade: "100%",
      status: "Completed",
      icon: Award,
      color: "from-purple-400 to-pink-400"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-background to-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Education</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-400 to-purple-400 hidden md:block"></div>
            
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div
                  key={edu.degree}
                  className="relative animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="hidden md:block relative z-10">
                      <div className={`w-16 h-16 rounded-xl glass border border-primary/20 flex items-center justify-center bg-gradient-to-r ${edu.color} group-hover:scale-110 transition-transform duration-300`}>
                        <edu.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="glass-hover rounded-2xl p-6 md:p-8 group">
                        <div className="flex flex-wrap items-center justify-between mb-4">
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">
                              {edu.degree}
                            </h3>
                            <p className="text-lg text-muted-foreground">{edu.institution}</p>
                          </div>
                          <div className="text-right">
                            <div className={`px-3 py-1 rounded-full glass border border-primary/20 text-sm font-medium mb-2 ${
                              edu.status === 'Current' ? 'text-green-400 border-green-400/20' : ''
                            }`}>
                              {edu.status}
                            </div>
                            <p className="text-sm text-muted-foreground font-space-mono">{edu.duration}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                          <span className="text-lg font-semibold text-primary">{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
