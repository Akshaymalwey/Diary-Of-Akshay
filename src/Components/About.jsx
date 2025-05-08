import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1>Welcome.</h1><br />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
