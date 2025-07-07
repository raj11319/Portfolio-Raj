import React, { Suspense, useRef, useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Box, Sphere, Torus, Cone, Cylinder, Octahedron, Icosahedron, Tetrahedron, Dodecahedron } from '@react-three/drei'
import { HiArrowLeft, HiExternalLink, HiCode, HiAcademicCap, HiLightBulb } from 'react-icons/hi'
import { skillsData } from './skillsData'
import * as THREE from 'three'

// AI/ML Model - Brain with Neural Networks
const AIMLModel = () => {
  const groupRef = useRef()
  const neuronsRef = useRef([])
  const synapseRef = useRef([])
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.2
    }
    
    // Animate neurons with brain-like pulsing
    neuronsRef.current.forEach((neuron, index) => {
      if (neuron) {
        const pulse = Math.sin(time * 3 + index * 0.5) * 0.3 + 1
        neuron.scale.setScalar(pulse)
        neuron.material.emissive.setHSL(0.6, 0.5, Math.sin(time + index) * 0.2 + 0.1)
      }
    })
    
    // Animate synaptic connections
    synapseRef.current.forEach((synapse, index) => {
      if (synapse) {
        synapse.material.opacity = 0.2 + Math.sin(time * 4 + index) * 0.3
      }
    })
  })

  return (
    <group ref={groupRef}>
      {/* Central brain core */}
      <Icosahedron args={[0.8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#3b82f6" wireframe transparent opacity={0.7} />
      </Icosahedron>
      
      {/* Neural layers in brain-like formation */}
      {Array.from({ length: 16 }).map((_, index) => {
        const layer = Math.floor(index / 4)
        const neuronInLayer = index % 4
        const angle = (neuronInLayer / 4) * Math.PI * 2
        const radius = 1.5 + layer * 0.5
        const height = (layer - 1.5) * 0.8
        
        return (
          <Sphere
            key={index}
            ref={(el) => (neuronsRef.current[index] = el)}
            args={[0.12, 16, 16]}
            position={[
              Math.cos(angle) * radius,
              height,
              Math.sin(angle) * radius
            ]}
          >
            <meshStandardMaterial color="#8b5cf6" />
          </Sphere>
        )
      })}
      
      {/* Synaptic connections */}
      {Array.from({ length: 8 }).map((_, index) => (
        <Torus 
          key={index}
          ref={(el) => (synapseRef.current[index] = el)}
          args={[1.5 + index * 0.3, 0.02, 8, 50]} 
          rotation={[Math.PI / 2 + index * 0.2, index * 0.3, 0]}
        >
          <meshStandardMaterial color="#60a5fa" transparent />
        </Torus>
      ))}
    </group>
  )
}

// Data Science Model - 3D Charts and Analytics
const DataScienceModel = () => {
  const chartRefs = useRef([])
  const dataPointsRef = useRef([])
  const trendLineRef = useRef()
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    // Animate 3D charts
    chartRefs.current.forEach((chart, index) => {
      if (chart) {
        const height = Math.abs(Math.sin(time * 2 + index * 0.7)) * 2.5 + 0.5
        chart.scale.y = height
        chart.material.color.setHSL((time * 0.05 + index * 0.15) % 1, 0.8, 0.6)
        chart.rotation.y = time * 0.5
      }
    })
    
    // Animate data points in 3D space
    dataPointsRef.current.forEach((point, index) => {
      if (point) {
        point.position.x = Math.sin(time + index * 0.5) * 3
        point.position.y = Math.cos(time * 1.5 + index * 0.3) * 2
        point.position.z = Math.sin(time * 0.8 + index * 0.7) * 2
        point.scale.setScalar(0.5 + Math.sin(time * 3 + index) * 0.3)
      }
    })
    
    if (trendLineRef.current) {
      trendLineRef.current.rotation.z = time * 0.3
      trendLineRef.current.material.opacity = 0.5 + Math.sin(time * 2) * 0.3
    }
  })

  return (
    <group>
      {/* 3D Bar charts */}
      {Array.from({ length: 10 }).map((_, index) => (
        <Box
          key={index}
          ref={(el) => (chartRefs.current[index] = el)}
          args={[0.3, 1, 0.3]}
          position={[
            (index % 5) * 0.8 - 1.6,
            0,
            Math.floor(index / 5) * 0.8 - 0.4
          ]}
        >
          <meshStandardMaterial color={`hsl(${index * 36}, 70%, 60%)`} />
        </Box>
      ))}
      
      {/* Floating data points */}
      {Array.from({ length, 25 }).map((_, index) => (
        <Sphere
          key={index}
          ref={(el) => (dataPointsRef.current[index] = el)}
          args={[0.08]}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial color="#10b981" />
        </Sphere>
      ))}
      
      {/* Trend analysis ring */}
      <Torus ref={trendLineRef} args={[3.5, 0.1, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#059669" transparent />
      </Torus>
    </group>
  )
}

// Generative AI Model - Creative Content Generator
const GenerativeAIModel = () => {
  const groupRef = useRef()
  const creativePiecesRef = useRef([])
  const generatorRef = useRef()
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.3
    }
    
    if (generatorRef.current) {
      generatorRef.current.rotation.x = time * 0.5
      generatorRef.current.rotation.z = time * 0.3
    }
    
    // Animate creative pieces being generated
    creativePiecesRef.current.forEach((piece, index) => {
      if (piece) {
        const spiral = time + index * 0.8
        const radius = 2 + Math.sin(spiral) * 0.5
        piece.position.x = Math.cos(spiral) * radius
        piece.position.z = Math.sin(spiral) * radius
        piece.position.y = Math.sin(time * 2 + index) * 1.5
        piece.rotation.x = time + index
        piece.rotation.y = time * 0.7 + index
        
        // Color shifting for creativity
        piece.material.color.setHSL((time * 0.1 + index * 0.2) % 1, 0.8, 0.6)
      }
    })
  })

  return (
    <group ref={groupRef}>
      {/* Central creative generator */}
      <Dodecahedron ref={generatorRef} args={[1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ec4899" transparent opacity={0.8} />
      </Dodecahedron>
      
      {/* Generated creative pieces */}
      {Array.from({ length: 12 }).map((_, index) => {
        const shapes = [Tetrahedron, Octahedron, Icosahedron, Box, Cone]
        const Shape = shapes[index % shapes.length]
        
        return (
          <Shape
            key={index}
            ref={(el) => (creativePiecesRef.current[index] = el)}
            args={[0.2]}
            position={[0, 0, 0]}
          >
            <meshStandardMaterial color="#f472b6" />
          </Shape>
        )
      })}
      
      {/* Creative energy rings */}
      <Torus args={[2.5, 0.1, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#ec4899" transparent opacity={0.4} />
      </Torus>
      <Torus args={[3, 0.05, 16, 100]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial color="#f472b6" transparent opacity={0.3} />
      </Torus>
    </group>
  )
}

// Agentic AI Model - Autonomous Decision-Making Agents
const AgenticAIModel = () => {
  const agentsRef = useRef([])
  const decisionNodesRef = useRef([])
  const pathsRef = useRef([])
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    // Animate autonomous agents
    agentsRef.current.forEach((agent, index) => {
      if (agent) {
        // Agents move in complex autonomous patterns
        const speed = 1 + index * 0.2
        const path1 = time * speed + index * 2
        const path2 = time * speed * 0.7 + index * 1.5
        
        agent.position.x = Math.cos(path1) * (2 + Math.sin(path2) * 0.5)
        agent.position.z = Math.sin(path1) * (2 + Math.cos(path2) * 0.5)
        agent.position.y = Math.sin(path2) * 1.5
        
        // Agents rotate as they make decisions
        agent.rotation.x = time * 2 + index
        agent.rotation.y = time * 1.5 + index
        
        // Color changes based on decision state
        const decisionPhase = Math.sin(time * 3 + index * 0.7)
        agent.material.color.setHSL(0.8 + decisionPhase * 0.1, 0.8, 0.5 + decisionPhase * 0.2)
      }
    })
    
    // Animate decision nodes
    decisionNodesRef.current.forEach((node, index) => {
      if (node) {
        node.scale.setScalar(1 + Math.sin(time * 4 + index * 0.5) * 0.3)
        node.rotation.y = time + index * 0.5
      }
    })
    
    // Animate decision paths
    pathsRef.current.forEach((path, index) => {
      if (path) {
        path.material.opacity = 0.3 + Math.sin(time * 5 + index) * 0.4
      }
    })
  })

  return (
    <group>
      {/* Autonomous agents */}
      {Array.from({ length: 6 }).map((_, index) => (
        <Octahedron
          key={index}
          ref={(el) => (agentsRef.current[index] = el)}
          args={[0.3]}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial color="#a855f7" />
        </Octahedron>
      ))}
      
      {/* Decision nodes */}
      {Array.from({ length: 8 }).map((_, index) => {
        const angle = (index / 8) * Math.PI * 2
        return (
          <Tetrahedron
            key={index}
            ref={(el) => (decisionNodesRef.current[index] = el)}
            args={[0.15]}
            position={[
              Math.cos(angle) * 3,
              Math.sin(angle * 0.5) * 1,
              Math.sin(angle) * 3
            ]}
          >
            <meshStandardMaterial color="#c084fc" />
          </Tetrahedron>
        )
      })}
      
      {/* Decision pathways */}
      {Array.from({ length: 4 }).map((_, index) => (
        <Torus
          key={index}
          ref={(el) => (pathsRef.current[index] = el)}
          args={[2.5 + index * 0.3, 0.03, 8, 50]}
          rotation={[index * 0.5, index * 0.3, index * 0.2]}
        >
          <meshStandardMaterial color="#8b5cf6" transparent />
        </Torus>
      ))}
    </group>
  )
}

// DSA in C++ Model - Algorithm Tree Structure
const DSAModel = () => {
  const nodesRef = useRef([])
  const edgesRef = useRef([])
  const sortingRef = useRef([])
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    // Animate binary tree nodes
    nodesRef.current.forEach((node, index) => {
      if (node) {
        node.position.y = Math.sin(time * 2 + index * 0.8) * 0.3
        node.rotation.x = time + index
        node.scale.setScalar(1 + Math.sin(time * 3 + index) * 0.2)
        
        // Color coding for different node types
        const nodeType = index % 3
        if (nodeType === 0) node.material.color.setHex(0xff4444) // Root
        else if (nodeType === 1) node.material.color.setHex(0xff6666) // Internal
        else node.material.color.setHex(0xff8888) // Leaf
      }
    })
    
    // Animate sorting algorithm visualization
    sortingRef.current.forEach((element, index) => {
      if (element) {
        const sortPhase = (time + index * 0.3) % 4
        element.position.x = Math.sin(sortPhase) * 2 + (index - 2) * 0.5
        element.material.color.setHSL(0.1, 0.8, 0.4 + Math.sin(sortPhase) * 0.3)
      }
    })
    
    // Animate tree edges
    edgesRef.current.forEach((edge, index) => {
      if (edge) {
        edge.material.opacity = 0.3 + Math.sin(time * 4 + index) * 0.4
        edge.rotation.z = Math.sin(time + index) * 0.1
      }
    })
  })

  return (
    <group>
      {/* Binary tree structure */}
      {Array.from({ length: 7 }).map((_, index) => {
        // Binary tree positioning
        const level = Math.floor(Math.log2(index + 1))
        const posInLevel = index - (Math.pow(2, level) - 1)
        const maxInLevel = Math.pow(2, level)
        const x = (posInLevel - (maxInLevel - 1) / 2) * (4 / maxInLevel)
        const y = 2 - level * 1.2
        
        return (
          <Sphere
            key={index}
            ref={(el) => (nodesRef.current[index] = el)}
            args={[0.2]}
            position={[x, y, 0]}
          >
            <meshStandardMaterial color="#ef4444" />
          </Sphere>
        )
      })}
      
      {/* Tree edges */}
      {Array.from({ length: 6 }).map((_, index) => {
        const parentIndex = Math.floor((index + 1) / 2) - 1
        const childIndex = index + 1
        
        return (
          <Cylinder
            key={index}
            ref={(el) => (edgesRef.current[index] = el)}
            args={[0.02, 0.02, 1]}
            position={[0, 0, 0]}
            rotation={[0, 0, index * Math.PI / 6]}
          >
            <meshStandardMaterial color="#dc2626" transparent />
          </Cylinder>
        )
      })}
      
      {/* Sorting visualization */}
      {Array.from({ length: 6 }).map((_, index) => (
        <Box
          key={index}
          ref={(el) => (sortingRef.current[index] = el)}
          args={[0.3, 0.5 + index * 0.2, 0.3]}
          position={[(index - 2.5) * 0.5, -2, 0]}
        >
          <meshStandardMaterial color="#dc2626" />
        </Box>
      ))}
    </group>
  )
}

