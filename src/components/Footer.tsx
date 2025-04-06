
import React from "react";
import { motion } from "framer-motion";
import { Code, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-background/70">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-8">
          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-8 h-8 text-accent" />
              <span className="text-xl font-bold">Portfolio</span>
            </div>
            <p className="text-muted-foreground mb-6">
              A showcase of my work, skills, and passion for creating beautiful digital experiences
              with modern web technologies and animations.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-secondary/50 p-2 rounded-full hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-secondary/50 p-2 rounded-full hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-secondary/50 p-2 rounded-full hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="bg-secondary/50 p-2 rounded-full hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-accent transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-muted-foreground hover:text-accent transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    Animation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    Consulting
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-1"
            >
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">
                  contact@example.com
                </li>
                <li className="text-muted-foreground">
                  +1 (555) 123-4567
                </li>
                <li className="text-muted-foreground">
                  New York, NY
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="border-t border-secondary/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
