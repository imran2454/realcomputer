// src/components/ImageModal.js

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline'; // X icon for closing

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { delay: 0.1 } },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={backdropVariants}
        onClick={onClose} // Close on backdrop click
      >
        <motion.div
          className="relative bg-white dark:bg-gray-900 rounded-lg shadow-2xl p-4 max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white z-10 p-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <img
            src={image.src}
            alt={image.title}
            className="max-w-full max-h-[calc(90vh-100px)] object-contain rounded-md mb-4 flex-grow" // Adjust height
          />
          <div className="text-center p-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{image.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{image.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;