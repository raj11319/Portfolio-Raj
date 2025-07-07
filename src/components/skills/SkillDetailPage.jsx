import React, { Suspense, useRef, useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Box, Sphere, Torus, Cone, Cylinder, Octahedron, Icosahedron } from '@react-three/drei'
import { HiArrowLeft, HiExternalLink, HiCode, HiAcademicCap, HiLightBulb } from 'react-icons/hi'
import { skillsData } from './skillsData'
import * as THREE from 'three'

// Enhanced 3D Models with more movement and visual appeal

// AI/ML Model - Neural Network with flowing connections
const AIMLModel = () => {
  const groupRef = useRef()
  const nodesRef = useRef([])
  const connectionsRef = useRef([])
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.3
    }
    
    // Animate neural nodes
    nodesRef.current.forEach((node, index) => {
      if (node) {
        node.position.y = Math.sin(time + index * 0.5) * 0.5
        node.scale.setScalar(1 + Math.sin(time * 2 + index) * 0.2)
      }
    })
    
    // Animate connections
    connectionsRef.current.forEach((connection, index) => {
      if (connection) {
        connection.material.opacity = 0.3 + Math.sin(time * 3 + index) * 0.3
      }
    })
  })

  return (
    <group ref={groupRef}>
      {/* Central brain core */}
      <Icosahedron args={[1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#3b82f6" wireframe transparent opacity={0.8} />
      </Icosahedron>
      
      {/* Neural network layers */}
      {Array.from({ length: 12 }).map((_, index) => {
        const angle = (index / 12) * Math.PI * 2
        const radius = 2.5
        return (
          <Sphere
            key={index}
            ref={(el) => (nodesRef.current[index] = el)}
            args={[0.15, 16, 16]}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 0.5) * 0.5,
              Math.sin(angle) * radius
            ]}
          >
            <meshStandardMaterial color="#8b5cf6" />
          </Sphere>
        )
      })}
      
      {/* Flowing data streams */}
      <Torus args={[2, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#60a5fa" transparent opacity={0.6} />
      </Torus>
      <Torus args={[1.5, 0.03, 16, 100]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial color="#a78bfa" transparent opacity={0.4} />
      </Torus>
    </group>
  )
}

// Data Science Model - Dynamic charts and data visualization
const DataScienceModel = () => {
  const chartRefs = useRef([])
  const particlesRef = useRef([])
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    // Animate chart bars
    chartRefs.current.forEach((chart, index) => {
      if (chart) {
        const height = Math.abs(Math.sin(time * 2 + index * 0.5)) * 2 + 0.5
        chart.scale.y = height
        chart.material.color.setHSL((time * 0.1 + index * 0.1) % 1, 0.7, 0.6)
      }
    })
    
    // Animate data particles
    particlesRef.current.forEach((particle, index) => {
      if (particle) {
        particle.position.y = Math.sin(time + index * 0.3) * 2 + 1
        particle.rotation.x = time + index
        particle.rotation.z = time * 0.5 + index
      }
    })
  })

  return (
    <group>
      {/* Animated chart bars */}
      {Array.from({ length: 8 }).map((_, index) => (
        <Box
          key={index}
          ref={(el) => (chartRefs.current[index] = el)}
          args={[0.3, 1, 0.3]}
          position={[index * 0.5 - 1.75, 0, 0]}
        >
          <meshStandardMaterial color={`hsl(${index * 45}, 70%, 60%)`} />
        </Box>
      ))}
      
      {/* Floating data particles */}
      {Array.from({ length: 20 }).map((_, index) => (
        <Octahedron
          key={index}
          ref={(el) => (particlesRef.current[index] = el)}
          args={[0.08]}
          position={[
            (Math.random() - 0.5) * 6,
            Math.random() * 4 + 1,
            (Math.random() - 0.5) * 3
          ]}
        >
          <meshStandardMaterial color="#10b981" transparent opacity={0.8} />
        </Octahedron>
      ))}
      
      {/* Data flow rings */}
      <Torus args={[3, 0.1, 8, 50]} rotation={[Math.PI / 2, 0, 0]} position={[0, 2, 0]}>
        <meshStandardMaterial color="#34d399" transparent opacity={0.3} />
      </Torus>
    </group>
  )
}

