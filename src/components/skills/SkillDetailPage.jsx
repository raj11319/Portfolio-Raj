import React, { Suspense, useRef, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Box, Sphere, Torus, Cone, Cylinder } from '@react-three/drei'
import { HiArrowLeft, HiExternalLink, HiCode, HiAcademicCap, HiLightBulb } from 'react-icons/hi'
import { skillsData } from './skillsData'

// 3D Models for different skills
const AIMLModel = () => {
  const meshRef = useRef()
  const sphereRefs = useRef([])
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
    sphereRefs.current.forEach((sphere, index) => {
      if (sphere) {
        sphere.position.x = Math.sin(state.clock.elapsedTime + index) * 2
        sphere.position.z = Math.cos(state.clock.elapsedTime + index) * 2
      }
    })
  })

  return (
    <group ref={meshRef}>
      {/* Central brain/core */}
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#3b82f6" wireframe />
      </Sphere>
      
      {/* Neural network nodes */}
      {Array.from({ length: 8 }).map((_, index) => (
        <Sphere
          key={index}
          ref={(el) => (sphereRefs.current[index] = el)}
          args={[0.2, 16, 16]}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial color="#8b5cf6" />
        </Sphere>
      ))}
      
      {/* Connecting lines effect */}
      <Torus args={[2, 0.1, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#60a5fa" transparent opacity={0.6} />
      </Torus>
    </group>
  )
}

const WebDevModel = () => {
  const groupRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3
    }
  })

  return (
    <group ref={groupRef}>
      {/* Monitor/Screen */}
      <Box args={[3, 2, 0.2]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#1f2937" />
      </Box>
      
      {/* Screen content */}
      <Box args={[2.8, 1.8, 0.1]} position={[0, 0.5, 0.11]}>
        <meshStandardMaterial color="#111827" />
      </Box>
      
      {/* Code blocks */}
      <Box args={[0.8, 0.2, 0.05]} position={[-0.8, 0.8, 0.15]}>
        <meshStandardMaterial color="#3b82f6" />
      </Box>
      <Box args={[1.2, 0.2, 0.05]} position={[0.2, 0.5, 0.15]}>
        <meshStandardMaterial color="#8b5cf6" />
      </Box>
      <Box args={[0.6, 0.2, 0.05]} position={[-0.6, 0.2, 0.15]}>
        <meshStandardMaterial color="#f59e0b" />
      </Box>
      
      {/* Stand */}
      <Cylinder args={[0.1, 0.1, 1]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#6b7280" />
      </Cylinder>
      
      {/* Base */}
      <Cylinder args={[0.8, 0.8, 0.1]} position={[0, -1, 0]}>
        <meshStandardMaterial color="#4b5563" />
      </Cylinder>
    </group>
  )
}

const DataScienceModel = () => {
  const chartRefs = useRef([])
  
  useFrame((state) => {
    chartRefs.current.forEach((chart, index) => {
      if (chart) {
        const height = Math.abs(Math.sin(state.clock.elapsedTime + index)) * 2 + 0.5
        chart.scale.y = height
      }
    })
  })

  return (
    <group>
      {/* Chart bars */}
      {Array.from({ length: 6 }).map((_, index) => (
        <Box
          key={index}
          ref={(el) => (chartRefs.current[index] = el)}
          args={[0.3, 1, 0.3]}
          position={[index * 0.5 - 1.25, 0, 0]}
        >
          <meshStandardMaterial color={`hsl(${index * 60}, 70%, 60%)`} />
        </Box>
      ))}
      
      {/* Base platform */}
      <Box args={[4, 0.1, 2]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#374151" />
      </Box>
      
      {/* Floating data points */}
      {Array.from({ length: 10 }).map((_, index) => (
        <Sphere
          key={index}
          args={[0.05, 8, 8]}
          position={[
            (Math.random() - 0.5) * 4,
            Math.random() * 3 + 1,
            (Math.random() - 0.5) * 2
          ]}
        >
          <meshStandardMaterial color="#10b981" />
        </Sphere>
      ))}
    </group>
  )
}

const Model3DComponent = ({ skillType }) => {
  const getModel = () => {
    switch (skillType) {
      case 'AI/ML':
      case 'Generative AI':
      case 'Agentic AI':
        return <AIMLModel />
      case 'Web Development':
      case 'UI/UX Design':
      case 'API Development':
        return <WebDevModel />
      case 'Data Science':
      case 'System Design':
        return <DataScienceModel />
      default:
        return <AIMLModel />
    }
  }

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      <Suspense fallback={null}>
        {getModel()}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Suspense>
    </Canvas>
  )
}

const SkillDetailPage = () => {
  const { skillId } = useParams()
  const navigate = useNavigate()
  
  // Find skill by title (converted to URL-friendly format)
  const skill = skillsData.find(s => 
    s.title.toLowerCase().replace(/[^a-z0-9]/g, '-') === skillId
  )

  useEffect(() => {
    if (!skill) {
      navigate('/')
    }
  }, [skill, navigate])

  // Handle back navigation
  const handleBackNavigation = () => {
    navigate('/')
    // Small delay to ensure navigation completes, then scroll to skills
    setTimeout(() => {
      const skillsSection = document.getElementById('skills')
      if (skillsSection) {
        const headerHeight = 80
        const elementPosition = skillsSection.offsetTop - headerHeight
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  if (!skill) {
    return null
  }

  const pageVariants = {
    initial: { 
      opacity: 0,
      scale: 0.95,
      y: 20
    },
    animate: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const skillDetails = {
    'AI/ML': {
      fullDescription: "Artificial Intelligence and Machine Learning represent the cutting edge of technology, enabling computers to learn and make decisions like humans. I specialize in building intelligent systems that can recognize patterns, make predictions, and automate complex tasks.",
      projects: [
        "Predictive Analytics Dashboard",
        "Computer Vision Image Classifier", 
        "Natural Language Processing Chatbot",
        "Recommendation System"
      ],
      learningPath: [
        "Python Programming Fundamentals",
        "Statistics and Linear Algebra",
        "Machine Learning Algorithms",
        "Deep Learning with TensorFlow",
        "Model Deployment and MLOps"
      ],
      resources: [
        { name: "TensorFlow Documentation", url: "https://tensorflow.org" },
        { name: "Coursera ML Course", url: "https://coursera.org" },
        { name: "Kaggle Competitions", url: "https://kaggle.com" }
      ]
    },
    'Data Science': {
      fullDescription: "Data Science is the art of extracting meaningful insights from raw data. I transform complex datasets into actionable business intelligence through statistical analysis, visualization, and predictive modeling.",
      projects: [
        "Sales Forecasting Model",
        "Customer Segmentation Analysis",
        "Real-time Analytics Dashboard",
        "A/B Testing Framework"
      ],
      learningPath: [
        "Statistics and Probability",
        "Python/R Programming",
        "Data Visualization",
        "SQL and Database Management",
        "Big Data Technologies"
      ],
      resources: [
        { name: "Pandas Documentation", url: "https://pandas.pydata.org" },
        { name: "Matplotlib Gallery", url: "https://matplotlib.org" },
        { name: "Seaborn Tutorials", url: "https://seaborn.pydata.org" }
      ]
    },
    'Web Development': {
      fullDescription: "Modern web development involves creating responsive, interactive, and performant web applications. I build full-stack solutions using the latest technologies and best practices.",
      projects: [
        "E-commerce Platform",
        "Social Media Dashboard",
        "Real-time Chat Application",
        "Portfolio Website with CMS"
      ],
      learningPath: [
        "HTML, CSS, JavaScript Fundamentals",
        "React.js and Modern Frameworks",
        "Backend Development with Node.js",
        "Database Design and Management",
        "DevOps and Deployment"
      ],
      resources: [
        { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
        { name: "React Documentation", url: "https://react.dev" },
        { name: "Node.js Guides", url: "https://nodejs.org" }
      ]
    }
  }

  const currentSkillDetails = skillDetails[skill.title] || skillDetails['AI/ML']

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="fixed inset-0 -z-10">
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-br ${skill.bgColor} opacity-5`}
            animate={{
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Animated particles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Header */}
        <motion.header 
          variants={itemVariants}
          className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/50"
        >
          <div className="container-custom py-4">
            <div className="flex items-center justify-between">
              <button 
                onClick={handleBackNavigation}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <motion.div
                  whileHover={{ x: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <HiArrowLeft className="text-xl" />
                </motion.div>
                <span className="font-medium">Back to Skills</span>
              </button>
              
              <motion.h1 
                className={`text-xl font-bold ${skill.iconColor} ${skill.darkIconColor}`}
                whileHover={{ scale: 1.05 }}
              >
                {skill.title}
              </motion.h1>
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="pt-24 pb-16">
          <div className="container-custom">
            {/* Hero Section with 3D Model */}
            <motion.section variants={itemVariants} className="mb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.h2 
                    className="text-5xl md:text-6xl font-bold text-white mb-6"
                    variants={itemVariants}
                  >
                    {skill.title}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-xl text-gray-300 mb-8 leading-relaxed"
                    variants={itemVariants}
                  >
                    {currentSkillDetails.fullDescription}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-3"
                    variants={itemVariants}
                  >
                    {skill.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className={`px-4 py-2 bg-gradient-to-r ${skill.bgColor} text-white rounded-full text-sm font-medium shadow-lg`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
                
                {/* 3D Model Container */}
                <motion.div 
                  className="h-96 rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-lg border border-gray-700/50"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Model3DComponent skillType={skill.title} />
                </motion.div>
              </div>
            </motion.section>

            {/* Content Sections */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Projects Section */}
              <motion.section 
                variants={itemVariants}
                className="card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <HiCode className={`text-2xl ${skill.iconColor} ${skill.darkIconColor}`} />
                  <h3 className="text-2xl font-bold text-white">Projects</h3>
                </div>
                
                <div className="space-y-4">
                  {currentSkillDetails.projects.map((project, index) => (
                    <motion.div
                      key={index}
                      className="p-4 bg-gray-700/50 rounded-lg border border-gray-600/50 hover:border-gray-500/50 transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <h4 className="font-semibold text-white mb-2">{project}</h4>
                      <p className="text-gray-400 text-sm">
                        A comprehensive project showcasing {skill.title.toLowerCase()} capabilities
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Learning Path Section */}
              <motion.section 
                variants={itemVariants}
                className="card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <HiAcademicCap className={`text-2xl ${skill.iconColor} ${skill.darkIconColor}`} />
                  <h3 className="text-2xl font-bold text-white">Learning Path</h3>
                </div>
                
                <div className="space-y-3">
                  {currentSkillDetails.learningPath.map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${skill.bgColor} flex items-center justify-center text-white text-sm font-bold`}>
                        {index + 1}
                      </div>
                      <span className="text-gray-300">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Resources Section */}
              <motion.section 
                variants={itemVariants}
                className="card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <HiLightBulb className={`text-2xl ${skill.iconColor} ${skill.darkIconColor}`} />
                  <h3 className="text-2xl font-bold text-white">Resources</h3>
                </div>
                
                <div className="space-y-4">
                  {currentSkillDetails.resources.map((resource, index) => (
                    <motion.a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-gray-700/50 rounded-lg border border-gray-600/50 hover:border-gray-500/50 transition-colors group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                          {resource.name}
                        </span>
                        <HiExternalLink className="text-gray-400 group-hover:text-primary-400 transition-colors" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Call to Action */}
            <motion.section 
              variants={itemVariants}
              className="mt-16 text-center"
            >
              <div className="card max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Interested in collaborating?
                </h3>
                <p className="text-gray-300 mb-8">
                  Let's discuss how we can work together on {skill.title.toLowerCase()} projects
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => {
                      navigate('/')
                      setTimeout(() => {
                        const contactSection = document.getElementById('contact')
                        if (contactSection) {
                          const headerHeight = 80
                          const elementPosition = contactSection.offsetTop - headerHeight
                          
                          window.scrollTo({
                            top: elementPosition,
                            behavior: 'smooth'
                          })
                        }
                      }, 100)
                    }}
                    className="btn-primary"
                  >
                    Get In Touch
                  </button>
                  <button 
                    onClick={() => {
                      navigate('/')
                      setTimeout(() => {
                        const projectsSection = document.getElementById('projects')
                        if (projectsSection) {
                          const headerHeight = 80
                          const elementPosition = projectsSection.offsetTop - headerHeight
                          
                          window.scrollTo({
                            top: elementPosition,
                            behavior: 'smooth'
                          })
                        }
                      }, 100)
                    }}
                    className="btn-professional"
                  >
                    View Projects
                  </button>
                </div>
              </div>
            </motion.section>
          </div>
        </main>
      </motion.div>
    </AnimatePresence>
  )
}

export default SkillDetailPage