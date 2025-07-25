// src/components/Contact/OfficeHours.js

import React from 'react';
import { motion }  from 'framer-motion';
import { ClockIcon } from '@heroicons/react/24/outline';

const OfficeHours = ({ sectionVariants }) => {
  const hours = [
    { day: 'सोमवार - शुक्रवार', time: 'सुबह 9:00 बजे - शाम 6:00 बजे' },
    { day: 'शनिवार', time: 'सुबह 10:00 बजे - दोपहर 2:00 बजे' },
    { day: 'रविवार', time: 'बंद' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={sectionVariants} className="bg-white dark:bg-gray-900 shadow-xl rounded-lg p-8 h-full flex flex-col">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b-2 border-purple-500 pb-3 text-center">
        कार्यालय का समय
      </h2>
      <motion.div
        className="space-y-4 flex-grow justify-center flex flex-col" // flex-grow and flex-col justify-center to center content
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {hours.map((entry, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-md shadow-sm"
          >
            <span className="flex items-center text-gray-700 dark:text-gray-300">
              <ClockIcon className="h-5 w-5 mr-2 text-purple-600 dark:text-purple-400" />
              <span className="font-semibold">{entry.day}</span>
            </span>
            <span className="text-gray-900 dark:text-white font-medium">{entry.time}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default OfficeHours;