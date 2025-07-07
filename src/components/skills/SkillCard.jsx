import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  NeuralNetworkAnimation, 
  ChartsAnimation,
  ChatbotAnimation,
  GraphAnimation,
  WireframeAnimation,
  BlockchainAnimation,
  MobileAppAnimation,
  SecurityAnimation,
  ApiAnimation,
  SystemDesignAnimation,
  ThreeDObjectAnimation,
  CloudAnimation,
  ComponentsAnimation,
  PipelineAnimation,
  CloudServicesAnimation,
  FlowchartAnimation,
  ChecklistAnimation,
  CollaborationAnimation,
  AgenticAIAnimation
} from './animations'

const SkillCard = ({ skill, index }) => {
  const [hovered, setHovered] = useState(false)
  
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.8,
      rotateX: 15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.08 + 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const getAnimation = (type) => {
    const animationMap = {
      neuralNetwork: <NeuralNetworkAnimation />,
      charts: <ChartsAnimation />,
      chatbot: <ChatbotAnimation />,
      graph: <GraphAnimation />,
      wireframe: <WireframeAnimation />,
      blockchain: <BlockchainAnimation />,
      mobileApp: <MobileAppAnimation />,
      security: <SecurityAnimation />,
      api: <ApiAnimation />,
      systemDesign: <SystemDesignAnimation />,
      '3dObject': <ThreeDObjectAnimation />,
      cloud: <CloudAnimation />,
      components: <ComponentsAnimation />,
      pipeline: <PipelineAnimation />,
      cloudServices: <CloudServicesAnimation />,
      flowchart: <FlowchartAnimation />,
      checklist: <ChecklistAnimation />,
      collaboration: <CollaborationAnimation />,
      agenticAI: <AgenticAIAnimation />
    }
    
    return animationMap[type] || null
  }

  // Convert skill title to URL-friendly format
  const skillUrl = skill.title.toLowerCase().replace(/[^a-z0-9]/g, '-')

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-full relative overflow-hidden group"
      style={{ perspective: '1000px' }}
    >
      <Link 
        to={`/skill/${skillUrl}`}
        className="block h-full"
      >
        <motion.div
          className="card p-6 h-full cursor-pointer"
          whileHover={{ 
            y: -12,
            scale: 1.03,
            rotateY: 2,
            transition: { 
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Enhanced background gradient with smoother transitions */}
          <motion.div 
            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.bgColor} opacity-0`}
            animate={{ 
              opacity: hovered ? 0.08 : 0,
              scale: hovered ? 1.05 : 1
            }}
            transition={{ 
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1]
            }}
          />
          
          {/* Subtle border glow effect */}
          <motion.div
            className={`absolute inset-0 rounded-xl border bg-gradient-to-br ${skill.bgColor} opacity-0`}
            animate={{
              opacity: hovered ? 0.2 : 0
            }}
            transition={{ duration: 0.4 }}
            style={{
              background: `linear-gradient(135deg, transparent, ${skill.bgColor.split(' ')[1]?.replace('to-', '') || 'transparent'})`,
              filter: 'blur(1px)'
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            <motion.div 
              variants={contentVariants}
              className="mb-6 flex justify-between items-start"
            >
              <motion.h3 
                className={`text-xl font-bold ${skill.iconColor} ${skill.darkIconColor}`}
                animate={{
                  scale: hovered ? 1.05 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                {skill.title}
              </motion.h3>
            </motion.div>
            
            {/* Enhanced animation container */}
            <motion.div 
              className="w-full h-36 mb-6 flex items-center justify-center overflow-hidden rounded-lg"
              animate={{ 
                scale: hovered ? 1.1 : 1,
                rotateY: hovered ? 5 : 0
              }}
              transition={{ 
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
              }}
              style={{ 
                background: hovered ? `linear-gradient(135deg, ${skill.bgColor.replace('from-', '').replace('to-', ', ')})` : 'transparent',
                backgroundOpacity: 0.05
              }}
            >
              <motion.div
                animate={{
                  opacity: hovered ? 1 : 0.8,
                  scale: hovered ? 1.1 : 1
                }}
                transition={{ duration: 0.4 }}
              >
                {getAnimation(skill.animationType)}
              </motion.div>
            </motion.div>
            
            <motion.p 
              variants={contentVariants}
              className="text-gray-700 dark:text-gray-300 mb-6 flex-grow leading-relaxed"
              animate={{
                color: hovered ? '#374151' : undefined
              }}
              transition={{ duration: 0.3 }}
            >
              {skill.description}
            </motion.p>
            
            <motion.div 
              variants={contentVariants}
              className="flex flex-wrap gap-2 mt-auto"
            >
              {skill.technologies.map((tech, techIndex) => (
                <motion.span 
                  key={techIndex} 
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300
                    ${hovered 
                      ? `bg-gradient-to-r ${skill.bgColor} text-white shadow-lg` 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: hovered ? -2 : 0
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: techIndex * 0.05,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -4
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Click indicator */}
            <motion.div
              className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                opacity: hovered ? 1 : 0,
                scale: hovered ? 1 : 0.8
              }}
            >
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${skill.bgColor} flex items-center justify-center text-white shadow-lg`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          </div>
          
          {/* Subtle shine effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 -skew-x-12"
            animate={{
              x: hovered ? '100%' : '-100%',
              opacity: hovered ? [0, 0.1, 0] : 0
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ width: '50%' }}
          />
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default SkillCard