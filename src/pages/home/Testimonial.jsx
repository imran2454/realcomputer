

import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    course: 'Full Stack Web Development',
    quote: 'Is institute ne mere career ko ek nayi disha di. Instructors ka support aur practical training ne mujhe industry-ready banaya. Aaj main ek reputed company mein Software Developer hoon!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8fDA%3D',  
  },
  {
    id: 2,
    name: 'Rahul Kumar',
    course: 'Data Science & Machine Learning',
    quote: 'Data Science ke complex concepts ko itni aasani se samjhaya gaya ki main hairan reh gaya. Real-world projects par kaam karne ka anubhav anmol tha. Mai ab ek Data Scientist ke roop mein kaam kar raha hoon.',
    image: 'https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95fGVufDB8fDB8fHww',
  },
  {
    id: 3,
    name: 'Anjali Singh',
    course: 'Graphic Design & UI/UX',
    quote: 'Mera passion design tha, aur is institute ne use ek profession mein badal diya. Tools se lekar creative thinking tak, sab kuch yahan seekha. Ab main ek UI/UX Designer hoon!',
    image: 'https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D', 
  },
  {
    id: 4,
    name: 'Amit Verma',
    course: 'Cloud Computing (AWS/Azure)',
    quote: 'Cloud computing ka future hai, aur is course ne mujhe us future ke liye taiyar kiya. Hands-on labs aur certification support ne meri bahut help ki. Highly recommended!',
    image: 'https://media.istockphoto.com/id/2172228245/photo/young-asian-male-focused-on-study-with-laptop-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=4W4qL20shm2W1Bm5YFxMAj0fWcERHAbYiIfsUvH1Yos=', 
  },
  {
    id: 5,
    name: 'Sneha Gupta',
    course: 'Digital Marketing Specialist',
    quote: 'Maine socha nahi tha ki Digital Marketing itna interesting ho sakta hai. Yahan theory aur practical dono par focus kiya gaya, jisse mujhe asani se job mil gayi.',
    image: 'https://images.unsplash.com/photo-1613005798967-632017e477c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D', 
  },
];

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const slideInterval = 3000; 

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

 
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, slideInterval);

    return () => clearInterval(interval);
  }, [currentIndex]); 

  return (
    <section className="relative py-16 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-800 dark:to-indigo-900 text-white overflow-hidden">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12 animate-fade-in-down">
          STUDENT REVIEW
        </h2>

        {/* Slider Container - Modified for single card slide */}
        <div className="relative w-full overflow-hidden"> 
          <div
            className="flex transition-transform duration-700 ease-in-out" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }} 
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full" 
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col items-center text-center h-full mx-auto"> 
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-400 dark:border-blue-600 mb-6"
                  />
                  {/* Quote */}
                  <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-4 flex-grow">
                    "{testimonial.quote}"
                  </p>
                  {/* Name */}
                  <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
                    {testimonial.name}
                  </h3>
                  {/* Course */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    ({testimonial.course})
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-blue-700 bg-opacity-70 hover:bg-opacity-100 text-white p-3 rounded-full shadow-lg z-10 focus:outline-none focus:ring-2 focus:ring-blue-400 ml-2"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-blue-700 bg-opacity-70 hover:bg-opacity-100 text-white p-3 rounded-full shadow-lg z-10 focus:outline-none focus:ring-2 focus:ring-blue-400 mr-2"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>

        {/* Dots Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-blue-700' : 'bg-gray-400'
              } hover:bg-blue-500 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;