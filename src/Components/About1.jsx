import React from 'react'
import { motion } from "framer-motion";

const About1 = () => {
  return (
    <div className='about1-section'>
         <div className="about-content">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p>Welcome to Diary of Akshay — a quiet space where thoughts slow down and feelings find their form. You’re here for a reason, even if you don’t know it yet. Take a breath, let go of the noise, and step gently into a world where every word is a window to something deeper.</p><br />
        </motion.div>
      </div>
    </div>
  )
}

export default About1
