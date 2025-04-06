
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  index,
  isInView,
}) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-12 before:h-full before:px-px before:bg-secondary before:ml-px sm:before:ml-0 before:top-0">
        <div className="absolute left-0 sm:left-0 top-9 sm:top-16 flex items-center justify-center w-5 h-5">
          <motion.div
            className="w-3 h-3 bg-accent rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          />
        </div>
        <motion.div
          className="sm:absolute sm:left-0 sm:top-8 flex min-w-[5rem] font-bold text-xl mb-2 sm:mb-0 text-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: index * 0.3 + 0.1 }}
        >
          {year}
        </motion.div>
        <div className="bg-secondary/30 glass-morphism rounded-lg p-4 sm:p-6 w-full">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

interface TimelineProps {
  items: {
    year: string;
    title: string;
    description: string;
  }[];
  isInView: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ items, isInView }) => {
  return (
    <div className="space-y-2 mt-8">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          year={item.year}
          title={item.title}
          description={item.description}
          index={index}
          isInView={isInView}
        />
      ))}
    </div>
  );
};

export default Timeline;
