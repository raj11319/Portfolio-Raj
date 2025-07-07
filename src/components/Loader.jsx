import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  const containerVariants = {
    initial: {
      opacity: 1
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const circleVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotate: -180
    },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const textVariants = {
    initial: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.4,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 flex flex-col items-center justify-center z-50"
    >
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Professional loading animation */}
      <motion.div
        variants={circleVariants}
        className="relative w-24 h-24 mb-8"
      >
        {/* Subtle glow layer */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 blur-lg opacity-10"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Main spinner with professional design */}
        <motion.div 
          className="relative w-full h-full rounded-full border-3 border-transparent bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 p-0.5"
          animate={{ rotate: 360 }}
          transition={{ 
            repeat: Infinity, 
            duration: 2, 
            ease: "linear" 
          }}
          style={{
            background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #f59e0b, #3b82f6)'
          }}
        >
          <div className="w-full h-full rounded-full bg-gray-900" />
        </motion.div>
        
        {/* Inner rotating ring */}
        <motion.div
          className="absolute inset-3 rounded-full border border-primary-300/30"
          animate={{ rotate: -360 }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5, 
            ease: "linear" 
          }}
        />
        
        {/* Center core */}
        <motion.div
          className="absolute inset-6 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Professional loading text */}
      <motion.div
        variants={textVariants}
        className="text-center"
      >
        <motion.p
          className="text-gray-200 text-xl font-medium mb-4"
          animate={{ 
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Loading amazing skills...
        </motion.p>
        
        {/* Professional progress dots */}
        <motion.div
          className="flex justify-center space-x-2"
          animate={{
            transition: {
              staggerChildren: 0.2,
              repeat: Infinity,
              repeatDelay: 1
            }
          }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-primary-400 rounded-full"
              animate={{
                y: [0, -8, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
            />
          ))}
        </motion.div>
        
        {/* Professional loading bar */}
        <motion.div
          className="mt-6 w-48 h-0.5 bg-gray-700 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 2,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Loader