// import React, { useState, useEffect } from 'react';
// import { highlightKeywords } from '../../utils/textUtils';

// const TypingAnimation = ({ text, speed = 50, className = '', onComplete }) => {
//   const [displayedText, setDisplayedText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isComplete, setIsComplete] = useState(false);

//   useEffect(() => {
//     if (!text) return;

//     if (currentIndex < text.length) {
//       const timer = setTimeout(() => {
//         setDisplayedText(prev => prev + text[currentIndex]);
//         setCurrentIndex(prev => prev + 1);
//       }, speed);

//       return () => clearTimeout(timer);
//     } else if (!isComplete) {
//       setIsComplete(true);
//       onComplete?.();
//     }
//   }, [currentIndex, text, speed, isComplete, onComplete]);

//   // Reset when text changes
//   useEffect(() => {
//     setDisplayedText('');
//     setCurrentIndex(0);
//     setIsComplete(false);
//   }, [text]);

//   const processedText = highlightKeywords(displayedText);

//   return (
//     <div className={`relative ${className}`}>
//       <div 
//         className="whitespace-pre-wrap leading-relaxed text-gray-800"
//         dangerouslySetInnerHTML={{ __html: processedText }}
//       />
//       {!isComplete && currentIndex < text.length && (
//         <span className="inline-block w-2 h-5 bg-blue-600 ml-1 animate-pulse" />
//       )}
//     </div>
//   );
// };

// export default TypingAnimation;
import React, { useState, useEffect, useRef } from 'react';
import { highlightKeywords } from '../../utils/textUtils';

const TypingAnimation = ({ text, speed = 15, className = '', onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef(null); // Scroll ref

  useEffect(() => {
    if (!text) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);

        // Scroll container to bottom
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }, speed);

      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, text, speed, isComplete, onComplete]);

  // Reset when text changes
  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
    setIsComplete(false);

    // Scroll to top when new text arrives
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [text]);

  const processedText = highlightKeywords(displayedText);

  return (
    <div 
      ref={containerRef} 
      className={`relative ${className} overflow-auto h-full`}
    >
      <div 
        className="whitespace-pre-wrap leading-relaxed text-gray-800"
        dangerouslySetInnerHTML={{ __html: processedText }}
      />
      {!isComplete && currentIndex < text.length && (
        <span className="inline-block w-2 h-5 bg-blue-600 ml-1 animate-pulse" />
      )}
    </div>
  );
};

export default TypingAnimation;
