import React from 'react'
import { motion } from 'framer-motion'

// Neural Network Animation
export const NeuralNetworkAnimation = () => {
  const nodeCount = 10
  const connectionCount = 15
  
  const getRandomPosition = () => {
    return {
      x: Math.random() * 100,
      y: Math.random() * 100
    }
  }
  
  // Generate nodes
  const nodes = Array.from({ length: nodeCount }, () => getRandomPosition())
  
  // Generate connections
  const connections = Array.from({ length: connectionCount }, () => {
    return {
      from: Math.floor(Math.random() * nodeCount),
      to: Math.floor(Math.random() * nodeCount)
    }
  })

  return (
    <div className="w-full h-full relative">
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        {/* Connections */}
        {connections.map((connection, index) => (
          <motion.line
            key={`connection-${index}`}
            x1={nodes[connection.from].x}
            y1={nodes[connection.from].y}
            x2={nodes[connection.to].x}
            y2={nodes[connection.to].y}
            stroke="#3B82F6"
            strokeWidth="0.5"
            initial={{ opacity: 0.1 }}
            animate={{ 
              opacity: [0.1, 0.5, 0.1],
              strokeWidth: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.1
            }}
          />
        ))}
        
        {/* Nodes */}
        {nodes.map((node, index) => (
          <motion.circle
            key={`node-${index}`}
            cx={node.x}
            cy={node.y}
            r="2"
            fill="#3B82F6"
            initial={{ opacity: 0.5, r: 1 }}
            animate={{ 
              opacity: [0.5, 1, 0.5],
              r: [1, 2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.1
            }}
          />
        ))}
      </svg>
    </div>
  )
}

// Charts Animation
export const ChartsAnimation = () => {
  const barCount = 5
  
  return (
    <div className="w-full h-full flex items-end justify-center gap-4">
      {Array.from({ length: barCount }).map((_, index) => (
        <motion.div
          key={`bar-${index}`}
          className="w-6 bg-gradient-to-t from-green-500 to-emerald-400 rounded-t-md"
          initial={{ height: 0 }}
          animate={{ height: [20, 80, 40, 60, 30] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.2
          }}
        />
      ))}
    </div>
  )
}

// Chatbot Animation
export const ChatbotAnimation = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-60 max-w-full bg-gray-100 dark:bg-gray-700 rounded-lg p-4 relative">
        <motion.div 
          className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg opacity-10"
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        />
        
        {/* Messages */}
        <div className="space-y-2">
          <motion.div 
            className="bg-white dark:bg-gray-800 p-2 rounded-lg text-sm max-w-[80%]"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello! How can I help?
          </motion.div>
          
          <motion.div 
            className="bg-purple-500 text-white p-2 rounded-lg text-sm max-w-[80%] ml-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Tell me about AI
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 p-2 rounded-lg text-sm max-w-[80%]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.div
              initial={{ width: "20%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 1.5 }}
              className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full mb-2"
            />
            <motion.div
              initial={{ width: "30%" }}
              animate={{ width: "80%" }}
              transition={{ duration: 0.8, delay: 1.7 }}
              className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full mb-2"
            />
            <motion.div
              initial={{ width: "10%" }}
              animate={{ width: "60%" }}
              transition={{ duration: 0.6, delay: 1.9 }}
              className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// Graph Animation
export const GraphAnimation = () => {
  const nodes = [
    { id: 1, x: 50, y: 30 },
    { id: 2, x: 25, y: 60 },
    { id: 3, x: 75, y: 60 },
    { id: 4, x: 35, y: 90 },
    { id: 5, x: 65, y: 90 }
  ]
  
  const edges = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 }
  ]
  
  return (
    <div className="w-full h-full">
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        {/* Edges */}
        {edges.map((edge, index) => (
          <motion.line
            key={`edge-${index}`}
            x1={nodes[edge.from].x}
            y1={nodes[edge.from].y}
            x2={nodes[edge.to].x}
            y2={nodes[edge.to].y}
            stroke="#ef4444"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              delay: index * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 3
            }}
          />
        ))}
        
        {/* Nodes */}
        {nodes.map((node, index) => (
          <motion.circle
            key={`node-${index}`}
            cx={node.x}
            cy={node.y}
            r="4"
            fill="#ef4444"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.1 * index,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 3
            }}
          />
        ))}
      </svg>
    </div>
  )
}

