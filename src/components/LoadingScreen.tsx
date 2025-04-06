
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [text, setText] = useState('');
  const fullText = 'Loading portfolio...';
  const [showCursor, setShowCursor] = useState(true);
  
  // Typing animation effect
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // When typing is complete, wait a bit and then call onComplete
      const timeout = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [text, onComplete]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-11/12 max-w-2xl p-6 border border-[#22d867]/30 rounded-lg glass-morphism">
        <div className="flex items-center gap-2 mb-2 border-b border-[#22d867]/30 pb-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500 opacity-70"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 opacity-70"></div>
          </div>
          <div className="text-xs text-[#22d867]/70 ml-2">terminal</div>
        </div>
        
        <div className="font-mono p-4 text-[#22d867]">
          <div className="flex items-start">
            <span className="text-[#22d867]/70 mr-2">$</span>
            <div>
              <div className="flex items-center">
                <span>{text}</span>
                {showCursor && <span className="inline-block w-2.5 h-5 bg-[#22d867] ml-0.5"></span>}
              </div>
              
              {text === fullText && (
                <motion.div 
                  className="mt-4 flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Loader className="animate-spin" size={18} />
                  <span>Initializing interface...</span>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
