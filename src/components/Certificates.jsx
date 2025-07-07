import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Parallax } from 'react-scroll-parallax'

const Certificates = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      link: "#"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University & Coursera",
      date: "2023",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
      link: "#"
    },
    {
      title: "Full Stack Development",
      issuer: "Meta",
      date: "2023",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
      link: "#"
    },
    {
      title: "Google Cloud Certified",
      issuer: "Google Cloud",
      date: "2023",
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
      link: "#"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <Parallax translateY={[30, -30]} className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <Parallax translateY={[-30, 30]} className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />

      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-title text-center mx-auto">
            Certificates & Achievements
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-center text-gray-700 dark:text-gray-300 mb-12"
          >
            Professional certifications and achievements that validate my expertise
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card overflow-hidden hover-lift"
              >
                <div className="relative h-48">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      {cert.issuer}
                    </span>
                    <span className="text-primary-600 dark:text-primary-400">
                      {cert.date}
                    </span>
                  </div>
                  
                  <a 
                    href={cert.link}
                    className="mt-4 inline-block text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    View Certificate →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates