'use client';

import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight } from '@/app/lib/animations';
import { BUSINESS_INFO } from '@/app/lib/constants';
import { Container } from '@/app/components/Container';
import { Button } from '@/app/components/Button';

export function Contact() {
  return (
    <Container id="contact" className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Ready to start your project? Let's talk about how we can help you succeed.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInLeft}
        >
          <form className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <Button size="lg" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRight}
          className="flex flex-col gap-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Contact Information
            </h3>
            <div className="flex flex-col gap-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <div className="text-2xl mr-4">📧</div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Email
                  </div>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <div className="text-2xl mr-4">📞</div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Phone
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <div className="text-2xl mr-4">📍</div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Address
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {BUSINESS_INFO.address}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="mb-6 opacity-90">
              We're always excited to take on new projects and help businesses grow.
              Reach out to us today!
            </p>
            <Button variant="secondary" size="lg" href={`mailto:${BUSINESS_INFO.email}`}>
              Start a Conversation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
}

