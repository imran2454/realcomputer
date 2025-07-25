
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate=useNavigate()
  return (
    <section className="relative bg-gradient-to-r from-blue-400 to-indigo-500 text-white min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
  
      <div className="absolute inset-0 z-0 opacity-60">
       
   

        <img
          src="https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwc2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww" // Apni high-quality image URL yahan dalein
          alt="Students learning in a modern classroom"
          className="w-full h-full  object-cover"
        />
    
        
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
        {/* Catchy Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg animate-fade-in-up">
         Technology that simplifies, scales, and strengthens your digital journey.
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl lg:text-2xl font-light opacity-90 drop-shadow-md animate-fade-in-up delay-100">
         Dream of the digital world,
          Learn the language of computers,
          The one who learns skills today
          Will build their identity tomorrow.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
          <button onClick={()=>navigate('/course')} className="bg-white text-blue-700 hover:bg-blue-100 px-8 py-3 rounded-full text-lg font-semibold shadow-xl transform hover:scale-105 transition duration-300 ease-in-out animate-fade-in-up delay-200">
            Courses Dekhein
          </button>
          {/* <button onClick={()=>navigate('/gallery')} className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-full text-lg font-semibold shadow-xl transform hover:scale-105 transition duration-300 ease-in-out animate-fade-in-up delay-300" >
            Admission Lein
          </button> */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;