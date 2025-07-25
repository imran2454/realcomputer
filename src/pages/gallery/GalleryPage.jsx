// src/components/GalleryPage.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageModal from './ImageModal'; 

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

 
  const images = [
    { 
      id: 1, 
      src: 'https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xhc3Nyb29tfGVufDB8fDB8fHww',
    title: 'आधुनिक क्लासरूम', 
    description: 'हमारे नवीनतम सुसज्जित क्लासरूम जहाँ छात्र नवीनतम तकनीकों का उपयोग कर सीखते हैं।' 
  },

    { id: 2, 
    src: 'https://images.unsplash.com/photo-1457079209162-162c4947557c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fCVFMCVBNCVCOSVFMCVBNSU4OCVFMCVBNCU4MiVFMCVBNCVBMSVFMCVBNSU4RCVFMCVBNCVCOCUyMCVFMCVBNCU5MSVFMCVBNCVBOCUyMCVFMCVBNCVCMiVFMCVBNSU4OCVFMCVBNCVBQyUyMCVFMCVBNCVCOCVFMCVBNSU4NyVFMCVBNCVCNiVFMCVBNCVBOHxlbnwwfHwwfHx8MA%3D%3D', 
    title: 'हैंड्स-ऑन लैब सेशन', 
    description: 'छात्रों को वास्तविक दुनिया की समस्याओं को हल करने के लिए प्रैक्टिकल लैब सत्र।' 
  },
  { id: 3, 
    src: 'https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D', 
    title: 'विस्तृत लाइब्रेरी', 
    description: 'पुस्तकें, जर्नल और डिजिटल संसाधनों से भरी हमारी शांतिपूर्ण लाइब्रेरी।' 
  },
    { id: 4, 
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D', 
    title: 'छात्रों का इंटरेक्शन', 
    description: 'शिक्षक और छात्रों के बीच सक्रिय चर्चा और सहयोग का माहौल।' 
  },
    { id: 5, 
      src: 'https://plus.unsplash.com/premium_photo-1661952480813-2bb91e2104df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNlbWluYXJ8ZW58MHx8MHx8fDA%3D', 
      title: 'सेमिनार हॉल', 
      description: 'प्रेरणादायक व्याख्यानों और कार्यशालाओं के लिए एक आदर्श स्थान।' 
    },
    { id: 6, src: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nJTIwY2hhbGxhZ25lc3xlbnwwfHwwfHx8MA%3D%3D', 
      title: 'कोडिंग चैलेंज', 
      description: 'छात्र कोडिंग प्रतियोगिताओं में भाग लेते हुए अपनी प्रोग्रामिंग स्किल्स को निखारते हैं।' 
    },
    
  ];

  // Framer Motion variants
  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // Re-enable scrolling
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="bg-gray-50 dark:bg-gray-800 py-12 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div variants={pageVariants} className="text-center py-4 bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-teal-700 dark:to-cyan-800 rounded-lg shadow-lg mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-4 mt-10 ">
            हमारी गैलरी
          </h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-8">
            हमारे संस्थान के पलों और सुविधाओं को तस्वीरों में देखें।
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              onClick={() => openModal(image)}
              whileHover={{ scale: 1.02 }} // Scale up slightly on hover
              whileTap={{ scale: 0.98 }} // Scale down slightly on click
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{image.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </motion.div>
  );
}

export default GalleryPage;