// UI/UX Design Model - Design Canvas with Tools
const UIUXModel = () => {
  const canvasRef = useRef()
  const toolsRef = useRef([])
  const designElementsRef = useRef([])
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (canvasRef.current) {
      canvasRef.current.rotation.y = Math.sin(time * 0.5) * 0.1
    }
    
    // Animate design tools
    toolsRef.current.forEach((tool, index) => {
      if (tool) {
        tool.position.y = Math.sin(time * 2 + index) * 0.2
        tool.rotation.z = time * 0.5 + index * 0.3
        tool.material.color.setHSL((time * 0.1 + index * 0.2) % 1, 0.7, 0.6)
      }
    })
    
    // Animate design elements on canvas
    designElementsRef.current.forEach((element, index) => {
      if (element) {
        element.scale.setScalar(1 + Math.sin(time * 3 + index) * 0.1)
        element.material.opacity = 0.7 + Math.sin(time * 2 + index) * 0.2
      }
    })
  })

  return (
    <group>
      {/* Design canvas */}
      <Box ref={canvasRef} args={[3, 2.2, 0.1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#f8fafc" />
      </Box>
      
      {/* Canvas frame */}
      <Box args={[3.2, 2.4, 0.05]} position={[0, 0, -0.1]}>
        <meshStandardMaterial color="#1e293b" />
      </Box>
      
      {/* Design elements on canvas */}
      {Array.from({ length: 8 }).map((_, index) => (
        <Box
          key={index}
          ref={(el) => (designElementsRef.current[index] = el)}
          args={[0.3, 0.2, 0.02]}
          position={[
            (index % 4) * 0.6 - 0.9,
            Math.floor(index / 4) * 0.4 - 0.2,
            0.06
          ]}
        >
          <meshStandardMaterial color={`hsl(${index * 45}, 70%, 60%)`} transparent />
        </Box>
      ))}
      
      {/* Design tools floating around */}
      {Array.from({ length: 6 }).map((_, index) => {
        const angle = (index / 6) * Math.PI * 2
        const shapes = [Cylinder, Cone, Sphere, Box, Octahedron, Tetrahedron]
        const Shape = shapes[index]
        
        return (
          <Shape
            key={index}
            ref={(el) => (toolsRef.current[index] = el)}
            args={[0.15, 0.15, 0.3]}
            position={[
              Math.cos(angle) * 3,
              Math.sin(angle) * 2,
              Math.sin(angle * 0.5) * 1
            ]}
          >
            <meshStandardMaterial color="#ec4899" />
          </Shape>
        )
      })}
      
      {/* User experience flow */}
      <Torus args={[4, 0.08, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#be185d" transparent opacity={0.4} />
      </Torus>
    </group>
  )
}

// Blockchain Model - Chain of Blocks with Mining
const BlockchainModel = () => {
  const blocksRef = useRef([])
  const chainsRef = useRef([])
  const cryptoRef = useRef([])
  const miningRef = useRef()
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    // Animate blockchain blocks
    blocksRef.current.forEach((block, index) => {
      if (block) {
        block.rotation.y = time * 0.5 + index * 0.3
        block.position.y = Math.sin(time + index * 0.5) * 0.2
        
        // Simulate mining process with glowing effect
        const miningPhase = (time * 2 + index) % 3
        const glowIntensity = miningPhase < 1 ? miningPhase * 0.5 : 0.1
        block.material.emissive.setHSL(0.6, 0.8, glowIntensity)
      }
    })
    
    // Animate crypto particles orbiting
    cryptoRef.current.forEach((crypto, index) => {
      if (crypto) {
        const orbit = time + index * 0.8
        crypto.position.x = Math.cos(orbit) * (3 + Math.sin(orbit * 0.5))
        crypto.position.z = Math.sin(orbit) * (3 + Math.cos(orbit * 0.5))
        crypto.position.y = Math.sin(time * 2 + index) * 1.5
        crypto.rotation.x = time * 2 + index
        crypto.rotation.y = time * 1.5 + index
      }
    })
    
    // Animate chain connections
    chainsRef.current.forEach((chain, index) => {
      if (chain) {
        chain.material.opacity = 0.4 + Math.sin(time * 3 + index) * 0.3
      }
    })
    
    // Mining rig animation
    if (miningRef.current) {
      miningRef.current.rotation.y = time * 0.3
      miningRef.current.material.emissive.setHSL(0.1, 0.6, Math.sin(time * 4) * 0.3 + 0.2)
    }
  })

  return (
    <group>
      {/* Blockchain blocks */}
      {Array.from({ length: 6 }).map((_, index) => (
        <Box
          key={index}
          ref={(el) => (blocksRef.current[index] = el)}
          args={[0.8, 0.8, 0.8]}
          position={[index * 1.2 - 3, 0, 0]}
        >
          <meshStandardMaterial 
            color={`hsl(${200 + index * 15}, 70%, 60%)`}
            transparent
            opacity={0.8}
          />
        </Box>
      ))}
      
      {/* Chain connections */}
      {Array.from({ length: 5 }).map((_, index) => (
        <Cylinder
          key={index}
          ref={(el) => (chainsRef.current[index] = el)}
          args={[0.05, 0.05, 0.4]}
          position={[index * 1.2 - 2.4, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <meshStandardMaterial color="#0ea5e9" transparent />
        </Cylinder>
      ))}
      
      {/* Mining rig */}
      <Box ref={miningRef} args={[1, 0.6, 0.8]} position={[0, -2, 0]}>
        <meshStandardMaterial color="#1e40af" />
      </Box>
      
      {/* Crypto tokens */}
      {Array.from({ length: 10 }).map((_, index) => (
        <Octahedron
          key={index}
          ref={(el) => (cryptoRef.current[index] = el)}
          args={[0.12]}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial color="#0284c7" />
        </Octahedron>
      ))}
    </group>
  )
}

// App Development Model - Mobile Phone with Apps
const AppDevModel = () => {
  const phoneRef = useRef()
  const appsRef = useRef([])
  const notificationsRef = useRef([])
  const codeRef = useRef([])
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (phoneRef.current) {
      phoneRef.current.rotation.y = Math.sin(time * 0.5) * 0.3
      phoneRef.current.position.y = Math.sin(time) * 0.1
    }
    
    // Animate app icons
    appsRef.current.forEach((app, index) => {
      if (app) {
        app.scale.setScalar(1 + Math.sin(time * 2 + index) * 0.1)
        app.rotation.z = Math.sin(time + index) * 0.2
        app.material.color.setHSL((time * 0.1 + index * 0.3) % 1, 0.8, 0.6)
      }
    })
    
    // Animate notifications
    notificationsRef.current.forEach((notification, index) => {
      if (notification) {
        const float = time * 2 + index * 0.5
        notification.position.x = Math.sin(float) * 2
        notification.position.y = Math.cos(float) * 2 + 1
        notification.position.z = Math.sin(float * 0.7) * 1.5
        notification.scale.setScalar(0.8 + Math.sin(time * 4 + index) * 0.3)
      }
    })
    
    // Animate code blocks
    codeRef.current.forEach((code, index) => {
      if (code) {
        code.position.x = Math.cos(time + index * 0.5) * 3.5
        code.position.z = Math.sin(time + index * 0.5) * 3.5
        code.rotation.y = time + index
      }
    })
  })

  return (
    <group>
      {/* Phone device */}
      <Box ref={phoneRef} args={[1.2, 2.4, 0.2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1f2937" />
      </Box>
      
      {/* Screen */}
      <Box args={[1, 2, 0.05]} position={[0, 0, 0.11]}>
        <meshStandardMaterial color="#111827" />
      </Box>
      
      {/* App icons grid */}
      {Array.from({ length: 9 }).map((_, index) => (
        <Box
          key={index}
          ref={(el) => (appsRef.current[index] = el)}
          args={[0.2, 0.2, 0.02]}
          position={[
            (index % 3) * 0.3 - 0.3,
            Math.floor(index / 3) * 0.3 - 0.3,
            0.13
          ]}
        >
          <meshStandardMaterial color={`hsl(${index * 40}, 70%, 60%)`} />
        </Box>
      ))}
      
      {/* Floating code blocks */}
      {Array.from({ length: 4 }).map((_, index) => (
        <Box
          key={index}
          ref={(el) => (codeRef.current[index] = el)}
          args={[0.4, 0.2, 0.1]}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial color="#06b6d4" transparent opacity={0.7} />
        </Box>
      ))}
      
      {/* Floating notifications */}
      {Array.from({ length: 6 }).map((_, index) => (
        <Sphere
          key={index}
          ref={(el) => (notificationsRef.current[index] = el)}
          args={[0.08]}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial color="#06b6d4" />
        </Sphere>
      ))}
      
      {/* Development ecosystem ring */}
      <Torus args={[3, 0.1, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#0891b2" transparent opacity={0.4} />
      </Torus>
    </group>
  )
}

// Cybersecurity Model - Hacking/Security Visualization
const CybersecurityModel = () => {
  const shieldRef = useRef()
  const hackingRef = useRef([])
  const firewallRef = useRef([])
  const virusRef = useRef([])
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (shieldRef.current) {
      shieldRef.current.rotation.y = time * 0.3
      shieldRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1)
    }
    
    // Animate hacking attempts (red threats)
    hackingRef.current.forEach((hack, index) => {
      if (hack) {
        const attack = time * 3 + index * 0.7
        hack.position.x = Math.cos(attack) * (4 + Math.sin(attack * 0.3))
        hack.position.z = Math.sin(attack) * (4 + Math.cos(attack * 0.3))
        hack.position.y = Math.sin(attack * 0.5) * 2
        hack.rotation.x = time * 2 + index
        
        // Threat detection color change
        const detected = Math.sin(time * 5 + index) > 0.5
        hack.material.color.setHex(detected ? 0xff0000 : 0x660000)
        hack.material.emissive.setHex(detected ? 0x330000 : 0x000000)
      }
    })
    
    // Animate firewall layers
    firewallRef.current.forEach((firewall, index) => {
      if (firewall) {
        firewall.rotation.y = time * (1 + index * 0.2)
        firewall.material.opacity = 0.3 + Math.sin(time * 4 + index) * 0.4
        
        // Firewall activation
        const active = Math.sin(time * 3 + index) > 0.3
        firewall.material.emissive.setHex(active ? 0x001100 : 0x000000)
      }
    })
    
    // Animate virus/malware
    virusRef.current.forEach((virus, index) => {
      if (virus) {
        virus.position.x = Math.sin(time * 4 + index) * 2
        virus.position.y = Math.cos(time * 3 + index) * 2
        virus.position.z = Math.sin(time * 2 + index) * 2
        virus.rotation.x = time * 3 + index
        virus.rotation.y = time * 2 + index
        virus.scale.setScalar(0.5 + Math.sin(time * 5 + index) * 0.3)
      }
    })
  })

  return (
    <group>
      {/* Central security shield */}
      <Icosahedron ref={shieldRef} args={[1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#10b981" wireframe transparent opacity={0.8} />
      </Icosahedron>
      
      {/* Hacking attempts (skull-like shapes) */}
      {Array.from({ length: 8 }).map((_, index) => (
        <Tetrahedron
          key={index}
          ref={(el) => (hackingRef.current[index] = el)}
          args={[0.15]}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial color="#ef4444" />
        </Tetrahedron>
      ))}
      
      {/* Firewall layers */}
      {Array.from({ length: 4 }).map((_, index) => (
        <Torus
          key={index}
          ref={(el) => (firewallRef.current[index] = el)}
          args={[2 + index * 0.5, 0.05, 16, 100]}
          rotation={[Math.PI / 2 + index * 0.2, index * 0.3, 0]}
        >
          <meshStandardMaterial color="#059669" transparent />
        </Torus>
      ))}
      
      {/* Virus/Malware particles */}
      {Array.from({ length: 6 }).map((_, index) => (
        <Octahedron
          key={index}
          ref={(el) => (virusRef.current[index] = el)}
          args={[0.1]}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial color="#dc2626" />
        </Octahedron>
      ))}
      
      {/* Security scan beams */}
      <Cone args={[0.1, 4, 8]} position={[0, 2, 0]} rotation={[0, 0, 0]}>
        <meshStandardMaterial color="#34d399" transparent opacity={0.3} />
      </Cone>
      <Cone args={[0.1, 4, 8]} position={[0, -2, 0]} rotation={[Math.PI, 0, 0]}>
        <meshStandardMaterial color="#34d399" transparent opacity={0.3} />
      </Cone>
      
      {/* Encryption lock */}
      <Box args={[0.6, 0.8, 0.3]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#047857" />
      </Box>
      <Torus args={[0.4, 0.1, 8, 20]} position={[0, 0.3, 0]}>
        <meshStandardMaterial color="#065f46" />
      </Torus>
    </group>
  )
}

// API Development Model - Server with Data Flow
const APIModel = () => {
  const serverRef = useRef()
  const endpointsRef = useRef([])
  const dataPacketsRef = useRef([])
  const databaseRef = useRef()
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (serverRef.current) {
      serverRef.current.rotation.y = time * 0.2
      serverRef.current.material.emissive.setHSL(0.1, 0.5, Math.sin(time * 3) * 0.2 + 0.1)
    }
    
    if (databaseRef.current) {
      databaseRef.current.rotation.y = -time * 0.3
    }
    
    // Animate API endpoints
    endpointsRef.current.forEach((endpoint, index) => {
      if (endpoint) {
        endpoint.position.y = Math.sin(time * 2 + index * 0.5) * 0.3
        endpoint.rotation.y = time + index * 0.3
        
        // API activity indicator
        const activity = Math.sin(time * 4 + index) > 0.3
        endpoint.material.emissive.setHSL(0.1, 0.8, activity ? 0.3 : 0)
      }
    })
    
    // Animate data packets flowing
    dataPacketsRef.current.forEach((packet, index) => {
      if (packet) {
        const flow = (time * 2 + index * 0.3) % 6
        const angle = (index / dataPacketsRef.current.length) * Math.PI * 2
        
        if (flow < 3) {
          // Outbound from server
          packet.position.x = Math.cos(angle) * flow
          packet.position.z = Math.sin(angle) * flow
          packet.position.y = Math.sin(flow * 2) * 0.5
        } else {
          // Return journey to database
          const returnFlow = flow - 3
          packet.position.x = Math.cos(angle) * (3 - returnFlow)
          packet.position.z = Math.sin(angle) * (3 - returnFlow)
          packet.position.y = Math.sin(returnFlow * 2) * 0.5
        }
        
        packet.scale.setScalar(0.5 + Math.sin(time * 5 + index) * 0.3)
      }
    })
  })

  return (
    <group>
      {/* Central API server */}
      <Cylinder ref={serverRef} args={[0.8, 0.8, 1.5]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#f59e0b" />
      </Cylinder>
      
      {/* Server rack details */}
      <Box args={[0.6, 0.1, 0.6]} position={[0, 0.4, 0]}>
        <meshStandardMaterial color="#fb923c" />
      </Box>
      <Box args={[0.6, 0.1, 0.6]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#fb923c" />
      </Box>
      <Box args={[0.6, 0.1, 0.6]} position={[0, -0.4, 0]}>
        <meshStandardMaterial color="#fb923c" />
      </Box>
      
      {/* Database */}
      <Cylinder ref={databaseRef} args={[0.6, 0.6, 0.8]} position={[0, -2.5, 0]}>
        <meshStandardMaterial color="#dc2626" />
      </Cylinder>
      
      {/* API endpoints */}
      {Array.from({ length: 8 }).map((_, index) => {
        const angle = (index / 8) * Math.PI * 2
        return (
          <Box
            key={index}
            ref={(el) => (endpointsRef.current[index] = el)}
            args={[0.3, 0.3, 0.3]}
            position={[
              Math.cos(angle) * 3,
              0,
              Math.sin(angle) * 3
            ]}
          >
            <meshStandardMaterial color="#fb923c" />
          </Box>
        )
      })}
      
      {/* Data packets */}
      {Array.from({ length: 16 }).map((_, index) => (
        <Sphere
          key={index}
          ref={(el) => (dataPacketsRef.current[index] = el)}
          args={[0.06]}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial color="#fbbf24" />
        </Sphere>
      ))}
      
      {/* API documentation ring */}
      <Torus args={[4, 0.1, 16, 100]} rotation={[Math.PI / 2, 0, 0]} position={[0, 1, 0]}>
        <meshStandardMaterial color="#d97706" transparent opacity={0.4} />
      </Torus>
    </group>
  )
}

// Web Development Model - Browser with Code
const WebDevModel = () => {
  const browserRef = useRef()
  const codeBlocksRef = useRef([])
  const elementsRef = useRef([])
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (browserRef.current) {
      browserRef.current.rotation.y = Math.sin(time * 0.5) * 0.1
    }
    
    // Animate code blocks
    codeBlocksRef.current.forEach((block, index) => {
      if (block) {
        block.position.x = Math.sin(time + index * 0.5) * 0.1
        block.material.color.setHSL((time * 0.1 + index * 0.2) % 1, 0.8, 0.6)
      }
    })
    
    // Animate HTML elements
    elementsRef.current.forEach((element, index) => {
      if (element) {
        element.scale.setScalar(1 + Math.sin(time * 2 + index) * 0.1)
        element.rotation.z = Math.sin(time + index) * 0.1
      }
    })
  })

  return (
    <group ref={browserRef}>
      {/* Browser window */}
      <Box args={[3.5, 2.5, 0.1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#f8fafc" />
      </Box>
      
      {/* Browser frame */}
      <Box args={[3.7, 2.7, 0.05]} position={[0, 0, -0.1]}>
        <meshStandardMaterial color="#1e293b" />
      </Box>
      
      {/* Browser tabs */}
      <Box args={[0.8, 0.2, 0.02]} position={[-1.2, 1.2, 0.06]}>
        <meshStandardMaterial color="#3b82f6" />
      </Box>
      <Box args={[0.8, 0.2, 0.02]} position={[-0.2, 1.2, 0.06]}>
        <meshStandardMaterial color="#6b7280" />
      </Box>
      
      {/* HTML/CSS code blocks */}
      {Array.from({ length: 8 }).map((_, index) => (
        <Box
          key={index}
          ref={(el) => (codeBlocksRef.current[index] = el)}
          args={[0.6, 0.15, 0.02]}
          position={[
            (index % 4) * 0.7 - 1.05,
            Math.floor(index / 4) * 0.3 - 0.15,
            0.06
          ]}
        >
          <meshStandardMaterial color={`hsl(${index * 45}, 70%, 60%)`} />
        </Box>
      ))}
      
      {/* Floating HTML elements */}
      {Array.from({ length: 6 }).map((_, index) => {
        const angle = (index / 6) * Math.PI * 2
        return (
          <Box
            key={index}
            ref={(el) => (elementsRef.current[index] = el)}
            args={[0.2, 0.2, 0.1]}
            position={[
              Math.cos(angle) * 3,
              Math.sin(angle) * 2,
              Math.sin(angle * 0.5) * 1
            ]}
          >
            <meshStandardMaterial color="#3b82f6" />
          </Box>
        )
      })}
      
      {/* Development orbit */}
      <Torus args={[4, 0.08, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#1d4ed8" transparent opacity={0.4} />
      </Torus>
    </group>
  )
}

// Default model for remaining skills
const DefaultModel = ({ color = '#3b82f6', skillType = 'default' }) => {
  const groupRef = useRef()
  const elementsRef = useRef([])
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (groupRef.current) {
      groupRef.current.rotation.x = time * 0.3
      groupRef.current.rotation.y = time * 0.5
    }
    
    elementsRef.current.forEach((element, index) => {
      if (element) {
        element.position.y = Math.sin(time * 2 + index * 0.5) * 0.5
        element.rotation.x = time + index
        element.rotation.z = time * 0.7 + index
      }
    })
  })

  return (
    <group ref={groupRef}>
      <Icosahedron args={[1]} position={[0, 0, 0]}>
        <meshStandardMaterial color={color} wireframe />
      </Icosahedron>
      
      {Array.from({ length: 6 }).map((_, index) => {
        const angle = (index / 6) * Math.PI * 2
        return (
          <Sphere
            key={index}
            ref={(el) => (elementsRef.current[index] = el)}
            args={[0.15]}
            position={[
              Math.cos(angle) * 2,
              0,
              Math.sin(angle) * 2
            ]}
          >
            <meshStandardMaterial color={color} />
          </Sphere>
        )
      })}
      
      <Torus args={[2.5, 0.1, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color={color} transparent opacity={0.6} />
      </Torus>
    </group>
  )
}

const Model3DComponent = ({ skillType }) => {
  const getModel = () => {
    switch (skillType) {
      case 'AI/ML':
        return <AIMLModel />
      case 'Data Science':
        return <DataScienceModel />
      case 'Generative AI':
        return <GenerativeAIModel />
      case 'Agentic AI':
        return <AgenticAIModel />
      case 'DSA in C++':
        return <DSAModel />
      case 'UI/UX Design':
        return <UIUXModel />
      case 'Blockchain':
        return <BlockchainModel />
      case 'App Development':
        return <AppDevModel />
      case 'Cybersecurity':
        return <CybersecurityModel />
      case 'API Development':
        return <APIModel />
      case 'Web Development':
        return <WebDevModel />
      case 'System Design':
        return <DefaultModel color="#14b8a6" skillType="system" />
      case 'Blender':
        return <DefaultModel color="#f97316" skillType="3d" />
      case 'AWS':
        return <DefaultModel color="#f59e0b" skillType="cloud" />
      case 'DevOps':
        return <DefaultModel color="#8b5cf6" skillType="devops" />
      case 'Cloud Computing':
        return <DefaultModel color="#0ea5e9" skillType="cloud" />
      case 'Software Engineering':
        return <DefaultModel color="#ef4444" skillType="software" />
      case 'Internship Prep':
        return <DefaultModel color="#22c55e" skillType="career" />
      case 'Hackathon Prep':
        return <DefaultModel color="#a855f7" skillType="hackathon" />
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