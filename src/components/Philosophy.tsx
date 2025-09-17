import React from 'react';
import { motion } from 'framer-motion';

const Philosophy: React.FC = () => {
  return (
    <section className="py-20 px-[10vw] bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-text mb-8 tracking-extra-wide">
            P h i l o s o p h y
          </h2>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-text leading-relaxed"
          >
            No noise.<br />
            Only insights.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-text-light leading-relaxed max-w-3xl mx-auto"
          >
            Data, distilled to its essence...<br />
            Where complexity surrenders to <span className="text-accent">clarity</span>.<br />
            Each visualization a meditation on truth.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-text-light leading-relaxed max-w-2xl mx-auto"
          >
            I believe in the profound beauty of mathematical truth...<br />
            In patterns that speak louder than words...<br />
            In the elegance of <span className="text-accent">understanding</span> over mere information.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-accent font-medium tracking-wide"
          >
            Beyond beautiful.<br />
            Beyond data.<br />
            <span className="text-text">Into wisdom.</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
