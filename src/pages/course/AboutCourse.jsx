// src/components/CoursesOverviewSection.js

import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

// Sample data for featured courses (Pehle jaisa hi rahega)
const featuredCourses = [
  {
    id: 1,
    title: 'Full Stack Web Development (MERN Stack)',
    description: 'Modern web applications banane ke liye MongoDB, Express.js, React.js, aur Node.js seekhein.',
    benefits: [
      'Responsive UIs develop karna',
      'Backend APIs banana',
      'Databases ke saath kaam karna', 
      'Industry-ready portfolio banana',
    ],
    เหมาะ_for: 'Beginners aur intermediate developers jo full stack banna chahte hain.',
    icon: '🚀',
    detailed_info: 'Is course mein aap MERN stack ka upyog karke real-world projects banayenge. Har module mein practical assignments aur quizzes honge. Course ke ant mein, aapko ek capstone project banana hoga jo aapke portfolio mein shamil kiya ja sakta hai. Hamare experienced instructors aapko end-to-end guidance denge.'
  },
  {
    id: 2,
    title: 'Data Science & Machine Learning',
    description: 'Data analysis, visualization, aur machine learning models banane ki gehri samajh prapt karein.',
    benefits: [
      'Python aur libraries (Pandas, NumPy, Scikit-learn) mein महारत',
      'Predictive models banana',
      'Big Data handle karna',
      'Career opportunities in AI and ML',
    ],
    เหมาะ_for: 'Mathematics, Statistics, ya Computer Science background wale students.',
    icon: '📊',
    detailed_info: 'Advanced statistical analysis aur predictive modeling techniques seekhein. Is course mein linear regression se lekar deep learning tak sabhi topics cover kiye jayenge. Real-world datasets par kaam karke aapki analytical skills ko badhaya jayega.'
  },
  {
    id: 3,
    title: 'Graphic Design & UI/UX',
    description: 'Creative design principles, tools (Photoshop, Illustrator, Figma), aur user-centric design seekhein.',
    benefits: [
      'Visually appealing designs banana',
      'User experience improve karna',
      'Design software par command',
      'Portfolio for design roles',
    ],
    เหมาะ_for: 'Creative individuals aur artists jo digital design mein career banana chahte hain.',
    icon: '🎨',
    detailed_info: 'Ek safal UI/UX designer banne ke liye zaroori sabhi skills seekhein. Wireframing, prototyping, user research aur usability testing jaise topics par dhyan diya jayega. Industry ke latest design tools par hathiyar mazboot karein.'
  },
];

// Naye courses jo 'Show All' par dikhenge
const additionalCourses = [
  {
    id: 4,
    title: 'Cloud Computing (AWS/Azure)',
    description: 'Cloud infrastructure, deployment, aur management services seekhein.',
    benefits: [
      'Cloud deployment skills',
      'Serverless architectures',
      'DevOps practices',
    ],
    เหมาะ_for: 'IT professionals aur developers jo cloud skills badhana chahte hain.',
    icon: '☁️',
    detailed_info: 'Cloud computing ke basics se lekar advanced services tak sab kuch cover kiya jayega. AWS aur Azure dono platforms par practical experience diya jayega. Certified Cloud Professional banne ki training.'
  },
  {
    id: 5,
    title: 'Cybersecurity Fundamentals',
    description: 'Network security, ethical hacking, aur data protection ki buniyadi samajh prapt karein.',
    benefits: [
      'Threat detection',
      'Vulnerability assessment',
      'Cyber defense strategies',
    ],
    เหมาะ_for: 'Jo cybersecurity mein career banana chahte hain.',
    icon: '🔒',
    detailed_info: 'Digital duniya mein data aur systems ko surakshit rakhne ke tareeke seekhein. Latest cyber threats aur unse bachne ke upay. Practical labs ke saath real-world scenarios ko samjhein.'
  },
];


function CoursesOverviewSection() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal ki open/close state
  const [selectedCourse, setSelectedCourse] = useState(null); // Jis course par click kiya gaya hai
  const [showAllCourses, setShowAllCourses] = useState(false); // Nayi state: Sabhi courses dikhane/chupane ke liye

  // Courses jo abhi display ho rahe hain
  const coursesToDisplay = showAllCourses ? [...featuredCourses, ...additionalCourses] : featuredCourses;

  function closeModal() {
    setIsModalOpen(false);
    setSelectedCourse(null);
  }

  function openModal(course) {
    setSelectedCourse(course);
    setIsModalOpen(true);
  }

  function toggleShowAllCourses() {
    setShowAllCourses(!showAllCourses); // State ko toggle karein
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-12 animate-fade-in-down pt-8">
         Our Popular Courses
        </h2>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {coursesToDisplay.map((course) => ( // coursesToDisplay ka use karein
            <div
              key={course.id}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between
                         transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out animate-fade-in"
            >
              <div>
                <div className="text-5xl mb-4 text-center">{course.icon}</div>
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-3 text-center">
                  {course.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
                  {course.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Mukhya Labh:</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    {course.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Kiske Liye Upukt:</h4>
                  <p className="text-gray-600 dark:text-gray-400">{course.适合_for}</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={() => openModal(course)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out shadow-md"
                >
                  click to more
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* "Sabhi Courses Dekhein / Kam Courses Dekhein" CTA */}
        <div className="text-center">
          <button
            onClick={toggleShowAllCourses} // Button click par state toggle karein
            className="inline-block bg-purple-600 text-white text-xl font-semibold px-10 py-4 rounded-full
                       hover:bg-purple-700 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg animate-bounce-slow"
          >
            {showAllCourses ? 'Kam Courses Dekhein' : 'Sabhi Courses Dekhein'} {/* Text change karein */}
          </button>
        </div>
      </div>

      {/* Course Details Modal (previous code for modal remains here) */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" aria-hidden="true" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-6 text-blue-700 dark:text-blue-300 mb-4"
                  >
                    {selectedCourse?.title}
                  </Dialog.Title>
                  <div className="mt-2 text-gray-700 dark:text-gray-300">
                    <p className="mb-3">
                      {selectedCourse?.description}
                    </p>
                    {selectedCourse?.detailed_info && (
                      <p className="mb-3 text-sm italic">
                        More Details: {selectedCourse.detailed_info}
                      </p>
                    )}
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Mukhya Labh:</h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        {selectedCourse?.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end space-x-3">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Closed
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={() => { alert('Enrollment process...'); }}
                    >
                      Enroll 
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}

export default CoursesOverviewSection;