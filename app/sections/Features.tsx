'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/app/lib/animations';
import { FEATURES } from '@/app/lib/constants';
import { Container } from '@/app/components/Container';
import { Card } from '@/app/components/Card';

export function Features() {
  return (
    <Container id="features" className="bg-white dark:bg-gray-900">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-16 flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover what makes us the perfect partner for your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div key={feature.id} variants={fadeInUp}>
              <Card delay={index * 0.1} className="h-full gap-4">
                <div className="text-5xl">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
}

