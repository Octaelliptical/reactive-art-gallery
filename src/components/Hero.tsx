
import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-accent/10 text-accent mb-5">
            Full Stack Developer • UI/UX Designer • Creative Technologist
          </span>
        </motion.div>
        
        <div className="space-y-4 mb-8">
          <AnimatedText
            text="Creating digital experiences"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient"
            delay={200}
          />
          <AnimatedText
            text="that stand out."
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient-blue"
            delay={1000}
          />
        </div>
        
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          Specialized in crafting beautiful, interactive web applications with smooth
          animations, responsive designs, and cutting-edge technologies.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <Button size="lg" className="px-8 hover-lift">
            View Projects
          </Button>
          <Button size="lg" variant="outline" className="hover-lift">
            Download Resume
          </Button>
        </motion.div>
        
        <motion.div
          className="flex gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.8 }}
        >
          <a href="#" className="hover:text-accent transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#projects" className="flex flex-col items-center text-sm text-muted-foreground">
            <span className="mb-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
