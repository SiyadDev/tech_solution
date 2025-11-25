'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { scaleIn } from '@/app/lib/animations';

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Card({ children, className = '', delay = 0 }: CardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={scaleIn}
      transition={{ delay }}
      className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col ${className}`}
    >
      {children}
    </motion.div>
  );
}

