// src/components/Contact/ContactDetails.js

import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const ContactDetails = ({ sectionVariants }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div variants={sectionVariants} className="bg-white dark:bg-gray-900 shadow-xl rounded-lg p-8 h-full flex flex-col">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b-2 border-purple-500 pb-3 mt-15">
        संपर्क जानकारी
      </h2>
      <motion.div
        className="space-y-6 flex-grow" // flex-grow to make it fill available height
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={itemVariants} className="flex items-start">
          <MapPinIcon className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">पता</h3>
            <p className="text-gray-700 dark:text-gray-300">
              संस्थान का नाम, 123, विद्या मार्ग,
              <br />
              मिर्जापुर, उत्तर प्रदेश, 231001, भारत
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-start">
          <PhoneIcon className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">फोन नंबर</h3>
            <p className="text-gray-700 dark:text-gray-300">
              <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a> (मुख्य कार्यालय)
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <a href="tel:+918765432109" className="hover:underline">+91 87654 32109</a> (प्रवेश विभाग)
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-start">
          <EnvelopeIcon className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">ईमेल पते</h3>
            <p className="text-gray-700 dark:text-gray-300">
              <a href="mailto:info@yourinstitute.com" className="hover:underline">info@yourinstitute.com</a> (सामान्य पूछताछ)
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <a href="mailto:admissions@yourinstitute.com" className="hover:underline">admissions@yourinstitute.com</a> (प्रवेश संबंधी)
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactDetails;