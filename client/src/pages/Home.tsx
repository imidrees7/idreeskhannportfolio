import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  Database, 
  Terminal, 
  Cpu, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Send,
  Menu,
  X,
  Sparkles,
  Layers,
  Video,
  PlayCircle,
  Wand2,
  Github,
  Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const PORTRAIT_URL = "/manus-storage/ChatGPTImageAug17,2026,01_53_22AM_7f54649d.png";
  const CV_URL = "/manus-storage/Idrees_Khan_CV_ce58927d.pdf";
  const LINKEDIN_URL = "https://www.linkedin.com/in/idrees-khan-826079290";
  const GITHUB_URL = "https://github.com/imidrees7";

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields before sending.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! Idrees will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#070b12] text-[#f1f5f9] font-sans selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden">
      
      {/* Editorial Ambient Background Glows */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[170px] pointer-events-none -z-10" />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#070b12]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center font-bold text-slate-950 shadow-lg shadow-amber-500/20">
              IK
            </div>
            <div>
              <span className="font-display font-extrabold text-lg tracking-wide block">IDREES KHAN</span>
              <span className="text-xs text-amber-400 font-medium tracking-widest uppercase">Software Engineer</span>
            </div>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <button onClick={() => scrollToSection("about")} className="hover:text-amber-400 transition-colors">About</button>
            <button onClick={() => scrollToSection("skills")} className="hover:text-amber-400 transition-colors">Skills & AI</button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-amber-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection("experience")} className="hover:text-amber-400 transition-colors">Experience</button>
            <button onClick={() => scrollToSection("education")} className="hover:text-amber-400 transition-colors">Education</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-amber-400 transition-colors">Contact</button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href={CV_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10 hover:text-amber-300 gap-2 rounded-xl">
                <Download className="w-4 h-4" /> CV PDF
              </Button>
            </a>
            <Button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/20 rounded-xl">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#070b12] border-b border-white/10 px-6 py-6 space-y-4"
            >
              <button onClick={() => scrollToSection("about")} className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium">About</button>
              <button onClick={() => scrollToSection("skills")} className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium">Skills & AI</button>
              <button onClick={() => scrollToSection("projects")} className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium">Projects</button>
              <button onClick={() => scrollToSection("experience")} className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium">Experience</button>
              <button onClick={() => scrollToSection("education")} className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium">Education</button>
              <button onClick={() => scrollToSection("contact")} className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium">Contact</button>
              <div className="pt-2 flex flex-col gap-3">
                <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" className="w-full border-amber-500/30 text-amber-400 gap-2 rounded-xl">
                    <Download className="w-4 h-4" /> CV PDF
                  </Button>
                </a>
                <Button onClick={() => scrollToSection("contact")} className="w-full bg-amber-500 text-slate-950 font-semibold rounded-xl">
                  Get in Touch
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-36 pb-24 lg:pt-48 lg:pb-36 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-widest uppercase">
                <Sparkles className="w-4 h-4" /> Software Engineering • HTML/CSS/JS • AI Video Ads
              </div>

              <h1 className="text-5xl sm:text-7xl font-display font-extrabold tracking-tight leading-[1.1]">
                Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                  Digital Excellence.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-2xl leading-relaxed">
                Hi, I'm <strong className="text-white font-semibold">Idrees Khan</strong>. A Software Engineering graduate from the University of Swat (2026). I build responsive web interfaces using HTML, CSS, and JavaScript, along with advanced AI workflows and cinematic video advertisements.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button onClick={() => scrollToSection("projects")} className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold h-14 px-8 text-base rounded-2xl shadow-xl shadow-amber-500/20">
                  Explore Projects
                </Button>
                <a href={CV_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-white/15 bg-white/5 hover:bg-white/10 text-slate-200 h-14 px-8 text-base font-semibold gap-3 rounded-2xl">
                    <FileText className="w-5 h-5 text-amber-400" /> View CV Document
                  </Button>
                </a>
              </div>

              {/* Stats Bar */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
                <div>
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-amber-400 block">3.14</span>
                  <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">BS CGPA (2026)</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-amber-400 block">Web Dev</span>
                  <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">HTML, CSS, JS</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-amber-400 block">Python Dev</span>
                  <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">POS & Automation</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Image Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center relative"
            >
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-indigo-600 rounded-[2.5rem] blur-3xl opacity-20 transform rotate-6 scale-105" />
                
                <div className="relative rounded-[2.5rem] bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-3 shadow-2xl">
                  <div className="aspect-[3/4] w-full rounded-[2rem] overflow-hidden relative bg-slate-950">
                    <img 
                      src={PORTRAIT_URL} 
                      alt="Idrees Khan Portrait" 
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
                    
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                        <div>
                          <p className="text-xs text-slate-400 font-medium">Availability</p>
                          <p className="text-sm font-bold text-white">Seeking Opportunities</p>
                        </div>
                      </div>
                      <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">
                        Swat, Pakistan
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 bg-white/[0.02] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
            <h2 className="text-xs uppercase tracking-[0.2em] text-amber-400 font-bold">Background & Philosophy</h2>
            <h3 className="text-4xl font-display font-extrabold tracking-tight">Professional Profile</h3>
            <p className="text-slate-400 text-lg">
              Combining solid software engineering principles with web design and cutting-edge AI creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl border border-white/10 space-y-4 hover:border-amber-500/40 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                <Code className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-display font-bold">POS Software & Development</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Graduate from the University of Swat (2026) who built a custom Point of Sale (POS) software, alongside responsive web applications using HTML, CSS, and JavaScript.
              </p>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl border border-white/10 space-y-4 hover:border-amber-500/40 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                <Wand2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-display font-bold">AI Prompting & Ad Video</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Expert in prompt engineering and cutting-edge AI video generation for commercial advertisements, transforming concepts into cinematic visual content.
              </p>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl border border-white/10 space-y-4 hover:border-amber-500/40 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                <Briefcase className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-display font-bold">Communication & Support</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Experienced in professional customer email support, meticulous data entry, and fluent multilingual communication in English, Urdu, and Pashto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & AI Section */}
      <section id="skills" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
            <h2 className="text-xs uppercase tracking-[0.2em] text-amber-400 font-bold">Core Capabilities</h2>
            <h3 className="text-4xl font-display font-extrabold tracking-tight">Skills & AI Specializations</h3>
            <p className="text-slate-400 text-lg">
              From web development fundamentals to state-of-the-art AI video advertising workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Highlight Card 1: AI Video Generation */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-amber-500/15 via-slate-900/80 to-slate-900 p-8 rounded-3xl border border-amber-500/30 space-y-4 shadow-xl col-span-1 md:col-span-2"
            >
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-amber-500/20 text-amber-400">
                  <Video className="w-7 h-7" />
                </div>
                <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 font-semibold">Specialized Skill</Badge>
              </div>
              <div>
                <h4 className="font-display font-bold text-2xl text-white mb-2">AI Video Generation for Ads</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Crafting high-converting commercial video advertisements using advanced AI video models. Expertise in storyboard prompt generation, motion control, cinematic lighting, and automated marketing asset creation.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Commercial Storyboarding", "AI Video Models", "Cinematic Prompting", "Ad Copywriting", "Motion Control"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-950/80 border border-white/10 text-xs text-amber-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Highlight Card 2: Prompt Engineering */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-indigo-500/15 via-slate-900/80 to-slate-900 p-8 rounded-3xl border border-indigo-500/30 space-y-4 shadow-xl col-span-1 md:col-span-2"
            >
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-indigo-500/20 text-indigo-400">
                  <Wand2 className="w-7 h-7" />
                </div>
                <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 font-semibold">Advanced Expertise</Badge>
              </div>
              <div>
                <h4 className="font-display font-bold text-2xl text-white mb-2">Prompt Engineering & AI Tools</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Designing and optimizing precise prompt architectures for large language models and generative pipelines. Automating repetitive data workflows and integrating AI APIs into software solutions.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {["System Prompts", "LLM Optimization", "Workflow Automation", "API Integration", "Structured Output"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-950/80 border border-white/10 text-xs text-indigo-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Standard Skill Cards */}
            {[
              {
                title: "Data Analysis with Python",
                desc: "Pandas, NumPy, data cleaning, processing, and visual analytics.",
                icon: <Database className="w-5 h-5 text-emerald-400" />,
                badge: "Advanced"
              },
              {
                title: "Web Development (HTML, CSS, JS)",
                desc: "Clean fundamentals, responsive layouts, interactive JavaScript applications.",
                icon: <Code className="w-5 h-5 text-blue-400" />,
                badge: "Proficient"
              },
              {
                title: "Customer Email Support",
                desc: "Professional correspondence, issue resolution, client communication.",
                icon: <Mail className="w-5 h-5 text-amber-400" />,
                badge: "Experienced"
              },
              {
                title: "Graphic Design & Office",
                desc: "Graphic design tools, Microsoft Office Suite (Word, Excel, PPT).",
                icon: <Layers className="w-5 h-5 text-rose-400" />,
                badge: "Skilled"
              }
            ].map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-slate-900/60 backdrop-blur-xl p-6 rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all duration-300 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-slate-950 border border-white/10">
                    {skill.icon}
                  </div>
                  <Badge variant="outline" className="border-white/15 text-slate-300 text-xs">
                    {skill.badge}
                  </Badge>
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-white mb-1">{skill.title}</h4>
                  <p className="text-sm text-slate-400">{skill.desc}</p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-28 bg-white/[0.02] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
            <h2 className="text-xs uppercase tracking-[0.2em] text-amber-400 font-bold">Featured Work</h2>
            <h3 className="text-4xl font-display font-extrabold tracking-tight">Software Projects Showcase</h3>
            <p className="text-slate-400 text-lg">
              Engineered software systems built for resilience, scalability, and practical utility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Project 1: POS (Django) */}
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 shadow-xl">
              <div className="p-8 sm:p-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-400">
                    <Terminal className="w-7 h-7" />
                  </div>
                  <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">Self-Directed Project</Badge>
                </div>

                <div className="space-y-2">
                  <h4 className="text-3xl font-display font-bold text-white">Point of Sale (POS) Software</h4>
                  <p className="text-sm text-amber-400 font-medium">Django • Offline-First Architecture • Billing & Inventory</p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Engineered a fully offline Point of Sale system using Django, enabling sales, billing, and inventory management without an internet connection. Designed resilient backend data models and workflows to keep operations seamless in low-connectivity retail environments.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Django", "Python", "SQLite", "Offline Synchronization", "Inventory Engine"].map((tech, i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-full bg-slate-950 border border-white/10 text-xs text-slate-300 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-10 py-5 bg-slate-950/60 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Reliability: 100% Offline Ready</span>
                <span className="text-amber-400 flex items-center gap-1.5">Production Grade <CheckCircle2 className="w-4 h-4" /></span>
              </div>
            </div>

            {/* Project 2: SMS (Next.js FYP) */}
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300 shadow-xl">
              <div className="p-8 sm:p-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30">Final Year Project (FYP)</Badge>
                </div>

                <div className="space-y-2">
                  <h4 className="text-3xl font-display font-bold text-white">School Management System (SMS)</h4>
                  <p className="text-sm text-indigo-400 font-medium">Next.js • Modern Frontend Architecture • Interactive Dashboard</p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Developed a comprehensive School Management System as a final year project using Next.js to digitize and streamline school administration processes. Implemented interactive modules to manage student records, attendance tracking, and academic workflows for administrators, teachers, and students.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Next.js", "React", "JavaScript", "Component Architecture", "Role-Based UI", "Admin Dashboard"].map((tech, i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-full bg-slate-950 border border-white/10 text-xs text-slate-300 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-10 py-5 bg-slate-950/60 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>University of Swat • FYP</span>
                <span className="text-indigo-400 flex items-center gap-1.5">Validated Success <CheckCircle2 className="w-4 h-4" /></span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Experience */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-xs uppercase tracking-[0.2em] text-amber-400 font-bold">Professional Career</h2>
                <h3 className="text-4xl font-display font-extrabold">Experience</h3>
              </div>

              <div className="space-y-6 border-l-2 border-white/10 pl-8 ml-3">
                <div className="relative space-y-4">
                  <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-[#070b12]" />
                  <div className="flex items-center justify-between">
                    <h4 className="text-2xl font-display font-bold text-white">Fresher & Active Job Seeker</h4>
                    <Badge variant="outline" className="border-amber-500/30 text-amber-400 text-xs">Present</Badge>
                  </div>
                  <p className="text-xs text-amber-400/90 font-semibold uppercase tracking-wider">Software Engineering & AI Roles</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Actively seeking entry-level software engineering or IT roles to apply strong problem-solving skills, adaptability, and a fast learning mindset within a professional team environment.
                  </p>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-300 pt-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      Applied HTML, CSS, JavaScript web design, Python data analysis, and workflow automation through academic and self-directed projects.
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      Handled customer email support, responding to queries and managing correspondence in a timely, professional manner.
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      Managed data entry tasks with strong attention to detail and rigorous time management.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div id="education" className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-xs uppercase tracking-[0.2em] text-indigo-400 font-bold">Academic Background</h2>
                <h3 className="text-4xl font-display font-extrabold">Education</h3>
              </div>

              <div className="space-y-6 border-l-2 border-white/10 pl-8 ml-3">
                <div className="relative space-y-4">
                  <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#070b12]" />
                  <div className="flex items-center justify-between">
                    <h4 className="text-2xl font-display font-bold text-white">BS in Software Engineering</h4>
                    <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 text-xs">2022 – 2026</Badge>
                  </div>
                  <p className="text-xs text-indigo-400 font-semibold uppercase tracking-wider">University of Swat • CGPA: 3.14 / 4.0</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Comprehensive study of software engineering principles, algorithms, database management, and full-stack software development architectures.
                  </p>
                </div>

                <div className="relative space-y-3 pt-6">
                  <div className="absolute -left-[37px] top-7.5 w-4 h-4 rounded-full bg-slate-700 border-4 border-[#070b12]" />
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-display font-bold text-white">Intermediate (Pre-Engineering)</h4>
                    <span className="text-xs text-slate-400 font-medium">2021 – 2022</span>
                  </div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Jahanzeb College, Swat</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Strong foundational training in advanced mathematics, physics, and analytical problem-solving.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 bg-white/[0.02] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xs uppercase tracking-[0.2em] text-amber-400 font-bold">Connect With Me</h2>
                <h3 className="text-4xl font-display font-extrabold">Let's Build Something Great</h3>
                <p className="text-slate-400 text-base leading-relaxed">
                  I'm actively seeking entry-level software engineering positions, AI advertising projects, and collaborative technical roles. Reach out anytime!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-5 rounded-2xl bg-slate-900/80 border border-white/10">
                  <div className="p-3.5 rounded-xl bg-amber-500/10 text-amber-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold uppercase">Email Address</span>
                    <a href="mailto:idreekhan122@gmail.com" className="text-white font-bold hover:text-amber-400 transition-colors">
                      idreekhan122@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-5 rounded-2xl bg-slate-900/80 border border-white/10">
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold uppercase">Phone / WhatsApp</span>
                    <a href="tel:+923208006787" className="text-white font-bold hover:text-emerald-400 transition-colors">
                      +92 320 8006787
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-5 rounded-2xl bg-slate-900/80 border border-white/10">
                  <div className="p-3.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold uppercase">Location</span>
                    <span className="text-white font-bold">Swat, KPK, Pakistan</span>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3">
                <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Languages Spoken</h4>
                <div className="flex flex-wrap gap-2">
                  {["English (Proficient)", "Urdu (Fluent)", "Pashto (Native)"].map((lang, i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-full bg-slate-950 border border-white/10 text-xs text-amber-300 font-semibold">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900/90 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl space-y-6">
                <div className="space-y-2">
                  <h4 className="text-2xl font-display font-bold text-white">Send a Direct Message</h4>
                  <p className="text-sm text-slate-400">Fill out the form below and Idrees will respond promptly.</p>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-300">Your Name</label>
                    <Input 
                      placeholder="e.g. Sarah Jenkins" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-slate-950 border-white/10 text-white h-14 rounded-xl focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-300">Your Email</label>
                    <Input 
                      type="email"
                      placeholder="e.g. sarah@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-950 border-white/10 text-white h-14 rounded-xl focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-300">Message</label>
                    <Textarea 
                      placeholder="Write your project details or inquiry here..." 
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-slate-950 border-white/10 text-white rounded-xl focus:border-amber-500 resize-none p-4"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold h-14 rounded-xl text-base shadow-xl shadow-amber-500/20 gap-2"
                  >
                    {isSubmitting ? "Sending Message..." : <>Send Message <Send className="w-5 h-5" /></>}
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-[#070b12] text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center font-extrabold text-slate-950 text-xs">
              IK
            </div>
            <div>
              <span className="font-display font-bold text-white">Idrees Khan</span>
              <span className="text-xs text-slate-500 block">Software Engineer</span>
            </div>
          </div>

          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Idrees Khan. All rights reserved. Built with editorial precision.
          </div>

          <div className="flex items-center space-x-5">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-slate-400 hover:text-amber-400 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-slate-400 hover:text-amber-400 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-amber-400 hover:underline font-semibold">
              CV PDF
            </a>
            <button onClick={() => scrollToSection("hero")} className="text-xs text-slate-400 hover:text-white">
              Back to top ↑
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
