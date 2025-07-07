import React from 'react';
import { motion } from 'framer-motion';
import ProgressBar from './ProgressBar';

const SkillsProgress = () => {
  const technicalSkills = [
    { name: "JavaScript/TypeScript", percentage: 90, color: "bg-blue-500" },
    { name: "React", percentage: 85, color: "bg-cyan-500" },
    { name: "Node.js", percentage: 80, color: "bg-green-500" },
    { name: "Python", percentage: 75, color: "bg-yellow-500" },
    { name: "Java", percentage: 70, color: "bg-red-500" },
    { name: "C/C++", percentage: 65, color: "bg-purple-500" }
  ];

  const otherSkills = [
    { name: "UI/UX Design", percentage: 75, color: "bg-pink-500" },
    { name: "Problem Solving", percentage: 90, color: "bg-emerald-500" },
    { name: "Machine Learning", percentage: 65, color: "bg-indigo-500" },
    { name: "Database Management", percentage: 80, color: "bg-orange-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Technical Skills
            </h3>
            {technicalSkills.map((skill, index) => (
              <ProgressBar
                key={index}
                skill={skill.name}
                percentage={skill.percentage}
                color={skill.color}
              />
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Other Skills
            </h3>
            {otherSkills.map((skill, index) => (
              <ProgressBar
                key={index}
                skill={skill.name}
                percentage={skill.percentage}
                color={skill.color}
              />
            ))}
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-4">
          {["HTML/CSS", "Git", "Docker", "MongoDB", "AWS", "Firebase"].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center text-sm font-medium text-gray-700 dark:text-gray-300 shadow-md"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsProgress;