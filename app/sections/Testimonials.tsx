'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, scaleIn } from '@/app/lib/animations';
import { TESTIMONIALS } from '@/app/lib/constants';
import { Container } from '@/app/components/Container';

export function Testimonials() {
  return (
    <Container id="testimonials" className="bg-white dark:bg-gray-900">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-16 flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-gray-100">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex text-yellow-400">
                {'★'.repeat(5)}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
}

