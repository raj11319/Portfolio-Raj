import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      // EmailJS configuration
      const serviceId = 'YOUR_SERVICE_ID' // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID' // Replace with your EmailJS template ID
      const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'raj113192007@gmail.com',
        message: formData.message,
        reply_to: formData.email
      }
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus(''), 3000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus(''), 3000)
    }
  }

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants} 
            className="section-title text-center mx-auto"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          >
            Get In Touch
          </motion.h2>
          
          {/* Enhanced responsive grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact information - Enhanced responsive layout */}
            <motion.div variants={itemVariants}>
              <div className="card">
                <h3 
                  className="font-bold text-gray-800 dark:text-white mb-6"
                  style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)' }}
                >
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                      <HiMail 
                        className="text-primary-600 dark:text-primary-400" 
                        style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 
                        className="font-medium text-gray-700 dark:text-gray-300"
                        style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
                      >
                        Email
                      </h4>
                      <a 
                        href="mailto:raj113192007@gmail.com" 
                        className="text-primary-600 dark:text-primary-400 hover:underline break-all"
                        style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
                      >
                        raj113192007@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-secondary-100 dark:bg-secondary-900/30 p-3 rounded-full">
                      <HiPhone 
                        className="text-secondary-600 dark:text-secondary-400" 
                        style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 
                        className="font-medium text-gray-700 dark:text-gray-300"
                        style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
                      >
                        Phone
                      </h4>
                      <a 
                        href="tel:+917061121632" 
                        className="text-secondary-600 dark:text-secondary-400 hover:underline"
                        style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
                      >
                        +91 7061121632
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-accent-100 dark:bg-accent-900/30 p-3 rounded-full">
                      <HiLocationMarker 
                        className="text-accent-600 dark:text-accent-400" 
                        style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 
                        className="font-medium text-gray-700 dark:text-gray-300"
                        style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
                      >
                        Location
                      </h4>
                      <p 
                        className="text-gray-600 dark:text-gray-400"
                        style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
                      >
                        Dehradun, India
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 
                    className="font-medium text-gray-800 dark:text-white mb-4"
                    style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
                  >
                    Connect with me
                  </h4>
                  
                  {/* Enhanced responsive social links */}
                  <div className="flex flex-wrap gap-3">
                    {/* Instagram */}
                    <motion.a 
                      href="https://www.instagram.com/raj113192007?utm_source=qr&igsh=MzB3Zm5laGFrNGMw" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 group"
                      style={{ 
                        width: 'clamp(2.5rem, 6vw, 3rem)', 
                        height: 'clamp(2.5rem, 6vw, 3rem)' 
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg 
                        className="w-full h-full text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24" 
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                    
                    {/* Twitter */}
                    <motion.a 
                      href="https://x.com/RajSrivast51143" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 group"
                      style={{ 
                        width: 'clamp(2.5rem, 6vw, 3rem)', 
                        height: 'clamp(2.5rem, 6vw, 3rem)' 
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg 
                        className="w-full h-full text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24" 
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </motion.a>
                    
                    {/* GitHub */}
                    <motion.a 
                      href="https://github.com/raj11319" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full hover:from-gray-800 hover:to-black transition-all duration-300 group"
                      style={{ 
                        width: 'clamp(2.5rem, 6vw, 3rem)', 
                        height: 'clamp(2.5rem, 6vw, 3rem)' 
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg 
                        className="w-full h-full text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24" 
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                    
                    {/* LinkedIn */}
                    <motion.a 
                      href="https://www.linkedin.com/in/raj-srivastava-157422317" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 group"
                      style={{ 
                        width: 'clamp(2.5rem, 6vw, 3rem)', 
                        height: 'clamp(2.5rem, 6vw, 3rem)' 
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg 
                        className="w-full h-full text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24" 
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact form - Enhanced responsive layout */}
            <motion.div variants={itemVariants}>
              <div className="card">
                <h3 
                  className="font-bold text-gray-800 dark:text-white mb-6"
                  style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)' }}
                >
                  Send me a message
                </h3>
                
                {/* Status Messages */}
                {status === 'error' && (
                  <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
                    <p 
                      className="text-red-600 dark:text-red-400"
                      style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
                    >
                      Failed to send message. Please try again or contact me directly at raj113192007@gmail.com
                    </p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block font-medium text-gray-700 dark:text-gray-300 mb-1"
                      style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block font-medium text-gray-700 dark:text-gray-300 mb-1"
                      style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block font-medium text-gray-700 dark:text-gray-300 mb-1"
                      style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical"
                      style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
                      placeholder="Hello, I'd like to talk about..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full btn-primary flex justify-center items-center"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : status === 'success' ? (
                      'Message Sent Successfully!'
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
                
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <p 
                    className="text-blue-600 dark:text-blue-400"
                    style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}
                  >
                    <strong>Note:</strong> To enable email functionality, you need to set up EmailJS with your service credentials. 
                    Check the console for setup instructions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact