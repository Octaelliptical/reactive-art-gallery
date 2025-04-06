
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  index,
}) => {
  const { ref, isInView } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "-100px",
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={cn(
        "flex flex-col md:flex-row gap-6 md:gap-10 items-center my-16 md:my-24",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2 aspect-video overflow-hidden rounded-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 flex flex-col">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">{title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <div className="flex gap-4 mt-auto">
          {githubUrl && (
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" /> Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button size="sm" className="gap-2" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