// Wireframe Animation
export const WireframeAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-64 max-w-full">
        <motion.div 
          className="h-8 w-1/2 bg-pink-200 dark:bg-pink-900 mb-3"
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ duration: 0.5 }}
        />
        
        <div className="flex gap-3 mb-3">
          <motion.div 
            className="h-20 flex-1 bg-pink-100 dark:bg-pink-800"
            initial={{ height: 0 }}
            animate={{ height: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.div 
            className="h-20 flex-1 bg-pink-100 dark:bg-pink-800"
            initial={{ height: 0 }}
            animate={{ height: 80 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.div 
            className="h-20 flex-1 bg-pink-100 dark:bg-pink-800"
            initial={{ height: 0 }}
            animate={{ height: 80 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>
        
        <motion.div 
          className="h-30 w-full bg-pink-50 dark:bg-pink-700 mb-3"
          initial={{ height: 0 }}
          animate={{ height: 60 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        
        <div className="flex items-center justify-between">
          <motion.div 
            className="h-8 w-1/4 bg-pink-300 dark:bg-pink-600 rounded-md"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          />
          <motion.div 
            className="h-8 w-1/4 bg-pink-400 dark:bg-pink-500 rounded-md"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          />
        </div>
      </div>
    </div>
  )
}

// Blockchain Animation
export const BlockchainAnimation = () => {
  const blockCount = 4
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex">
        {Array.from({ length: blockCount }).map((_, index) => (
          <React.Fragment key={`block-${index}`}>
            <motion.div
              className="w-12 h-12 bg-blue-100 dark:bg-blue-900 border-2 border-blue-500 dark:border-blue-700 rounded-md flex items-center justify-center text-xs font-mono"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {index + 1}
            </motion.div>
            
            {index < blockCount - 1 && (
              <motion.div 
                className="w-4 h-0.5 bg-blue-500 self-center mx-1"
                initial={{ width: 0 }}
                animate={{ width: 16 }}
                transition={{ delay: index * 0.2 + 0.1, duration: 0.3 }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

// Mobile App Animation
export const MobileAppAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        className="w-24 h-40 bg-white dark:bg-gray-800 rounded-xl border-2 border-cyan-500 dark:border-cyan-700 overflow-hidden shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <motion.div 
          className="h-6 bg-cyan-500 dark:bg-cyan-700 w-full"
          initial={{ height: 0 }}
          animate={{ height: 24 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        />
        
        {/* Content */}
        <div className="p-2">
          <motion.div 
            className="h-3 bg-gray-200 dark:bg-gray-600 rounded-full mb-2 w-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.3, delay: 0.3 }}
          />
          
          <motion.div 
            className="h-3 bg-gray-200 dark:bg-gray-600 rounded-full mb-2 w-4/5"
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ duration: 0.3, delay: 0.4 }}
          />
          
          <motion.div 
            className="h-8 bg-gray-100 dark:bg-gray-700 rounded-md mb-2"
            initial={{ height: 0 }}
            animate={{ height: 32 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          />
          
          <motion.div 
            className="h-8 bg-gray-100 dark:bg-gray-700 rounded-md"
            initial={{ height: 0 }}
            animate={{ height: 32 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          />
        </div>
        
        {/* Footer */}
        <motion.div 
          className="absolute bottom-0 left-0 h-6 bg-cyan-50 dark:bg-cyan-900 w-full flex items-center justify-around p-1"
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
          <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
          <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
        </motion.div>
      </motion.div>
    </div>
  )
}

// Security Animation
export const SecurityAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        className="relative w-20 h-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Shield */}
        <motion.div
          className="absolute inset-0 bg-emerald-500 dark:bg-emerald-700 rounded-full p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-500 dark:text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        </motion.div>
        
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-emerald-500 dark:border-emerald-700"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </motion.div>
    </div>
  )
}

// API Animation
export const ApiAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-60 max-w-full">
        {/* Server */}
        <motion.div
          className="w-20 h-20 bg-amber-100 dark:bg-amber-900 border-2 border-amber-500 dark:border-amber-700 rounded-md flex items-center justify-center mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500 dark:text-amber-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
          </svg>
        </motion.div>
        
        {/* API Request */}
        <motion.div
          className="absolute left-0 top-10 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <motion.div
            className="h-0.5 bg-amber-500 w-0 mx-auto"
            animate={{ width: "100%" }}
            transition={{ delay: 0.8, duration: 0.5 }}
          />
          
          <div className="flex justify-between mt-2">
            <motion.div
              className="w-16 h-10 bg-amber-50 dark:bg-amber-800 border border-amber-500 dark:border-amber-600 rounded-md flex items-center justify-center text-xs"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.3 }}
            >
              GET
            </motion.div>
            
            <motion.div
              className="w-16 h-10 bg-amber-50 dark:bg-amber-800 border border-amber-500 dark:border-amber-600 rounded-md flex items-center justify-center text-xs"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.3 }}
            >
              POST
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// System Design Animation
export const SystemDesignAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-64 max-w-full">
        <div className="flex justify-between mb-4">
          <motion.div
            className="w-16 h-8 bg-teal-100 dark:bg-teal-900 border border-teal-500 dark:border-teal-700 rounded-md flex items-center justify-center text-xs"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Client
          </motion.div>
          
          <motion.div
            className="w-16 h-8 bg-teal-100 dark:bg-teal-900 border border-teal-500 dark:border-teal-700 rounded-md flex items-center justify-center text-xs"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Server
          </motion.div>
        </div>
        
        <motion.div
          className="w-full h-0.5 bg-teal-500 mb-4"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        
        <div className="flex justify-center mb-4">
          <motion.div
            className="w-20 h-10 bg-teal-200 dark:bg-teal-800 border border-teal-500 dark:border-teal-700 rounded-md flex items-center justify-center text-xs"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            API Layer
          </motion.div>
        </div>
        
        <motion.div
          className="w-full h-0.5 bg-teal-500 mb-4"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5, delay: 0.9 }}
        />
        
        <div className="flex justify-between">
          <motion.div
            className="w-16 h-8 bg-teal-100 dark:bg-teal-900 border border-teal-500 dark:border-teal-700 rounded-md flex items-center justify-center text-xs"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.2 }}
          >
            DB
          </motion.div>
          
          <motion.div
            className="w-16 h-8 bg-teal-100 dark:bg-teal-900 border border-teal-500 dark:border-teal-700 rounded-md flex items-center justify-center text-xs"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.3 }}
          >
            Cache
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// 3D Object Animation
export const ThreeDObjectAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        className="w-24 h-24 relative"
        animate={{ rotateY: 360 }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Cube faces */}
        <motion.div
          className="absolute inset-0 bg-orange-500 dark:bg-orange-700 opacity-80"
          style={{ 
            transform: "translateZ(12px)",
            width: "100%",
            height: "100%"
          }}
        />
        
        <motion.div
          className="absolute inset-0 bg-orange-400 dark:bg-orange-600 opacity-80"
          style={{ 
            transform: "rotateY(90deg) translateZ(12px)",
            width: "100%",
            height: "100%"
          }}
        />
        
        <motion.div
          className="absolute inset-0 bg-orange-300 dark:bg-orange-500 opacity-80"
          style={{ 
            transform: "rotateY(180deg) translateZ(12px)",
            width: "100%",
            height: "100%"
          }}
        />
        
        <motion.div
          className="absolute inset-0 bg-orange-200 dark:bg-orange-400 opacity-80"
          style={{ 
            transform: "rotateY(-90deg) translateZ(12px)",
            width: "100%",
            height: "100%"
          }}
        />
        
        <motion.div
          className="absolute inset-0 bg-orange-100 dark:bg-orange-300 opacity-80"
          style={{ 
            transform: "rotateX(90deg) translateZ(12px)",
            width: "100%",
            height: "100%"
          }}
        />
        
        <motion.div
          className="absolute inset-0 bg-orange-50 dark:bg-orange-200 opacity-80"
          style={{ 
            transform: "rotateX(-90deg) translateZ(12px)",
            width: "100%",
            height: "100%"
          }}
        />
      </motion.div>
    </div>
  )
}

// Cloud Animation
export const CloudAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-64 max-w-full">
        <motion.div
          className="w-24 h-16 bg-yellow-100 dark:bg-yellow-900 border-2 border-yellow-500 dark:border-yellow-700 rounded-full mx-auto mb-2 flex items-center justify-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500 dark:text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
          </svg>
        </motion.div>
        
        <motion.div className="flex justify-between px-4">
          <motion.div
            className="w-12 h-12 bg-yellow-50 dark:bg-yellow-800 rounded-md flex items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <span className="text-yellow-500 dark:text-yellow-400 text-xs font-bold">EC2</span>
          </motion.div>
          
          <motion.div
            className="w-12 h-12 bg-yellow-50 dark:bg-yellow-800 rounded-md flex items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            whileHover={{ y: -5 }}
          >
            <span className="text-yellow-500 dark:text-yellow-400 text-xs font-bold">S3</span>
          </motion.div>
          
          <motion.div
            className="w-12 h-12 bg-yellow-50 dark:bg-yellow-800 rounded-md flex items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            whileHover={{ y: -5 }}
          >
            <span className="text-yellow-500 dark:text-yellow-400 text-xs font-bold">λ</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

// Components Animation
export const ComponentsAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-64 max-w-full">
        <motion.div
          className="w-full h-10 bg-blue-100 dark:bg-blue-900 border border-blue-500 dark:border-blue-700 rounded-md mb-3 flex items-center justify-center"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-medium">Header</span>
        </motion.div>
        
        <div className="flex gap-3 mb-3">
          <motion.div
            className="w-1/3 h-16 bg-blue-50 dark:bg-blue-800 border border-blue-400 dark:border-blue-600 rounded-md flex items-center justify-center"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <span className="text-xs font-medium">Nav</span>
          </motion.div>
          
          <motion.div
            className="w-2/3 h-16 bg-blue-50 dark:bg-blue-800 border border-blue-400 dark:border-blue-600 rounded-md flex items-center justify-center"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <span className="text-xs font-medium">Content</span>
          </motion.div>
        </div>
        
        <motion.div
          className="w-full h-8 bg-blue-100 dark:bg-blue-900 border border-blue-500 dark:border-blue-700 rounded-md flex items-center justify-center"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className="text-xs font-medium">Footer</span>
        </motion.div>
      </div>
    </div>
  )
}

