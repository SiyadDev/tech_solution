'use client';

import { motion } from 'framer-motion';
import { slideInLeft, slideInRight, fadeInUp } from '@/app/lib/animations';
import { BUSINESS_INFO } from '@/app/lib/constants';
import { Container } from '@/app/components/Container';

export function About() {
  return (
    <Container id="about" className="bg-gray-50 dark:bg-gray-800">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInLeft}
          className="flex flex-col gap-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {BUSINESS_INFO.description}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            With years of experience in the industry, we've helped hundreds of businesses
            transform their digital presence and achieve remarkable growth. Our team of
            experts is dedicated to delivering excellence in every project.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl flex flex-col gap-2"
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                500+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl flex flex-col gap-2"
            >
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                98%
              </div>
              <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRight}
          className="relative"
        >
          <motion.div
            className="relative w-full h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/10 rounded-3xl flex items-center justify-center">
              <div className="text-8xl">💼</div>
            </div>
          </motion.div>
          <motion.div
            className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full opacity-80 blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 0.6, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>
    </Container>
  );
}

