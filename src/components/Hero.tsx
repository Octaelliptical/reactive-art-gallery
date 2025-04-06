
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden pt-16"
    >
      {/* Background Particles/Gradients */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-30 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl opacity-20 animate-float animation-delay-500" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl opacity-20 animate-float animation-delay-1000" />
      </div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient mb-4"
        >
          KARAN DUBEY
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <span className="text-xl md:text-2xl font-medium text-[#22d867] mb-8 inline-block">
            Computer Science Student & Web Developer
          </span>
        </motion.div>
        
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto my-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          A passionate developer focused on creating modern, responsive web applications with a strong foundation in computer science and algorithms.
        </motion.p>
        
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <a href="https://github.com" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:karandubey2122@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="w-5 h-5" />
            <span>karandubey2122@gmail.com</span>
          </a>
          <a href="tel:+917067299313" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-5 h-5" />
            <span>+91 7067299313</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
