// src/components/Contact/ContactForm.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

const ContactForm = ({ sectionVariants }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setIsSuccess(false);

    // Simulate API call for form submission
    try {
      // In a real application, you would send this data to your backend
      // Example: const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      // Example: const data = await response.json();
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

      // For demonstration, assume success
      console.log('Contact form submitted:', formData);
      setSubmitMessage('आपका संदेश सफलतापूर्वक भेज दिया गया है! हम जल्द ही आपसे संपर्क करेंगे।');
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage('संदेश भेजने में कोई त्रुटि हुई। कृपया पुनः प्रयास करें।');
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div variants={sectionVariants} className="bg-white dark:bg-gray-900 shadow-xl rounded-lg p-8 h-full flex flex-col">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b-2 border-purple-500 pb-3">
        हमें संदेश भेजें
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 flex-grow"> {/* flex-grow to fill height */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            आपका नाम
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            आपका ईमेल
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            विषय
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            आपका संदेश
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
          ></textarea>
        </div>
        <div className="text-center mt-auto pt-4"> {/* mt-auto and pt-4 to push button to bottom if form is short */}
          <motion.button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'संदेश भेज रहा है...' : 'संदेश भेजें'}
            <PaperAirplaneIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </motion.button>
        </div>
        {submitMessage && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 text-center text-sm ${isSuccess ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}
          >
            {submitMessage}
          </motion.p>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;