// Pipeline Animation
export const PipelineAnimation = () => {
  const steps = [
    "Code",
    "Build",
    "Test",
    "Deploy"
  ]
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex">
        {steps.map((step, index) => (
          <React.Fragment key={`step-${index}`}>
            <motion.div
              className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900 border-2 border-indigo-500 dark:border-indigo-700 rounded-md flex items-center justify-center text-xs font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {step}
            </motion.div>
            
            {index < steps.length - 1 && (
              <motion.div 
                className="w-4 h-0.5 bg-indigo-500 self-center mx-1"
                initial={{ width: 0 }}
                animate={{ width: 16 }}
                transition={{ delay: index * 0.2 + 0.2, duration: 0.3 }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

// Cloud Services Animation
export const CloudServicesAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-60 max-w-full">
        <motion.div
          className="w-20 h-20 bg-sky-100 dark:bg-sky-900 border-2 border-sky-500 dark:border-sky-700 rounded-full flex items-center justify-center mx-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-sky-500 dark:text-sky-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
          </svg>
        </motion.div>
        
        <motion.div
          className="absolute top-full left-1/2 transform -translate-x-1/2 w-full mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex justify-between">
            <motion.div
              className="w-16 h-16 bg-sky-50 dark:bg-sky-800 border border-sky-400 dark:border-sky-600 rounded-md flex items-center justify-center"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <span className="text-xs text-center">AWS</span>
            </motion.div>
            
            <motion.div
              className="w-16 h-16 bg-sky-50 dark:bg-sky-800 border border-sky-400 dark:border-sky-600 rounded-md flex items-center justify-center"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <span className="text-xs text-center">Azure</span>
            </motion.div>
            
            <motion.div
              className="w-16 h-16 bg-sky-50 dark:bg-sky-800 border border-sky-400 dark:border-sky-600 rounded-md flex items-center justify-center"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <span className="text-xs text-center">GCP</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Flowchart Animation
export const FlowchartAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-64 max-w-full">
        <motion.div
          className="w-24 h-10 bg-red-100 dark:bg-red-900 border border-red-500 dark:border-red-700 rounded-md flex items-center justify-center text-xs mx-auto mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Start
        </motion.div>
        
        <motion.div
          className="w-0.5 h-4 bg-red-500 mx-auto mb-2"
          initial={{ height: 0 }}
          animate={{ height: 16 }}
          transition={{ duration: 0.2, delay: 0.3 }}
        />
        
        <motion.div
          className="w-32 h-10 bg-red-50 dark:bg-red-800 border border-red-500 dark:border-red-700 rounded-md flex items-center justify-center text-xs mx-auto mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          Process Data
        </motion.div>
        
        <motion.div
          className="w-0.5 h-4 bg-red-500 mx-auto mb-2"
          initial={{ height: 0 }}
          animate={{ height: 16 }}
          transition={{ duration: 0.2, delay: 0.8 }}
        />
        
        <div className="flex justify-center mb-2">
          <motion.div
            className="w-32 h-10 bg-red-50 dark:bg-red-800 border border-red-500 dark:border-red-700 rounded-md flex items-center justify-center text-xs transform rotate-45"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 45 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            Decision
          </motion.div>
        </div>
        
        <motion.div
          className="w-0.5 h-4 bg-red-500 mx-auto mb-2"
          initial={{ height: 0 }}
          animate={{ height: 16 }}
          transition={{ duration: 0.2, delay: 1.5 }}
        />
        
        <motion.div
          className="w-24 h-10 bg-red-100 dark:bg-red-900 border border-red-500 dark:border-red-700 rounded-md flex items-center justify-center text-xs mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.7 }}
        >
          End
        </motion.div>
      </div>
    </div>
  )
}

// Checklist Animation
export const ChecklistAnimation = () => {
  const items = [
    "Resume", 
    "GitHub", 
    "LeetCode",
    "Projects"
  ]
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-48 bg-green-50 dark:bg-green-900/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-4">
        <motion.h3 
          className="text-sm font-bold text-green-600 dark:text-green-400 mb-2 pb-2 border-b border-green-200 dark:border-green-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Internship Checklist
        </motion.h3>
        
        <ul className="space-y-2">
          {items.map((item, index) => (
            <motion.li 
              key={index}
              className="flex items-center text-sm text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + (index * 0.2) }}
            >
              <motion.div 
                className="w-4 h-4 rounded-full border border-green-500 dark:border-green-400 mr-2 flex items-center justify-center"
                initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                animate={{ backgroundColor: "rgb(34, 197, 94)" }}
                transition={{ delay: 0.5 + (index * 0.3), duration: 0.2 }}
              >
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-3 w-3 text-white" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + (index * 0.3) + 0.1, duration: 0.2 }}
                >
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </motion.svg>
              </motion.div>
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// Collaboration Animation
export const CollaborationAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-64 max-w-full h-full flex items-center justify-center">
        <div className="flex space-x-6">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-full flex items-center justify-center relative z-10"
              initial={{ x: index * 40 - 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-violet-500 dark:text-violet-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              
              <motion.div 
                className="absolute -top-2 -right-2 w-4 h-4 bg-violet-500 rounded-full flex items-center justify-center text-white text-[8px] font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
              >
                {index + 1}
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Connection lines */}
        <motion.svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 100 100" 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.line 
            x1="30" 
            y1="50" 
            x2="50" 
            y2="50" 
            stroke="#8b5cf6" 
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          />
          <motion.line 
            x1="50" 
            y1="50" 
            x2="70" 
            y2="50" 
            stroke="#8b5cf6" 
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          />
        </motion.svg>
        
        {/* Project bubble */}
        <motion.div
          className="absolute bottom-0 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="w-full p-2 bg-violet-50 dark:bg-violet-900/30 border border-violet-300 dark:border-violet-700 rounded-lg text-center">
            <motion.div 
              className="text-xs font-medium text-violet-600 dark:text-violet-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.2 }}
            >
              Hackathon Project
            </motion.div>
            
            <motion.div 
              className="w-full h-1 bg-gradient-to-r from-violet-300 to-violet-500 rounded-full mt-1"
              initial={{ width: "10%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, delay: 1.4, repeat: Infinity, repeatDelay: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Agentic AI Animation
export const AgenticAIAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-20 h-20">
        {/* Central brain/core */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Brain icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.91 1.47 2.2 2.59 3.68 3.16.74.29 1.52.44 2.31.44h1.2c.79 0 1.57-.15 2.31-.44 1.48-.57 2.77-1.69 3.68-3.16C20.5 12.37 21 10.74 21 9c0-3.87-3.13-7-7-7zm-3 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
            <path d="M12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </motion.div>
        
        {/* Orbiting decision nodes */}
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={`orbit-${index}`}
            className="absolute w-3 h-3 bg-pink-400 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: '0 0',
            }}
            animate={{
              rotate: 360,
              x: Math.cos((index * Math.PI) / 2) * 35 - 6,
              y: Math.sin((index * Math.PI) / 2) * 35 - 6,
            }}
            transition={{
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.2
              },
              x: {
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.2
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.2
              }
            }}
          />
        ))}
        
        {/* Pulsing reasoning waves */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-pink-400"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.8, 0.2, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-purple-400"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 0.1, 0.6]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        {/* Decision pathways */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80">
          {[0, 1, 2].map((index) => (
            <motion.path
              key={`path-${index}`}
              d={`M40,40 Q${30 + index * 10},${20 + index * 5} ${50 + index * 5},${15 + index * 10}`}
              stroke="#ec4899"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  )
}