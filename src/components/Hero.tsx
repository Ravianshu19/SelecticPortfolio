import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-[10vw] py-20">
      <div className="text-center max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-light text-text mb-8 tracking-wide"
        >
          Data Analyst
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-text-light mb-12 tracking-extra-wide"
        >
          T u r n i n g&nbsp;&nbsp;&nbsp;N u m b e r s&nbsp;&nbsp;&nbsp;i n t o&nbsp;&nbsp;&nbsp;S t o r i e s
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-base md:text-lg text-text-light leading-relaxed max-w-2xl mx-auto"
        >
          Data, distilled…<br />
          Insights, revealed.<br />
          <span className="text-accent">Stories emerge from silence.</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
