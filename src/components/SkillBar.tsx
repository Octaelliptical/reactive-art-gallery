
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  name: string;
  level: number; // 0-100
  color?: string;
  delay?: number;
  isInView: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({
  name,
  level,
  color = "bg-accent",
  delay = 0,
  isInView,
}) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className={cn("h-full rounded-full", color)}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ 
            duration: 1,
            delay: delay * 0.1,
            ease: "easeOut" 
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
