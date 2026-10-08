import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
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
  Linkedin,
  Search
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
  const shouldReduceMotion = useReducedMotion();

  const revealVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.01 : 0.55, ease: "easeOut" }
    }
  };
  const staggerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 } }
  };
  const cardHover = shouldReduceMotion ? undefined : { y: -5, scale: 1.015 };
  const cardHoverTransition = { type: "spring" as const, stiffness: 320, damping: 24 };

  const PORTRAIT_URL = "/idrees-khan-portrait.jpeg";
  const CV_URL = "/Idrees_Khan_CV.pdf";
  const LINKEDIN_URL = "https://www.linkedin.com/in/idrees-khan-se/";
  const GITHUB_URL = "https://github.com/imidrees7";

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields before sending.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/idreekhan122@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          _replyto: email,
          _subject: `Portfolio inquiry from ${name}`,
          message,
        }),
      });
      const result = (await response.json()) as { success?: boolean | string };

      if (!response.ok || String(result.success).toLowerCase() !== "true") {
        throw new Error("The message could not be sent.");
      }

      setFormData({ name: "", email: "", message: "" });
      toast.success("Message submitted. Thank you for reaching out.");
    } catch {
      toast.error("Unable to send your message. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector("header > div")?.getBoundingClientRect().height ?? 96;
      const top = element.getBoundingClientRect().top + window.scrollY - headerHeight;
      if (window.matchMedia("(max-width: 1279px)").matches || shouldReduceMotion) {
        window.scrollTo(0, Math.max(0, top));
      } else {
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      }
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
          <button type="button" aria-label="Back to top" className="flex items-center space-x-3 cursor-pointer text-left" onClick={() => scrollToSection("hero")}>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center font-bold text-slate-950 shadow-lg shadow-amber-500/20">
              IK
            </div>
            <div>
              <span className="font-display font-extrabold text-lg tracking-wide block">IDREES KHAN</span>
              <span className="text-xs text-amber-400 font-medium tracking-widest uppercase">Software Engineer</span>
            </div>
          </button>

          {/* Desktop Links */}
          <nav className="hidden xl:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <button onClick={() => scrollToSection("about")} className="hover:text-amber-400 transition-colors">About</button>
            <button onClick={() => scrollToSection("skills")} className="hover:text-amber-400 transition-colors">Skills</button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-amber-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection("experience")} className="hover:text-amber-400 transition-colors">Experience</button>
            <button onClick={() => scrollToSection("education")} className="hover:text-amber-400 transition-colors">Education</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-amber-400 transition-colors">Contact</button>
          </nav>

          <div className="hidden xl:flex items-center space-x-4">
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
          <div className="xl:hidden">
            <button 
              type="button"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
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
              id="mobile-navigation"
              className="xl:hidden max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-contain bg-[#070b12] border-b border-white/10 px-6 py-6 space-y-4"
            >
              <button onClick={() => scrollToSection("about")} className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium">About</button>
              <button onClick={() => scrollToSection("skills")} className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium">Skills</button>
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
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.7 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-widest uppercase">
                <Sparkles className="w-4 h-4" /> Web Development • Python • Digital Marketing & SEO
              </div>

              <h1 className="text-5xl sm:text-7xl font-display font-extrabold tracking-tight leading-[1.1]">
                Building Better <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                  Digital Experiences.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-2xl leading-relaxed">
                Hi, I'm <strong className="text-white font-semibold">Idrees Khan</strong>, a Software Engineering graduate from the University of Swat (2026). I build responsive web applications, create Python-powered software and data workflows, and work on digital marketing and SEO to improve online visibility.
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
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-amber-400 block">Web</span>
                  <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">HTML, CSS, JavaScript</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-amber-400 block">Python</span>
                  <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">Django & Data</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-amber-400 block">Marketing</span>
                  <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">Digital & SEO</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Image Card */}
            <motion.div 
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, delay: shouldReduceMotion ? 0 : 0.2 }}
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
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-3xl mx-auto text-center space-y-4 mb-20"
          >
            <h2 className="text-xs uppercase tracking-[0.2em] text-amber-400 font-bold">Background & Philosophy</h2>
            <h3 className="text-4xl font-display font-extrabold tracking-tight">Professional Profile</h3>
            <p className="text-slate-400 text-lg">
              Combining web development and Python skills with digital marketing and search engine optimization.
            </p>
          </motion.div>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={revealVariants} whileHover={cardHover} transition={cardHoverTransition} className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl border border-white/10 space-y-4 hover:border-amber-500/40 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                <Code className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-display font-bold">Web & Python Development</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Software Engineering graduate from the University of Swat (2026), with hands-on experience building responsive web applications and a custom Python and Django Point of Sale system.
              </p>
            </motion.div>

            <motion.div variants={revealVariants} whileHover={cardHover} transition={cardHoverTransition} className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl border border-white/10 space-y-4 hover:border-amber-500/40 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                <Search className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-display font-bold">Digital Marketing & SEO</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Focused on digital marketing strategy and search engine optimization to help businesses strengthen their online visibility.
              </p>
            </motion.div>

            <motion.div variants={revealVariants} whileHover={cardHover} transition={cardHoverTransition} className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl border border-white/10 space-y-4 hover:border-amber-500/40 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                <Briefcase className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-display font-bold">Communication & Support</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Experienced in professional customer email support, meticulous data entry, and fluent multilingual communication in English, Urdu, and Pashto.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-3xl mx-auto text-center space-y-4 mb-20"
          >
            <h2 className="text-xs uppercase tracking-[0.2em] text-amber-400 font-bold">Core Capabilities</h2>
            <h3 className="text-4xl font-display font-extrabold tracking-tight">Web, Python & Digital Marketing</h3>
            <p className="text-slate-400 text-lg">
              Building responsive websites, practical Python software, and stronger search visibility.
            </p>
          </motion.div>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Web Development",
                desc: "Responsive websites and interactive interfaces built with HTML, CSS, JavaScript, React, and Next.js.",
                icon: <Code className="w-7 h-7 text-blue-400" />,
                details: "HTML · CSS · JavaScript · React · Next.js"
              },
              {
                title: "Python Development",
                desc: "Python programming for practical software, data analysis, and automation, including a Django-based POS system.",
                icon: <Database className="w-7 h-7 text-emerald-400" />,
                details: "Python · Django · Pandas · NumPy"
              },
              {
                title: "Digital Marketing & SEO",
                desc: "Digital marketing strategy and search engine optimization to improve online visibility and reach.",
                icon: <Search className="w-7 h-7 text-cyan-400" />,
                details: "Digital Marketing · SEO · Online Visibility"
              }
            ].map((skill) => (
              <motion.div 
                key={skill.title}
                variants={revealVariants}
                whileHover={cardHover}
                transition={cardHoverTransition}
                className="bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all duration-300 space-y-5"
              >
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-white/10 w-fit">
                  {skill.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-2xl text-white mb-2">{skill.title}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{skill.desc}</p>
                </div>
                <p className="text-xs text-amber-300 font-medium">{skill.details}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12"
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-5">Additional Skills</h4>
            <motion.div variants={staggerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "AI Video & Ad Creation", icon: <Video className="w-5 h-5 text-amber-400" /> },
                { title: "Prompt Engineering & AI Tools", icon: <Wand2 className="w-5 h-5 text-indigo-400" /> },
                { title: "Customer Email Support", icon: <Mail className="w-5 h-5 text-emerald-400" /> },
                { title: "Graphic Design & Office", icon: <Layers className="w-5 h-5 text-rose-400" /> }
              ].map((skill) => (
                <motion.div key={skill.title} variants={revealVariants} whileHover={cardHover} transition={cardHoverTransition} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/50 border border-white/10">
                  {skill.icon}
                  <span className="text-sm text-slate-300">{skill.title}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-28 bg-white/[0.02] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-3xl mx-auto text-center space-y-4 mb-20"
          >
            <h2 className="text-xs uppercase tracking-[0.2em] text-amber-400 font-bold">Featured Work</h2>
            <h3 className="text-4xl font-display font-extrabold tracking-tight">Software Projects Showcase</h3>
            <p className="text-slate-400 text-lg">
              Engineered software systems built for resilience, scalability, and practical utility.
            </p>
          </motion.div>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            
            {/* Project 1: POS (Django) */}
            <motion.div variants={revealVariants} whileHover={cardHover} transition={cardHoverTransition} className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 shadow-xl">
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
            </motion.div>

            {/* Project 2: SMS (Next.js FYP) */}
            <motion.div variants={revealVariants} whileHover={cardHover} transition={cardHoverTransition} className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300 shadow-xl">
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
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            
            {/* Experience */}
            <motion.div variants={revealVariants} className="space-y-8">
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
                  <p className="text-xs text-amber-400/90 font-semibold uppercase tracking-wider">Web Development, Python & Digital Marketing</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Actively seeking entry-level opportunities in web development, Python, and digital marketing or SEO, bringing strong problem-solving skills and a fast learning mindset.
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
            </motion.div>

            {/* Education */}
            <motion.div id="education" variants={revealVariants} className="space-y-8">
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
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 bg-white/[0.02] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            
            {/* Info */}
            <motion.div variants={revealVariants} className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xs uppercase tracking-[0.2em] text-amber-400 font-bold">Connect With Me</h2>
                <h3 className="text-4xl font-display font-extrabold">Let's Build Something Great</h3>
                <p className="text-slate-400 text-base leading-relaxed">
                    I'm actively seeking opportunities in web development, Python, and digital marketing or SEO. Reach out to discuss a project or role.
                </p>
              </div>

              <div className="space-y-4">
                <motion.div whileHover={cardHover} transition={cardHoverTransition} className="flex items-center space-x-4 p-5 rounded-2xl bg-slate-900/80 border border-white/10">
                  <div className="p-3.5 rounded-xl bg-amber-500/10 text-amber-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold uppercase">Email Address</span>
                    <a href="mailto:idreekhan122@gmail.com" className="text-white font-bold hover:text-amber-400 transition-colors">
                      idreekhan122@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div whileHover={cardHover} transition={cardHoverTransition} className="flex items-center space-x-4 p-5 rounded-2xl bg-slate-900/80 border border-white/10">
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold uppercase">Phone / WhatsApp</span>
                    <a href="tel:+923208006787" className="text-white font-bold hover:text-emerald-400 transition-colors">
                      +92 320 8006787
                    </a>
                  </div>
                </motion.div>

                <motion.div whileHover={cardHover} transition={cardHoverTransition} className="flex items-center space-x-4 p-5 rounded-2xl bg-slate-900/80 border border-white/10">
                  <div className="p-3.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold uppercase">Location</span>
                    <span className="text-white font-bold">Swat, KPK, Pakistan</span>
                  </div>
                </motion.div>
              </div>

              {/* Languages */}
              <motion.div whileHover={cardHover} transition={cardHoverTransition} className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3">
                <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Languages Spoken</h4>
                <div className="flex flex-wrap gap-2">
                  {["English (Proficient)", "Urdu (Fluent)", "Pashto (Native)"].map((lang, i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-full bg-slate-950 border border-white/10 text-xs text-amber-300 font-semibold">
                      {lang}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div variants={revealVariants} className="lg:col-span-7">
              <motion.div whileHover={cardHover} transition={cardHoverTransition} className="bg-slate-900/90 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl space-y-6">
                <div className="space-y-2">
                  <h4 className="text-2xl font-display font-bold text-white">Send a Direct Message</h4>
                  <p className="text-sm text-slate-400">Fill out the form below and Idrees will respond promptly.</p>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-widest text-slate-300">Your Name</label>
                    <Input 
                      id="contact-name"
                      name="name"
                      placeholder="e.g. Sarah Jenkins" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-slate-950 border-white/10 text-white h-14 rounded-xl focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-widest text-slate-300">Your Email</label>
                    <Input 
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="e.g. sarah@example.com" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-950 border-white/10 text-white h-14 rounded-xl focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-widest text-slate-300">Message</label>
                    <Textarea 
                      id="contact-message"
                      name="message"
                      placeholder="Write your project details or inquiry here..." 
                      rows={5}
                      required
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
                    <>{isSubmitting ? "Sending..." : "Send Message"} <Send className="w-5 h-5" /></>
                  </Button>
                </form>
              </motion.div>
            </motion.div>

          </motion.div>
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
