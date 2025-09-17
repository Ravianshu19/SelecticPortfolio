import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 px-[10vw] bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-light text-text mb-6 tracking-wide">
            Let's uncover insights together
          </h2>
          <p className="text-text-light text-lg leading-relaxed max-w-2xl mx-auto">
            Ready to transform data into stories?<br />
            <span className="text-accent">Every dataset holds secrets...</span><br />
            Waiting to be revealed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center gap-8"
        >
          <a
            href="mailto:contact@example.com"
            className="flex items-center gap-3 px-6 py-3 bg-white text-text hover:text-accent border border-gray-200 hover:border-accent rounded-lg transition-all duration-300 hover:shadow-sm"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 bg-white text-text hover:text-accent border border-gray-200 hover:border-accent rounded-lg transition-all duration-300 hover:shadow-sm"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 bg-white text-text hover:text-accent border border-gray-200 hover:border-accent rounded-lg transition-all duration-300 hover:shadow-sm"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 text-text-light text-sm tracking-wide"
        >
          © 2025 • Crafted with intention • Beyond beautiful
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
