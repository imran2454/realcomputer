// src/components/AboutUsPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AcademicCapIcon, LightBulbIcon, BuildingLibraryIcon, TrophyIcon } from '@heroicons/react/24/outline'; 

function AboutUsPage() {
  // Framer Motion variants for section entrance animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Framer Motion variants for item staggering
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Dummy Data for Team Members
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Ramesh Prasad',
      designation: 'Founder & Principal',
      experience: '25+ Years in Education Leadership',
      bio: 'डॉ. रमेश प्रसाद ने हमारे संस्थान की स्थापना शिक्षा में उत्कृष्टता के दृष्टिकोण के साथ की। वे छात्रों को उनकी पूरी क्षमता तक पहुँचने में मदद करने के लिए समर्पित हैं।',
      image: 'https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww', // 
    },
    {
      id: 2,
      name: 'Ms. Priya Singh',
      designation: 'Head of Academics, Programming',
      experience: '15+ Years in Software Development & Training',
      bio: 'सुश्री प्रिया सिंह को प्रोग्रामिंग और सॉफ्टवेयर डेवलपमेंट में व्यापक अनुभव है। वह छात्रों को कोडिंग की दुनिया में महारत हासिल करने में मदद करने के लिए उत्साही हैं।',
      image: 'https://plus.unsplash.com/premium_photo-1681493353999-a3eea8b95e1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW58ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 3,
      name: 'Mr. Alok Verma',
      designation: 'Lead Instructor, Web Development',
      experience: '10+ Years in Full Stack Web Development',
      bio: 'श्री आलोक वर्मा एक विशेषज्ञ वेब डेवलपर हैं जो छात्रों को वास्तविक दुनिया के वेब प्रोजेक्ट्स बनाने में मार्गदर्शन करते हैं।',
      image: 'https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww',
    },
    {
      id: 4,
      name: 'Ms. Deepika Sharma',
      designation: 'Admissions Counselor',
      experience: '8+ Years in Student Counseling',
      bio: 'सुश्री दीपिका शर्मा छात्रों को सही कोर्स चुनने और प्रवेश प्रक्रिया में सहायता करती हैं।',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWVufGVufDB8fDB8fHww',
    },
  ];


  const infrastructureFacilities = [
    {
      name: 'आधुनिक क्लासरूम',
      description: 'हमारे क्लासरूम नवीनतम तकनीक, एयर कंडीशनिंग और आरामदायक बैठने की व्यवस्था से सुसज्जित हैं ताकि इष्टतम सीखने का माहौल प्रदान किया जा सके।',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xhc3MlMjByb29tfGVufDB8fDB8fHww',
    },
    {
      name: 'एडवांस्ड कंप्यूटर लैब',
      description: 'हाई-परफॉरमेंस कंप्यूटर और आवश्यक सॉफ्टवेयर से लैस लैब छात्रों को हैंड्स-ऑन अभ्यास और प्रोजेक्ट वर्क के लिए बेहतरीन सुविधाएँ प्रदान करती हैं।',
      image: 'https://plus.unsplash.com/premium_photo-1682124192684-4d2e54febce0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXIlMjBjbGFzcyUyMHJvb218ZW58MHx8MHx8fDA%3D',
    },
    {
      name: 'विस्तृत लाइब्रेरी',
      description: 'हमारी लाइब्रेरी में पाठ्यपुस्तकों, संदर्भ सामग्रियों, ई-बुक्स और शोध पत्रिकाओं का एक विशाल संग्रह है, जो छात्रों की सीखने की जरूरतों का समर्थन करता है।',
      image: 'https://plus.unsplash.com/premium_photo-1725408006810-53ae337c6efd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxpYnJhcnklMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      name: 'सेमिनार हॉल',
      description: 'विशेषज्ञ व्याख्यान, कार्यशालाओं और छात्रों के प्रस्तुतीकरण के लिए एक विशाल और अच्छी तरह से सुसज्जित सेमिनार हॉल उपलब्ध है।',
      image: 'https://plus.unsplash.com/premium_photo-1723823034961-4cbd89295d45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VtaW5hciUyMGhhbGx8ZW58MHx8MHx8fDA%3D',
    },
  ];

  //  Awards & Recognitions
  const awards = [
    {
      year: 2023,
      name: 'Best Coding Institute in Mirzapur',
      description: 'उत्कृष्ट शिक्षण विधियों और छात्र प्लेसमेंट के लिए XYZ शिक्षा मंच द्वारा सम्मानित।',
    },
    {
      year: 2022,
      name: 'Innovation in Digital Education Award',
      description: 'हमारे इंटरैक्टिव ऑनलाइन सीखने के प्लेटफार्मों के लिए टेक एजुकेशन फोरम द्वारा मान्यता प्राप्त।',
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.2 } }
      }}
      className="bg-gray-50 dark:bg-gray-800 py-12 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div variants={sectionVariants} className="text-center py-16 bg-blue-600 dark:bg-blue-800 rounded-lg shadow-lg mb-12 mt-10">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            हमारे बारे में
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            शिक्षा और नवाचार के माध्यम से भविष्य को सशक्त बनाना।
          </p>
        </motion.div>

        {/* Our Story */}
        <motion.div variants={sectionVariants} className="bg-white dark:bg-gray-900 shadow-xl rounded-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-blue-500 pb-3">
            हमारी कहानी
          </h2>
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg space-y-4">
            <p>
              वर्ष 2016 में स्थापित, हमारा संस्थान THE REAL COMPUTERE शिक्षा के परिदृश्य में क्रांति लाने के एक दूरदर्शी मिशन के साथ शुरू हुआ। संस्थापक, **डॉ. रमेश प्रसाद** ने देखा कि कौशल-आधारित शिक्षा और उद्योग की जरूरतों के बीच एक बड़ा अंतर है, और इस अंतर को पाटने के लिए एक मंच बनाने का लक्ष्य रखा।
            </p>
            <p>
              शुरुआत में कुछ कोर्सेज और छात्रों के एक छोटे बैच के साथ, हमने गुणवत्तापूर्ण शिक्षा और व्यावहारिक प्रशिक्षण प्रदान करने पर ध्यान केंद्रित किया। कड़ी मेहनत, समर्पण और लगातार सुधार के प्रति प्रतिबद्धता के माध्यम से, हमने धीरे-धीरे अपनी पेशकशों का विस्तार किया और छात्रों के बीच एक प्रतिष्ठा बनाई।
            </p>
            <p>
              आज, हम छात्रों को आधुनिक उद्योग की मांगों को पूरा करने के लिए आवश्यक ज्ञान और कौशल से लैस करते हुए, अत्याधुनिक कोर्सेज और एक सहायक सीखने का माहौल प्रदान करने वाले एक प्रमुख संस्थान के रूप में खड़े हैं। हमने हजारों सफल पेशेवरों को ढालकर समाज में योगदान दिया है, और हमारा सफर जारी है, हर दिन नए मील के पत्थर हासिल कर रहे हैं।
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div variants={sectionVariants} className="bg-white dark:bg-gray-900 shadow-xl rounded-lg p-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <AcademicCapIcon className="h-8 w-8 text-blue-600 mr-3" /> हमारा मिशन
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                हमारे छात्रों को अत्याधुनिक कौशल, व्यापक ज्ञान और एक मजबूत नैतिक नींव के साथ सशक्त बनाना, जिससे वे उद्योग के नेताओं और समाज के जिम्मेदार नागरिक बन सकें। हम एक ऐसा सीखने का माहौल बनाने के लिए प्रतिबद्ध हैं जो नवाचार, महत्वपूर्ण सोच और आजीवन सीखने को बढ़ावा देता है।
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <LightBulbIcon className="h-8 w-8 text-blue-600 mr-3" /> हमारी दृष्टि
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                शिक्षा में उत्कृष्टता के प्रतीक के रूप में पहचाना जाना, जहां प्रत्येक छात्र को अपनी पूरी क्षमता का एहसास होता है और वह एक तेजी से बदलती दुनिया में सफल होने के लिए तैयार होता है। हम ज्ञान, कौशल और नवाचार के एक केंद्र के रूप में विकसित होने की कल्पना करते हैं जो वैश्विक चुनौतियों का समाधान करता है।
              </p>
            </div>
          </div>
        </motion.div>

        {/* Our Team */}
        <motion.div variants={sectionVariants} className="bg-white dark:bg-gray-900 shadow-xl rounded-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b-2 border-blue-500 pb-3 text-center">
            हमारी टीम
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 text-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-400 dark:border-blue-600"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-md font-medium mb-2">{member.designation}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{member.experience}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Infrastructure */}
        <motion.div variants={sectionVariants} className="bg-white dark:bg-gray-900 shadow-xl rounded-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b-2 border-blue-500 pb-3 text-center">
            इंफ्रास्ट्रक्चर
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infrastructureFacilities.map((facility, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{facility.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards & Recognitions */}
        {awards.length > 0 && (
          <motion.div variants={sectionVariants} className="bg-white dark:bg-gray-900 shadow-xl rounded-lg p-8 mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b-2 border-blue-500 pb-3 text-center">
              पुरस्कार और सम्मान
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center space-x-4 hover:shadow-lg transform hover:-translate-x-1 transition-all duration-300"
                >
                  <TrophyIcon className="h-12 w-12 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{award.name} ({award.year})</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{award.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Back to Home Link */}
        <motion.div variants={sectionVariants} className="text-center mt-12">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800"
          >
            ← होम पेज पर वापस जाएँ
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutUsPage;