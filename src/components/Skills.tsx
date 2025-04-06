
import React from "react";
import { motion } from "framer-motion";
import SkillBar from "./SkillBar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Code, 
  Database, 
  Layers, 
  Palette, 
  LineChart, 
  Upload,
  PenTool,
  Settings,
  Share2,
  Smartphone
} from "lucide-react";

const frontendSkills = [
  { name: "React & Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 98 },
  { name: "Framer Motion", level: 85 },
];

const backendSkills = [
  { name: "Node.js", level: 85 },
  { name: "API Development", level: 90 },
  { name: "Database Design", level: 80 },
  { name: "Authentication", level: 88 },
];

const skillIcons = [
  {
    icon: <Code className="w-10 h-10" />,
    title: "Frontend Development",
    description: "Creating responsive, accessible, and performant user interfaces",
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: "Backend Systems",
    description: "Building scalable APIs and server-side applications",
  },
  {
    icon: <Layers className="w-10 h-10" />,
    title: "Full-Stack Integration",
    description: "Connecting frontend and backend systems seamlessly",
  },
  {
    icon: <Upload className="w-10 h-10" />,
    title: "Cloud Deployment",
    description: "Deploying applications to various cloud platforms",
  },
  {
    icon: <LineChart className="w-10 h-10" />,
    title: "Data Visualization",
    description: "Creating interactive charts and data dashboards",
  },
  {
    icon: <Palette className="w-10 h-10" />,
    title: "UI/UX Design",
    description: "Designing beautiful and functional user experiences",
  },
  {
    icon: <PenTool className="w-10 h-10" />,
    title: "Animation",
    description: "Adding motion and life to web interfaces",
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "Responsive Design",
    description: "Building applications that work on all devices",
  },
  {
    icon: <Settings className="w-10 h-10" />,
    title: "Performance Optimization",
    description: "Enhancing speed and responsiveness of applications",
  },
];

const Skills: React.FC = () => {
  const { ref, isInView } = useScrollAnimation({
    threshold: 0.1,
  });

  const { ref: skillsRef, isInView: skillsInView } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive set of technical abilities and domain knowledge
            honed over years of professional experience.
          </p>
        </motion.div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {skillIcons.map((skill, index) => (
            <motion.div
              key={index}
              className="glass-morphism p-6 rounded-xl text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.4)" }}
            >
              <div className="flex justify-center text-accent mb-4">
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <motion.h3
              className="text-2xl font-bold mb-6 text-gradient-green"
              initial={{ opacity: 0, x: -20 }}
              animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Frontend Development
            </motion.h3>
            
            {frontendSkills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                level={skill.level}
                color="bg-accent"
                delay={index + 1}
                isInView={skillsInView}
              />
            ))}
          </div>
          
          <div>
            <motion.h3
              className="text-2xl font-bold mb-6 text-gradient-green"
              initial={{ opacity: 0, x: -20 }}
              animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Backend Development
            </motion.h3>
            
            {backendSkills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                level={skill.level}
                color="bg-green-500"
                delay={index + 5}
                isInView={skillsInView}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-green-500/10 rounded-full filter blur-3xl opacity-20 -z-10" />
    </section>
  );
};

export default Skills;
