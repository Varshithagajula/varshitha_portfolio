
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:varshithagajula@gmail.com",
      color: "from-red-400 to-pink-400",
      handle: "varshithagajula@gmail.com"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/varshitha-gajula-0bb11826a/",
      color: "from-blue-400 to-cyan-400",
      handle: "varshitha-gajula"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Varshithagajula",
      color: "from-gray-400 to-gray-600",
      handle: "Varshithagajula"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Mail className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Get In Touch</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to create something amazing together? Let's connect and discuss your next project!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass rounded-3xl p-8 animate-slide-in-up">
              <h3 className="text-2xl font-bold mb-6 text-primary">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="glass border-primary/20 focus:border-primary/40"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="glass border-primary/20 focus:border-primary/40"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion"
                    className="glass border-primary/20 focus:border-primary/40"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="glass border-primary/20 focus:border-primary/40 resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full glass-hover bg-primary/10 hover:bg-primary/20 border border-primary/20"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass rounded-3xl p-8 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-2xl font-bold mb-6 text-primary">Let's Connect</h3>
                <div className="space-y-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl glass-hover group"
                      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${link.color} group-hover:scale-110 transition-transform duration-300`}>
                        <link.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{link.name}</h4>
                        <p className="text-muted-foreground text-sm">{link.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass rounded-3xl p-8 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-2xl font-bold mb-6 text-primary">Current Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-muted-foreground">Available for new opportunities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Andhra Pradesh, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Open to remote work</span>
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

export default Contact;
