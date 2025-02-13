import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function ValentineApp() {
  const [step, setStep] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noMoved, setNoMoved] = useState(false);

  const loveMessages = [
    "You make my heart skip a beat! ❤️",
    "Every moment with you is special! 💕",
    "You're my forever Valentine! 🌹",
    "Love you to the moon and back! 🌙",
  ];

  const handleNoHover = () => {
    if (!noMoved) {
      const randomX = Math.random() * 200 - 100;
      const randomY = Math.random() * 200 - 100;
      setNoPosition({ x: randomX, y: randomY });
      setNoMoved(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200 text-center p-6">
      {accepted && <Confetti />}
      <motion.h1 
        className="text-4xl font-bold text-red-600 mb-4"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Happy Valentine's Day! 💖
      </motion.h1>
      <motion.div 
        className="bg-white p-6 rounded-2xl shadow-lg text-xl text-pink-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {step < loveMessages.length ? loveMessages[step] : "Can you be my Valentine? 💘"}
      </motion.div>
      {step < loveMessages.length ? (
        <button 
          className="mt-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
          onClick={() => setStep(step + 1)}
        >
          Next Message
        </button>
      ) : (
        <div className="mt-4 flex gap-4">
          <button 
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
            onClick={() => setAccepted(true)}
          >
            Yes 
          </button>
          <motion.button 
            className="bg-gray-500 text-white py-2 px-4 rounded-lg"
            style={{ transform: `translate(${noPosition.x}px, ${noPosition.y}px)` }}
            onMouseEnter={handleNoHover}
          >
            No 
          </motion.button>
        </div>
      )}
      {accepted && (
        <motion.div 
          className="text-2xl font-bold text-green-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Yeyyy! 🎉💖
        </motion.div>
      )}
    </div>
  );
}