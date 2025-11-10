import { Trophy, Medal, Award, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Silver Medal – NPTEL Programming in Java",
      type: "Academic Excellence", 
      icon: Medal,
      color: "from-yellow-400 to-orange-400",
      description: "Achieved silver medal certification in Java programming from NPTEL"
    },
    {
      title: "Second Position in Departmental Merit Ranking",
      type: "Academic Achievement",
      icon: Trophy,
      color: "from-blue-400 to-cyan-400",
      description: "Secured 2nd position with 9.3% in 2nd Year – JNTUK"
    }
  ];

  const certifications = [
    {
      title: "Java Certification",
      provider: "NPTEL, edX",
      icon: Award,
      color: "from-green-400 to-emerald-400"
    },
    {
      title: "HTML, CSS, JavaScript",
      provider: "Infosys",
      icon: Award,
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Python Certification",
      provider: "HackerRank",
      icon: Award,
      color: "from-red-400 to-orange-400"
    },
    {
      title: "SQL Certification",
      provider: "HackerRank",
      icon: Award,
      color: "from-yellow-400 to-orange-400"
    },
    {
      title: "MongoDB Certification",
      provider: "MongoDB University",
      icon: Award,
      color: "from-indigo-400 to-blue-400"
    },
    {
      title: "Google Certified Associate Cloud Engineer",
      provider: "Google Cloud",
      icon: Award,
      color: "from-cyan-400 to-teal-400"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-900/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Trophy className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Achievements & Certifications</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Achievements Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">🏆 Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="glass-hover rounded-2xl p-6 group animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-sm text-primary font-medium">{achievement.type}</span>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                      <p className="text-muted-foreground text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">📜 Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className="glass-hover rounded-2xl p-6 text-center group animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${cert.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                  <p className="text-muted-foreground text-sm">{cert.provider}</p>
                  <div className="mt-4 flex justify-center">
                    <div className="w-8 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full"></div>
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

export default Achievements;
