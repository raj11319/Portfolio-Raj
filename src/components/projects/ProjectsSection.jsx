import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  
  const projects = [
    {
      title: "AI-Powered Study Assistant",
      description: "An application that uses NLP to help students analyze and understand complex academic texts.",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Python", "Machine Learning", "NLP"],
      category: "AI/ML"
    },
    {
      title: "Campus Event Management System",
      description: "A full-stack web application for managing university events, including registration, scheduling, and attendance tracking.",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "Web"
    },
    {
      title: "Smart Parking Solution",
      description: "IoT-based system that uses computer vision to detect vacant parking spots and guide users.",
      image: "https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["IoT", "Computer Vision", "React Native", "Python"],
      category: "Mobile"
    }
  ];

  const filters = ["All Projects", "Web", "Mobile", "AI/ML", "Blockchain", "Other"];

  const filteredProjects = activeFilter === "All Projects"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mx-auto"
        >
          My Projects
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12"
        >
          Here are some of the projects I've worked on during my academic journey and in my
          spare time. Each project represents a different challenge and learning experience.
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                ${activeFilter === filter
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;