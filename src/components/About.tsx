
import { User, GraduationCap, Target, Heart, Upload } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <User className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">About Me</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 mb-8 animate-slide-in-up">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Profile Photo Section */}
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <Avatar className="w-48 h-48 border-4 border-primary/20 shadow-2xl">
                    <AvatarImage 
                      src="https://i.ibb.co/S4shyJ34/user.jpg" 
                      alt="Gajula Lakshmi Naga Varshitha"
                      className="object-cover"
                    />
                    <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary/20 to-blue-400/20">
                      GLV
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-pulse"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-primary">Varshitha Gajula</h3>
                  <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
                </div>
              </div>

              {/* About Content */}
              <div className="md:col-span-2 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My name is <span className="text-primary font-semibold">Gajula Lakshmi Naga Varshitha</span>. 
                  I am currently in the final year of my B.Tech in Computer Science Engineering at VVIT, Nambur, with a CGPA of 9.21. 
                  I completed my Intermediate at Sri Chaitanya Junior College with 98.3% and my SSC at Teja High School with 100%.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I have a strong foundation in programming and hands-on experience in Java, Python, and the MERN stack. 
                  I have completed a Java Full Stack Development internship and worked on projects such as MediConnect, a doctor appointment booking system, and CryptoTrack, a cryptocurrency tracker. 
                  I am passionate about building real-world applications, learning emerging technologies, and continuously improving my skills.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I consider myself self-motivated, a quick learner, and highly adaptable. In my free time, I enjoy listening to music, drawing, and watching TV.
                </p>

                <div className="glass rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Academic Excellence</h3>
                      <p className="text-sm text-muted-foreground">CGPA: 9.21/10</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Quick Learner</h3>
                      <p className="text-sm text-muted-foreground">Self-motivated & Adaptable</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Heart className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Interests</h3>
                      <p className="text-sm text-muted-foreground">Music, Drawing, Watching TV</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-hover rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Short-term Goal</h3>
              <p className="text-muted-foreground">
                Secure a software engineer position at a reputed company where I can apply my 
                technical skills and contribute to innovative projects.
              </p>
            </div>
            
            <div className="glass-hover rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Long-term Vision</h3>
              <p className="text-muted-foreground">
                Grow into a senior software engineer role and contribute meaningfully to the 
                organization's success while continuously learning and innovating.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
