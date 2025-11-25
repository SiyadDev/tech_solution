'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/app/lib/animations';
import { BUSINESS_INFO, NAV_ITEMS } from '@/app/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-gray-900 dark:bg-black text-gray-300 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-gray-400 mb-4">{BUSINESS_INFO.description}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{BUSINESS_INFO.email}</li>
              <li>{BUSINESS_INFO.phone}</li>
              <li>{BUSINESS_INFO.address}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}

