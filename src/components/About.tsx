
import React from "react";
import { motion } from "framer-motion";
import Timeline from "./Timeline";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experienceData = [
  {
    year: "2023",
    title: "Senior Frontend Developer at TechCorp",
    description: "Led development of a complex dashboard using React, TypeScript, and advanced animations with Framer Motion. Improved performance by 40%.",
  },
  {
    year: "2021",
    title: "Full Stack Developer at DataViz Inc",
    description: "Built interactive data visualization tools and dashboards using React, D3.js, and Node.js backends. Implemented real-time data processing.",
  },
  {
    year: "2019",
    title: "UI/UX Developer at CreativeStudio",
    description: "Designed and implemented user interfaces for web and mobile applications with a focus on accessibility and responsive design.",
  },
];

const educationData = [
  {
    year: "2018",
    title: "Master's in Computer Science",
    description: "Specialized in Human-Computer Interaction and Interactive Technologies, graduating with honors.",
  },
  {
    year: "2016",
    title: "Bachelor's in Software Engineering",
    description: "Focused on web technologies and user interface design. Completed with distinction.",
  },
];

const About: React.FC = () => {
  const { ref, isInView } = useScrollAnimation({
    threshold: 0.1,
  });

  const { ref: timelineRef, isInView: timelineInView } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer with expertise in creating interactive and visually stunning web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient-blue">My Story</h3>
            <div className="prose prose-invert max-w-none">
              <p className="mb-4">
                I'm a creative developer who loves building exceptional digital experiences. With a background in both design and development, I bring a unique perspective to every project.
              </p>
              <p className="mb-4">
                My journey began with a passion for creating visually appealing interfaces, which evolved into a deep appreciation for clean, efficient code and seamless user experiences.
              </p>
              <p>
                Today, I specialize in creating responsive web applications with modern technologies like React, TypeScript, and cutting-edge animation libraries. My goal is always to build products that are not only functional but also delightful to use.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/20">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-40" />
            </div>
          </motion.div>
        </div>

        <div ref={timelineRef} className="grid grid-cols-1 gap-8 md:gap-12">
          <div>
            <motion.h3
              className="text-2xl font-bold mb-6 text-gradient-blue"
              initial={{ opacity: 0, y: 20 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              Experience
            </motion.h3>
            <Timeline items={experienceData} isInView={timelineInView} />
          </div>

          <div>
            <motion.h3
              className="text-2xl font-bold mb-6 text-gradient-blue"
              initial={{ opacity: 0, y: 20 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Education
            </motion.h3>
            <Timeline items={educationData} isInView={timelineInView} />
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl opacity-20 -z-10" />
    </section>
  );
};

export default About;
