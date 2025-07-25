

import React from 'react';

const features = [
  {
    icon: '🧑‍🏫',
    title: 'Experience Faculty',
    description: 'Experience Faculty refers to experienced and knowledgeable teachers in their subject fields.They bring real-world insights and practical examples to the classroom.',
  },
  {
    icon: '💻', 
    title: 'Modern Infrastructure',
    description: 'Modern infrastructure includes state-of-the-art classrooms, labs, and digital learning tools.It creates a comfortable and advanced environment that enhances student learning and development.'
,
  },
  {
    icon: '🛠️', 
    title: 'Practical Training',
    description: 'Practical training focuses on hands-on experience to build real-world skills.It helps students apply theoretical knowledge through projects, workshops, and live demonstrations.',
  },
  {
    icon: '🤝', 
    title: 'Placement Assistance',
    description: 'Placement assistance supports students in finding job opportunities after completing their course.It includes resume building, interview preparation, and connecting with industry recruiters.'
,
  },
  {
    icon: '📚', 
    title: 'Industry-Relevant Curriculum',
    description: 'The curriculum is designed to match current industry standards and trends.It ensures students gain up-to-date knowledge and skills needed for their careers.'
,
  },
  {
    icon: '⏰', 
    title: 'Flexible Timings',
    description: 'Flexible timings allow students to choose classes that fit their schedules.This helps accommodate working professionals and those with other commitments.',
  },
];

function WhyChooseUsSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-12 animate-fade-in-down">
          Why Choose Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 text-center
                         transform hover:scale-105 transition duration-300 ease-in-out animate-fade-in"
            >
              <div className="text-6xl mb-4 text-blue-600 dark:text-blue-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;