iimport React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { faker } from '@faker-js/faker';

const Projects: React.FC = () => {
  // Generate mock data for charts
  const generateLineData = () => {
    return Array.from({ length: 12 }, (_, i) => ({
      name: `M${i + 1}`,
      value: faker.number.float({ min: 0.8, max: 1.2, fractionDigits: 3 })
    }));
  };

  const generateAreaData = () => {
    return Array.from({ length: 10 }, (_, i) => ({
      name: `${2020 + i}`,
      value: faker.number.float({ min: 0.05, max: 0.15, fractionDigits: 4 })
    }));
  };

  const generateReturnData = () => {
    return Array.from({ length: 30 }, (_, i) => ({
      name: `D${i + 1}`,
      value: faker.number.float({ min: -0.05, max: 0.05, fractionDigits: 4 })
    }));
  };

  const projects = [
    {
      title: "Fama-French Factor Models",
      description: "Multi-factor risk analysis revealing market anomalies... Systematic patterns in equity returns decoded through rigorous statistical modeling.",
      impact: "15% improvement in risk-adjusted returns",
      chartData: generateLineData(),
      chartType: 'line' as const,
      githubUrl: "https://github.com/Ravianshu07/Quant/blob/main/CAPM%20%26%20Multi-Factor%20Regression%20Analysis.ipynb",
      demoUrl: "https://github.com/Ravianshu07/Quant/blob/main/CAPM%20%26%20Multi-Factor%20Regression%20Analysis.ipynb"
    },
    {
      title: "Value-at-Risk Engine",
      description: "Monte Carlo simulations distilled into actionable insights... Quantifying the unquantifiable through probabilistic modeling.",
      impact: "99.5% accuracy in tail risk prediction",
      chartData: generateAreaData(),
      chartType: 'area' as const,
      githubUrl: "https://github.com/Ravianshu07/Quant/blob/main/Value%20at%20Risk%20Calculator.ipynb",
      demoUrl: "https://github.com/Ravianshu07/Quant/blob/main/Value%20at%20Risk%20Calculator.ipynb"
    },
    {
      title: "LSTM Stock Predictions",
      description: "Neural networks learning from market memory... Deep patterns in temporal sequences revealed through recurrent architectures.",
      impact: "Predicted 12% revenue lift",
      chartData: generateReturnData(),
      chartType: 'line' as const,
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Portfolio Optimization",
      description: "Markowitz theory refined for modern markets... Efficient frontiers mapped through convex optimization and risk parity frameworks.",
      impact: "22% reduction in portfolio volatility",
      chartData: generateLineData(),
      chartType: 'area' as const,
      githubUrl: "https://github.com/Ravianshu07/Quant/blob/main/Stock%20Market%20Portfolio%20Optimization.ipynb",
      demoUrl: "https://github.com/Ravianshu07/Quant/blob/main/Stock%20Market%20Portfolio%20Optimization.ipynb"
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
            I n s i g h t s&nbsp;&nbsp;&nbsp;F r o m&nbsp;&nbsp;&nbsp;D a t a
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto leading-relaxed">
            Each project distills complexity into clarity...<br />
            <span className="text-accent">Where numbers become narratives.</span>
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
