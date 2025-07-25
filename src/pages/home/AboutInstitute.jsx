

import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutUsSection() {
  const navigate=useNavigate()
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-12 animate-fade-in-down">
              ABOUT REAL COMPUTER
        </h2>

        {/* Institute ka Parichay */}
        <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8 mb-12 transform hover:scale-105 transition duration-300 ease-in-out animate-fade-in">
          <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-300 mb-4">
           ABOUT INSTITUTE
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Real Computer was established in 2016 with the vision to provide high quality education to every individual in the field of modern technology. Our mission is to equip our students with practical knowledge and necessary skills so that they can succeed in the rapidly changing technological world. Our vision is to become a leading institute in technical education that promotes innovation and excellence.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Our aim is not just to provide degrees but to prepare such professionals who can fulfill the demands of the industry and contribute to the technical development of the country.
          </p>
          <button onClick={()=>navigate('/about-us')} className='bg-gray-300 text-blue-600 hover:bg-blue-100 px-8 py-3 rounded-full text-lg font-semibold shadow-xl transform hover:scale-105 transition duration-300 ease-in-out animate-fade-in-up delay-200' >Read more</button>
        </div>

      
      </div>
    </section>
  );
}

export default AboutUsSection;