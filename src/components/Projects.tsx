
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projectsData = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for e-commerce businesses featuring sales analytics, inventory management, and customer insights with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "TanStack Query", "Recharts", "TypeScript", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Financial Portfolio Tracker",
    description:
      "A modern financial application that helps users track investments, analyze portfolio performance, and visualize asset allocation with interactive charts.",
    image: "https://images.unsplash.com/photo-1460925895917-afddc27a96ee",
    tags: ["React", "Framer Motion", "TypeScript", "Shadcn UI", "Supabase"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "AI Content Platform",
    description:
      "An AI-powered platform for content creation and management with features like automatic summarization, sentiment analysis, and content recommendations.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    tags: ["React", "OpenAI API", "TanStack Query", "Tailwind CSS", "Framer Motion"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

const Projects: React.FC = () => {
  const { ref, isInView } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore some of my recent work showcasing interactive designs, smooth animations,
            and modern web technologies.
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-0">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl opacity-20 -z-10" />
    </section>
  );
};

export default Projects;