// Web Development Model - Interactive website components
const WebDevModel = () => {
  const groupRef = useRef()
  const elementsRef = useRef([])
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.3
    }
    
    // Animate UI elements
    elementsRef.current.forEach((element, index) => {
      if (element) {
        element.position.z = Math.sin(time * 2 + index) * 0.1
        element.material.emissive.setHSL((time * 0.1 + index * 0.2) % 1, 0.3, 0.1)
      }
    })
  })

  return (
    <group ref={groupRef}>
      {/* Monitor frame */}
      <Box args={[4, 2.5, 0.2]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#1f2937" />
      </Box>
      
      {/* Screen */}
      <Box args={[3.8, 2.3, 0.1]} position={[0, 0.5, 0.11]}>
        <meshStandardMaterial color="#111827" />
      </Box>
      
      {/* Animated UI components */}
      <Box ref={(el) => (elementsRef.current[0] = el)} args={[1.2, 0.3, 0.05]} position={[-1, 1.2, 0.15]}>
        <meshStandardMaterial color="#3b82f6" />
      </Box>
      <Box ref={(el) => (elementsRef.current[1] = el)} args={[1.8, 0.3, 0.05]} position={[0.3, 0.8, 0.15]}>
        <meshStandardMaterial color="#8b5cf6" />
      </Box>
      <Box ref={(el) => (elementsRef.current[2] = el)} args={[1, 0.3, 0.05]} position={[-0.8, 0.4, 0.15]}>
        <meshStandardMaterial color="#f59e0b" />
      </Box>
      <Box ref={(el) => (elementsRef.current[3] = el)} args={[1.5, 0.3, 0.05]} position={[0.5, 0, 0.15]}>
        <meshStandardMaterial color="#10b981" />
      </Box>
      
      {/* Floating code symbols */}
      {Array.from({ length: 6 }).map((_, index) => (
        <Box
          key={index}
          args={[0.1, 0.1, 0.1]}
          position={[
            Math.sin(index) * 2,
            Math.cos(index) * 1.5 + 0.5,
            0.3
          ]}
        >
          <meshStandardMaterial color="#60a5fa" />
        </Box>
      ))}
      
      {/* Stand */}
      <Cylinder args={[0.1, 0.1, 1]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#6b7280" />
      </Cylinder>
    </group>
  )
}

// Blockchain Model - Connected blocks with crypto elements
const BlockchainModel = () => {
  const blocksRef = useRef([])
  const chainsRef = useRef([])
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    // Animate blocks
    blocksRef.current.forEach((block, index) => {
      if (block) {
        block.rotation.y = time * 0.5 + index * 0.3
        block.position.y = Math.sin(time + index * 0.5) * 0.2
      }
    })
    
    // Animate connection chains
    chainsRef.current.forEach((chain, index) => {
      if (chain) {
        chain.material.opacity = 0.5 + Math.sin(time * 3 + index) * 0.3
      }
    })
  })

  return (
    <group>
      {/* Blockchain blocks */}
      {Array.from({ length: 5 }).map((_, index) => (
        <Box
          key={index}
          ref={(el) => (blocksRef.current[index] = el)}
          args={[0.8, 0.8, 0.8]}
          position={[index * 1.2 - 2.4, 0, 0]}
        >
          <meshStandardMaterial 
            color={`hsl(${200 + index * 20}, 70%, 60%)`}
            transparent
            opacity={0.8}
          />
        </Box>
      ))}
      
      {/* Connection chains */}
      {Array.from({ length: 4 }).map((_, index) => (
        <Cylinder
          key={index}
          ref={(el) => (chainsRef.current[index] = el)}
          args={[0.05, 0.05, 0.4]}
          position={[index * 1.2 - 1.8, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <meshStandardMaterial color="#60a5fa" transparent />
        </Cylinder>
      ))}
      
      {/* Crypto symbols floating around */}
      {Array.from({ length: 8 }).map((_, index) => (
        <Octahedron
          key={index}
          args={[0.1]}
          position={[
            Math.cos(index * 0.785) * 3,
            Math.sin(index * 0.785) * 2,
            Math.sin(index * 0.5) * 1.5
          ]}
        >
          <meshStandardMaterial color="#f59e0b" />
        </Octahedron>
      ))}
    </group>
  )
}

// Mobile App Model - Phone with animated interface
const MobileAppModel = () => {
  const phoneRef = useRef()
  const elementsRef = useRef([])
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (phoneRef.current) {
      phoneRef.current.rotation.y = Math.sin(time * 0.5) * 0.2
      phoneRef.current.position.y = Math.sin(time) * 0.1
    }
    
    // Animate UI elements
    elementsRef.current.forEach((element, index) => {
      if (element) {
        element.scale.x = 1 + Math.sin(time * 2 + index) * 0.1
        element.material.color.setHSL((time * 0.1 + index * 0.3) % 1, 0.7, 0.6)
      }
    })
  })

  return (
    <group ref={phoneRef}>
      {/* Phone body */}
      <Box args={[1.2, 2.4, 0.2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1f2937" />
      </Box>
      
      {/* Screen */}
      <Box args={[1, 2, 0.05]} position={[0, 0, 0.11]}>
        <meshStandardMaterial color="#111827" />
      </Box>
      
      {/* Animated app icons */}
      {Array.from({ length: 6 }).map((_, index) => (
        <Box
          key={index}
          ref={(el) => (elementsRef.current[index] = el)}
          args={[0.2, 0.2, 0.02]}
          position={[
            (index % 3) * 0.3 - 0.3,
            Math.floor(index / 3) * 0.3 + 0.3,
            0.13
          ]}
        >
          <meshStandardMaterial color={`hsl(${index * 60}, 70%, 60%)`} />
        </Box>
      ))}
      
      {/* Notification bubbles */}
      {Array.from({ length: 4 }).map((_, index) => (
        <Sphere
          key={index}
          args={[0.05]}
          position={[
            Math.sin(index * 1.5) * 1.5,
            Math.cos(index * 1.5) * 1.5,
            0.5
          ]}
        >
          <meshStandardMaterial color="#ef4444" />
        </Sphere>
      ))}
    </group>
  )
}

// Cybersecurity Model - Shield with security elements
const CybersecurityModel = () => {
  const shieldRef = useRef()
  const particlesRef = useRef([])
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (shieldRef.current) {
      shieldRef.current.rotation.y = time * 0.3
      shieldRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1)
    }
    
    // Animate security particles
    particlesRef.current.forEach((particle, index) => {
      if (particle) {
        const radius = 2 + Math.sin(time + index) * 0.5
        particle.position.x = Math.cos(time + index * 0.5) * radius
        particle.position.z = Math.sin(time + index * 0.5) * radius
        particle.position.y = Math.sin(time * 2 + index) * 0.5
      }
    })
  })

  return (
    <group>
      {/* Central shield */}
      <Octahedron ref={shieldRef} args={[1.2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#10b981" wireframe transparent opacity={0.8} />
      </Octahedron>
      
      {/* Security barrier rings */}
      <Torus args={[2, 0.1, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#34d399" transparent opacity={0.4} />
      </Torus>
      <Torus args={[2.5, 0.05, 16, 100]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial color="#6ee7b7" transparent opacity={0.3} />
      </Torus>
      
      {/* Floating security nodes */}
      {Array.from({ length: 8 }).map((_, index) => (
        <Icosahedron
          key={index}
          ref={(el) => (particlesRef.current[index] = el)}
          args={[0.1]}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial color="#059669" />
        </Icosahedron>
      ))}
    </group>
  )
}

// API Development Model - Data flow visualization
const APIModel = () => {
  const serverRef = useRef()
  const dataFlowRef = useRef([])
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (serverRef.current) {
      serverRef.current.rotation.y = time * 0.2
    }
    
    // Animate data packets
    dataFlowRef.current.forEach((packet, index) => {
      if (packet) {
        const progress = (time + index * 0.5) % 4
        packet.position.x = Math.sin(progress) * 2
        packet.position.y = Math.cos(progress) * 1.5
        packet.scale.setScalar(0.5 + Math.sin(time * 3 + index) * 0.3)
      }
    })
  })

  return (
    <group>
      {/* Central server */}
      <Box ref={serverRef} args={[1, 1.5, 0.5]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#f59e0b" />
      </Box>
      
      {/* API endpoints */}
      {Array.from({ length: 6 }).map((_, index) => {
        const angle = (index / 6) * Math.PI * 2
        return (
          <Box
            key={index}
            args={[0.3, 0.3, 0.3]}
            position={[
              Math.cos(angle) * 2.5,
              Math.sin(angle) * 1.5,
              0
            ]}
          >
            <meshStandardMaterial color="#fb923c" />
          </Box>
        )
      })}
      
      {/* Data flow particles */}
      {Array.from({ length: 12 }).map((_, index) => (
        <Sphere
          key={index}
          ref={(el) => (dataFlowRef.current[index] = el)}
          args={[0.05]}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial color="#fbbf24" />
        </Sphere>
      ))}
    </group>
  )
}

// System Design Model - Architecture visualization
const SystemDesignModel = () => {
  const componentsRef = useRef([])
  const connectionsRef = useRef([])
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    // Animate system components
    componentsRef.current.forEach((component, index) => {
      if (component) {
        component.position.y = Math.sin(time + index * 0.7) * 0.3
        component.rotation.y = time * 0.3 + index
      }
    })
    
    // Animate data connections
    connectionsRef.current.forEach((connection, index) => {
      if (connection) {
        connection.material.opacity = 0.3 + Math.sin(time * 2 + index) * 0.3
      }
    })
  })

  return (
    <group>
      {/* System components */}
      {[
        { pos: [0, 1, 0], color: '#14b8a6' },
        { pos: [-2, 0, 0], color: '#0891b2' },
        { pos: [2, 0, 0], color: '#0284c7' },
        { pos: [0, -1, 0], color: '#0369a1' }
      ].map((comp, index) => (
        <Box
          key={index}
          ref={(el) => (componentsRef.current[index] = el)}
          args={[0.8, 0.8, 0.8]}
          position={comp.pos}
        >
          <meshStandardMaterial color={comp.color} />
        </Box>
      ))}
      
      {/* Connection lines */}
      {Array.from({ length: 6 }).map((_, index) => (
        <Cylinder
          key={index}
          ref={(el) => (connectionsRef.current[index] = el)}
          args={[0.02, 0.02, 1.5]}
          position={[0, 0, 0]}
          rotation={[0, 0, index * Math.PI / 3]}
        >
          <meshStandardMaterial color="#06b6d4" transparent />
        </Cylinder>
      ))}
    </group>
  )
}

// Default model for other skills
const DefaultModel = ({ color = '#3b82f6' }) => {
  const groupRef = useRef()
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (groupRef.current) {
      groupRef.current.rotation.x = time * 0.3
      groupRef.current.rotation.y = time * 0.5
      groupRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1)
    }
  })

  return (
    <group ref={groupRef}>
      <Icosahedron args={[1]} position={[0, 0, 0]}>
        <meshStandardMaterial color={color} wireframe />
      </Icosahedron>
      <Torus args={[1.5, 0.1, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color={color} transparent opacity={0.6} />
      </Torus>
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
      case 'Data Science':
        return <DataScienceModel />
      case 'Web Development':
      case 'UI/UX Design':
        return <WebDevModel />
      case 'Blockchain':
        return <BlockchainModel />
      case 'App Development':
        return <MobileAppModel />
      case 'Cybersecurity':
        return <CybersecurityModel />
      case 'API Development':
        return <APIModel />
      case 'System Design':
        return <SystemDesignModel />
      default:
        return <DefaultModel />
    }
  }

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[0, 10, -10]} intensity={0.3} color="#f59e0b" />
      <Suspense fallback={null}>
        {getModel()}
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Suspense>
    </Canvas>
  )
}

const SkillDetailPage = () => {
  const { skillId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const [scrollPosition, setScrollPosition] = useState(0)
  
  // Store scroll position when component mounts
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('portfolioScrollPosition')
    if (savedScrollPosition) {
      setScrollPosition(parseInt(savedScrollPosition))
    }
  }, [])
  
  // Find skill by title (converted to URL-friendly format)
  const skill = skillsData.find(s => 
    s.title.toLowerCase().replace(/[^a-z0-9]/g, '-') === skillId
  )

  useEffect(() => {
    if (!skill) {
      navigate('/')
    }
  }, [skill, navigate])

  // Handle back navigation with scroll restoration
  const handleBackNavigation = () => {
    navigate('/')
    // Restore scroll position after navigation
    setTimeout(() => {
      if (scrollPosition > 0) {
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        })
      } else {
        const skillsSection = document.getElementById('skills')
        if (skillsSection) {
          const headerHeight = 80
          const elementPosition = skillsSection.offsetTop - headerHeight
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }
      }
      // Clear stored position
      sessionStorage.removeItem('portfolioScrollPosition')
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
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: {
        duration: 0.4,
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
        duration: 0.5,
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