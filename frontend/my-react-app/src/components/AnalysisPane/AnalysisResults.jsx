import React from 'react';
import TypingAnimation from '../TypingAnimation/TypingAnimation';

const AnalysisResults = ({ data }) => {
  return (
    <div className="h-full overflow-auto p-6">
      <TypingAnimation 
        text={data} 
        speed={25}
        className="prose prose-sm max-w-none"
      />
    </div>
  );
};

export default AnalysisResults;