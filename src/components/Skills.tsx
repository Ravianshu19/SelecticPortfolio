import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "R", "SQL", "TypeScript"],
      description: "Speaking in code... Translating thoughts into algorithms."
    },
    {
      title: "Visualization",
      skills: ["Tableau", "Plotly", "D3.js", "Seaborn"],
      description: "Painting with data... Making the invisible, visible."
    },
    {
      title: "Modeling",
      skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Statsmodels"],
      description: "Building bridges between questions and answers."
    },
    {
      title: "Finance",
      skills: ["Risk Models", "Portfolio Theory", "Derivatives", "Econometrics"],
      description: "Decoding market whispers... Quantifying uncertainty."
    }
  ];

  return (
    <section className="py-20 px-[10vw] bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-text mb-6 tracking-extra-wide">
            T o o l s&nbsp;&nbsp;&nbsp;O f&nbsp;&nbsp;&nbsp;C r a f t
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto leading-relaxed">
            Visualizing trends...<br />
            Simplifying complexity...<br />
            <span className="text-accent">Crafting understanding.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-medium text-text mb-4 tracking-wide">
                {category.title}
              </h3>
              <p className="text-text-light text-sm mb-6 italic">
                {category.description}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1 + skillIndex * 0.05,
                      ease: "easeOut" 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-background text-text text-sm rounded-full border border-gray-200 hover:border-accent transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
