import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// List of headings to be displayed with typewriter effect
const MagicOcean = ["work presentation", "online meeting", "interview"];

// Array of GIF paths to be displayed
const gifImages = [
  "../src/assets/ai_teacher_1.gif",
  "../src/assets/ai_teacher_2.gif",
  "../src/assets/ai_teacher_3.gif"
];

// Animation variants for zooming in images
const zoomInVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { duration: 0.5 } }
};

// Custom typewriter effect hook
function useTypewriter(words, interval = 5000) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, 120);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]);

    return words[index].substring(0, subIndex);
}

const HeroSection = () => {
  const typewrittenText = useTypewriter(MagicOcean);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to cycle through images every 5 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % gifImages.length);
    }, 8000); // Change image every 5 seconds

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation bar */}
      <nav className="px-4 py-2 w-full flex justify-between items-center bg-black text-white">
        <div className="text-xl font-bold">Gru</div>
        <a href="/Login" className="bg-gradient-to-r from-blue-500 to-blue-300 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-blue-400 transition duration-300">
          Sign In
        </a>
      </nav>

      {/* Hero section content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-7xl w-full mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
          {/* Left side for text content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-5xl font-bold">Ace your next</h1>
            <div className="h-16 lg:h-20 overflow-hidden">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl font-bold text-blue-600"
                style={{ height: '1em' }}
              >
                {typewrittenText}
              </motion.h2>
            </div>
            <p className="text-gray-700" style={{ minHeight: '3em' }}>
              Improve your communication skills with private, real-time, and judgement free coaching — powered by AI. Like Grammarly, but for speech!
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="/" className="bg-blue-500 text-white px-6 py-2 rounded-md shadow hover:bg-blue-600 transition duration-300">Try Gru for free</a>
            </div>
          </div>

          {/* Right side for GIF images */}
          <div className="lg:w-1/2 flex justify-end mt-8 lg:mt-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={zoomInVariants}
              key={currentImageIndex}  // Key changes cause the component to re-animate
            >
              <img
                src={gifImages[currentImageIndex]}
                alt="Animated representation of service"
                className="rounded-lg shadow-xl"
                style={{ maxWidth: '500px', width: '100%' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
