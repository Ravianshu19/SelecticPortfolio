import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  impact: string;
  chartData: any[];
  chartType: 'line' | 'area';
  githubUrl?: string;
  demoUrl?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  impact, 
  chartData, 
  chartType,
  githubUrl,
  demoUrl 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-medium text-text mb-4 tracking-wide">
          {title}
        </h3>
        <p className="text-text-light text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="text-accent font-medium text-sm tracking-wide">
          {impact}
        </div>
      </div>
      
      <div className="h-48 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'line' ? (
            <LineChart data={chartData}>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12, fill: '#666666' }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12, fill: '#666666' }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#4A90E2" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          ) : (
            <AreaChart data={chartData}>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12, fill: '#666666' }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12, fill: '#666666' }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#4A90E2" 
                fill="#4A90E2" 
                fillOpacity={0.1}
              />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>
      
      <div className="flex gap-4">
        {githubUrl && (
          <a 
            href={githubUrl}
            className="flex items-center gap-2 text-text-light hover:text-accent transition-colors text-sm"
          >
            <Github size={16} />
            Code
          </a>
        )}
        {demoUrl && (
          <a 
            href={demoUrl}
            className="flex items-center gap-2 text-text-light hover:text-accent transition-colors text-sm"
          >
            <ExternalLink size={16} />
            Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
